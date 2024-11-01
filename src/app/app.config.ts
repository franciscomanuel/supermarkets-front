import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withComponentInputBinding, withViewTransitions } from "@angular/router";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from "@angular/common/http";
import { provideClientHydration, withHttpTransferCacheOptions } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { initializeTranslations } from "./core/configs/translation.config";

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, "./i18n/", ".json");

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideHttpClient(withFetch(), withInterceptors([ErrorResponseInterceptor])),
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideAnimationsAsync(),
    provideClientHydration(
      withHttpTransferCacheOptions({ includePostRequests: true }) // Cachea las peticiones post para mejorar el rendimiento de la aplicación
    ),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        },
        defaultLanguage: "en"
      })
    ]),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslations,
      deps: [TranslateService],
      multi: true
    }
  ]
};
