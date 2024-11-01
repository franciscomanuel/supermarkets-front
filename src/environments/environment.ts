import { version } from "../../package.json";

export const environment = {
  production: true,
  application: {
    name: "Supermarkets",
    version
  },
  defaultLanguage: "es",
  languages: ["es", "en"]
};
