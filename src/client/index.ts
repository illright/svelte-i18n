import merge from 'deepmerge'

import { MessageObject } from './types'

// defineMessages allow us to define and extract dynamic message ids
export function defineMessages(i: Record<string, MessageObject>) {
  return i
}

export { $locale as locale, setInitialLocale } from './stores/locale'
export {
  $dictionary as dictionary,
  $locales as locales,
  addMessages,
} from './stores/dictionary'
export { $isLoading as isLoading } from './stores/loading'
export { $format as format, $format as _, $format as t } from './stores/format'

// utilities
export { merge }
export { customFormats, addCustomFormats } from './includes/formats'
export {
  flushQueue as waitLocale,
  registerLocaleLoader as register,
} from './includes/loaderQueue'

// @deprecated
export { getClientLocale } from './includes/utils'
export { setInitialLocale as waitInitialLocale } from './stores/locale'