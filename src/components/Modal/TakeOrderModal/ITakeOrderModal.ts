import { IProduct } from "../../../Services/productService";

export interface ITakeOrderModal {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  product: IProduct;
}
