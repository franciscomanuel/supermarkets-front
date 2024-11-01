import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

export function initializeTranslations(
  translateService: TranslateService
): () => Promise<void> {
  return () =>
    new Promise<void>((resolve) => {
      const defaultLang = environment.defaultLanguage;

      translateService.addLangs(environment.languages);
      translateService.setDefaultLang(defaultLang);
      translateService.use(defaultLang).subscribe(() => {
        resolve();
      });
    });
}
