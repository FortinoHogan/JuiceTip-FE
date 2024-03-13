import axios from "axios";

export interface IProduct {
  productId: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: string;
  regionId: string;
  customerId: string;
  notes?: string;
  categoryId: string;
}

export const getProducts = async (callback: any) => {
  try {
    await axios.get("https://localhost:7234/product").then((res: any) => {
      callback(res.data.payload);
    });
  } catch (error) {
    console.log(error);
  }
};
