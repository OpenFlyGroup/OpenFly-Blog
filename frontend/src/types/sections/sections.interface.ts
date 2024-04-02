export interface MenuItem {
  icon?: string;
  label?: string;
  url: string;
}

export interface ICrumbsProps {
  items: MenuItem[]
}
