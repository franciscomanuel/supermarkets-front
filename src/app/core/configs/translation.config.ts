import { TranslateService } from '@ngx-translate/core';

export function initializeTranslations(
  translateService: TranslateService
): () => Promise<void> {
  return () =>
    new Promise<void>((resolve) => {
      const defaultLang = 'es';

      console.log('defaultLanguage: ', defaultLang);

      translateService.addLangs(['es', 'en']);
      translateService.setDefaultLang(defaultLang);
      translateService.use(defaultLang).subscribe(() => {
        resolve();
      });
    });
}
