import type { Locale } from './config';
import { enDictionary } from './dictionaries/en';
import { knDictionary } from './dictionaries/kn';

export async function getDictionary(locale: Locale) {
  return locale === 'kn' ? knDictionary : enDictionary;
}
