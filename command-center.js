/* SATYRN Command Center preview interaction. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const welcome = $('ccWelcomeBackdrop');
  const dismiss = $('ccWelcomeDismiss');
  const miniWrap = $('ccMiniWrap');
  const miniButton = $('ccMiniButton');
  const expanded = $('ccExpandedCard');
  const expandedBackdrop = $('ccExpandedBackdrop');
  const closeButton = $('ccExpandedClose');
  const homePage = $('page-home');
  if (!welcome || !miniWrap || !miniButton || !expanded || !homePage) return;

  const dateText = new Intl.DateTimeFormat('de-DE', { weekday:'long', day:'numeric', month:'long', year:'numeric' }).format(new Date());
  $('ccWelcomeDate').textContent = dateText;
  $('ccExpandedDate').textContent = dateText;
  let expandedOpen = false;
  let lastFocus = null;

  function onHome() {
    return homePage.classList.contains('active-page');
  }
  function openExpanded() {
    if (!onHome() || welcome.classList.contains('is-open')) return;
    lastFocus = document.activeElement;
    expandedOpen = true;
    expanded.classList.add('is-open');
    expandedBackdrop.classList.add('is-open');
    expanded.setAttribute('aria-hidden','false');
    expandedBackdrop.setAttribute('aria-hidden','false');
    miniButton.setAttribute('aria-expanded','true');
    document.body.classList.add('cc-expanded-active');
    closeButton.focus({preventScroll:true});
  }
  function closeExpanded(restoreFocus=true) {
    if (!expandedOpen) return;
    expandedOpen = false;
    expanded.classList.remove('is-open');
    expandedBackdrop.classList.remove('is-open');
    expanded.setAttribute('aria-hidden','true');
    expandedBackdrop.setAttribute('aria-hidden','true');
    miniButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('cc-expanded-active');
    if (restoreFocus && lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({preventScroll:true});
  }
  function showMiniWidget() {
    miniWrap.classList.add('is-visible');
    miniWrap.setAttribute('aria-hidden','false');
  }
  function hideMiniWidget() {
    miniWrap.classList.remove('is-visible');
    miniWrap.setAttribute('aria-hidden','true');
  }
  function closeWelcome() {
    welcome.classList.remove('is-open');
    welcome.setAttribute('aria-hidden','true');
    document.body.classList.remove('cc-welcome-active');
    showMiniWidget();
    sessionStorage.setItem('satyrn-command-center-welcome-seen-v1','1');
    miniButton.focus({preventScroll:true});
  }

  miniButton.addEventListener('click', openExpanded);
  closeButton.addEventListener('click', () => closeExpanded());
  expandedBackdrop.addEventListener('click', () => closeExpanded());
  dismiss.addEventListener('click', closeWelcome);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && expandedOpen) {
      event.preventDefault();
      closeExpanded();
    }
  });
  document.querySelectorAll('[data-page]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.page !== 'home') closeExpanded(false);
    });
  });

  // Keep the details disclosure state in the DOM when the card is closed and reopened.
  document.querySelectorAll('[data-cc-detail]').forEach(detail => {
    detail.addEventListener('toggle', () => {
      detail.dataset.lastOpen = detail.open ? 'true' : 'false';
    });
  });

  if (sessionStorage.getItem('satyrn-command-center-welcome-seen-v1') !== '1') {
    hideMiniWidget();
    welcome.classList.add('is-open');
    welcome.setAttribute('aria-hidden','false');
    document.body.classList.add('cc-welcome-active');
    requestAnimationFrame(() => dismiss.focus({preventScroll:true}));
  } else {
    welcome.setAttribute('aria-hidden','true');
    showMiniWidget();
  }
})();