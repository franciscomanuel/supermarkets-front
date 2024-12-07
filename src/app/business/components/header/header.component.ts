import { Component, HostBinding, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { ButtonModule } from "../../../core/modules/button/button.module";
import { environment } from "../../../../environments/environment";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "horus-header",
    imports: [MatIconModule, MatButtonModule, MatMenuModule, ButtonModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.sass"
})
export class HeaderComponent {
  @HostBinding("class") className = "flex justify-center items-center";

  readonly tranlateService: TranslateService = inject(TranslateService);

  languages = environment.languages;
  selectedLanguage = environment.defaultLanguage;

  onLanguageChange(lang: string): void {
    this.selectedLanguage = lang;

    this.tranlateService.use(lang).subscribe();
  }
}
