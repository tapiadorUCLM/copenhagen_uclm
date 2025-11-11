# Copilot: how to work in this repo

This repository is a Zendesk Guide theme (Copenhagen-based). Build assets locally, preview with ZCLI, and ship a zip or publish to a brand. Avoid editing generated files.

## Architecture at a glance
- Templates: Handlebars under `templates/` power Help Center pages (e.g., `article_page.hbs`, `document_head.hbs`).
- Styles: Sass under `styles/` compiled to `style.css` via a custom Rollup Sass plugin (`zass.mjs`). Sass variables are derived from `manifest.json` settings and asset filenames.
- Legacy JS: Vanilla modules in `src/` bundled to a single IIFE `script.js` (no Babel; target ES2015 features only).
- React modules: Feature folders in `src/modules/*` (TS/TSX) built as native ES modules to `assets/*-bundle.js`. An import map is injected into `templates/document_head.hbs` so templates can use bare specifiers (see `generate-import-map.mjs`).
- Chunking: Rollup groups shared deps into `shared-bundle.js`, WYSIWYG into `wysiwyg-bundle.js`, `ticket-fields-bundle.js`, and per-module `*-translations-bundle.js` from `translations/locales/*.json`.

## Everyday workflows
- Install and preview: `yarn install` then `yarn start` (watches build and runs `zcli themes:preview`). First-time: `yarn zcli login -i`.
- Build for release: `yarn build` (cleans `assets/*-bundle.js`, builds `script.css/js`, injects import map into `templates/document_head.hbs`).
- Test: `yarn test` (Jest + jsdom; TS via ts-jest; example test: `src/Dropdown.spec.js`).
- A11y audits: `yarn test-a11y -d` (dev) with `.a11yrc.json` or set `end_user_email`, `end_user_password`, `subdomain`, `urls` for CI mode.
- i18n (React modules):
  - Extract keys from code to `src/modules/<module>/translations/en-us.yml`: `yarn i18n:extract [--module=name] [--mark-obsolete]`.
  - Download official locales to `translations/locales/`: `yarn i18n:update-translations [--module=name]`.
- Publish to a brand: set `BRAND_ID` and run `node bin/theme-upload.js` (imports, publishes, and removes non-live copies via `zcli`).

## Conventions that matter
- Do not edit generated artifacts: `style.css`, `script.js`, `assets/*-bundle.js`.
- Add a new React module by wiring it in `rollup.config.mjs` under the `input` map; Rollup emits `assets/<name>-bundle.js` and updates the import map automatically.
- In templates, import modules using bare specifiers provided by the import map, not file paths:
  ```hbs
  <script type="module">import { Component } from "service-catalog";</script>
  ```
- Sass variables match `manifest.json` setting identifiers; asset filenames become variables like `$assets-<basename-with-+-.replaced>-<ext>` (validated in `zass.mjs`). Use `zass-lighten`/`zass-darken` if you need lighten/darken preserved for end-user editing.
- Commit messages follow Conventional Commits; releases are automated with `semantic-release` (see `README.md`).

## Gotchas
- `document_head.hbs` must contain an empty `<script type="importmap"></script>` tag; the build replaces it with the generated map.
- `script.js` is built without Babel; stick to widely supported ES2015 syntax in `src/`.
- Asset filenames must only use `[A-Za-z0-9._+-]` (enforced in `zass.mjs`).

## Key references
- Build: `rollup.config.mjs`, `zass.mjs`, `generate-import-map.mjs`
- Theme settings: `manifest.json`, `settings/`
- React modules: `src/modules/` (e.g., `new-request-form`, `service-catalog`, `approval-requests`)
- Legacy JS entry: `src/index.js`
- Styles entry: `styles/index.scss`
- Tooling scripts: `bin/` (upload, i18n, lighthouse)
