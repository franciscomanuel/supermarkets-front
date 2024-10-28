export interface MenuSinenav {
  title: string;
  link: string;
  icon: string;
  hide: boolean;
  children?: MenuSinenav[];
}
