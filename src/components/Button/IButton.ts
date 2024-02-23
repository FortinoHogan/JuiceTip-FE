export interface IButton {
  href?: string;
  variant: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: any;
}
