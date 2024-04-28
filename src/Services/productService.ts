import axios from "axios";

export interface IProduct {
  productId: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: string;
  categoryId: string;
  categoryName: string;
  regionId: string;
  regionName: string;
  customerId: string;
  customerName: string;
  notes?: string;
  createdAt: Date;
  lastUpdatedAt: Date;
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
