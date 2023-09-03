import { defaultDarkTheme } from './default-dark-theme';
import { defaultLightTheme } from './default-light-theme';

export function getCoreThemes(includeDefault: boolean) {
  let themes: Record<string, string> = {};

  if (includeDefault) {
    themes['default'] = 'T5EK.Settings.SheetTheme.default';
  }

  themes['light'] = defaultLightTheme.name;
  themes['dark'] = defaultDarkTheme.name;

  return themes;
}

export const themeVariables = {
  '--t5ek-title-font-family': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-body-font-family': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-primary-font-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-faintest-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-faint-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-light-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-primary-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-secondary-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-tertiary-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-primary-accent-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-white': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-faint-white': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-linked-accent-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-unlinked-accent-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-linked-light-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-unlinked-light-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-sheet-unlocked-icon-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-sheet-locked-icon-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-header-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-header-border-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-prepareable': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-equipped': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-equipped-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-equipped-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-prepared': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-prepared-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-prepared-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-pact': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-pact-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-pact-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-atwill': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-atwill-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-atwill-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-innate': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-innate-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-innate-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-alwaysprepared': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-alwaysprepared-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-alwaysprepared-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-magic-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-faint-magic-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-magic-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-attunement-required': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-icon-attuned': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-xp-bar': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-encumbrance-bar': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-encumbrance-bar-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-encumbrance-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-warning-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-icon-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-icon-shadow': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-icon-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-icon-font': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-icon-hover': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-note-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-exhaustion-intensity1-bg': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-exhaustion-intensity2-bg': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-exhaustion-intensity3-bg': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-ability-accent': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-context-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-context-shadow': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-check-default': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-check-checked': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-checkbox-font': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-checkbox-outline': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-checkbox-unchecked': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-checkbox-checked': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-item-input-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-item-input-background-hover': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-encumbrance-text': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-death-save-icon-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-inspiration-color-hover': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-inspiration-text-shadow-hover': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-inspiration-inspired-text-shadow': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-inspiration-inspired-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-motion-color-hover': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-motion-text-shadow-hover': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-motion-in-motion-text-shadow': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-motion-in-motion-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-hp-bar-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-death-save-backdrop-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-death-save-text-shadow': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-hp-overlay-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-inventory-grid-image-contrast-text-shadow': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-inventory-grid-hover-use-item-contrast-text-shadow': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-sheet-background': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-item-info-card-bg': {
    type: 'todo',
    group: 'todo,',
  },
  '--t5ek-content-entity-link-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-content-entity-link-hover-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-content-entity-link-bg': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-content-entity-link-hover-bg': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-activated-profile-toggle-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-exhaustion-intensity1-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-exhaustion-intensity2-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-exhaustion-intensity3-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-death-save-text-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-tinymce-toolbar-bg': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-tinymce-sidebar-bg': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-tinyme-toolbar-button-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-prosemirror-button-color': {
    type: 'todo',
    group: 'todo',
  },
  '--t5ek-prosemirror-dropdown-item-hover-color': {
    type: 'todo',
    group: 'todo',
  },
};
