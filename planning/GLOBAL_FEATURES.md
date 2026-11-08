# Global features and shared standards

This document collects cross-page decisions for the central closing phase. These topics are intentionally not implemented while individual pages are being planned and built. At the end, discuss/consolidate them, implement them consistently across the relevant pages, and then perform the full HQ review.

## Shared search standard

Apply these rules to every page that provides a search function:

- **Partial matching:** searching for part of a word/title returns matching entries (e.g. `Geburts` finds `Geburtstag Mama`).
- **Case-insensitive matching:** uppercase and lowercase are treated equally.
- **Multiple search terms:** all entered terms must match, but they do not need to be adjacent or appear in the same order (e.g. `Geburt Mama` finds `Geburtstag Mama`).
- **Umlaut/transliteration normalization:** equivalent German spellings should match (e.g. `Munchen` finds `München`; `ae`/ `ä`, `oe`/ `ö`, `ue`/ `ü`, and `ss`/ `ß`).
- **Typo tolerance:** search should tolerate small typing errors and still return the intended matching result (e.g. `Geburstag` should find `Geburtstag`). The matching threshold should be tuned during implementation to avoid excessive unrelated results.

These are shared search rules; each page may still have its own searchable fields, result presentation, and page-specific filters. Search must continue to respect the page's own filtering and navigation behavior.

## Status

- Collected from Calendar planning on 2026-11-09.
- Consolidation, implementation across pages, and final consistency review are reserved for the central closing phase.
