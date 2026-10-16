export type Lang = 'en' | 'ar';

/** A value that exists in every supported language. Used by all data files. */
export type Localized<T = string> = Record<Lang, T>;

type Widen<T> = { [K in keyof T]: T[K] extends string ? string : Widen<T[K]> };
export type Translations = Widen<typeof import('./en').en>;
