"use client";

import { api } from "@/common";
import {
  cartProductType,
  generalCategoryType,
  ratingType,
  subCategoryType,
  userParamsType,
} from "@/common/types";
import { AxiosError } from "axios";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider";

export type ProductParams = {
  _id?: string;
  productName: string;
  generalCategoryId: string;
  subCategoryId: string;
  serialNumber: string;
  rating?: {
    ratedQty: number;
    starAverage: number;
  };
  price: number | null;
  remainQty: number | null;
  images: string[];
  discount: number | null;
  description: string;
  info?: string;
  productType: {
    productColor: string[];
    productSize: string[];
  };
  productTag: string[];
  merchantId?: string;
  quantity?: number | null;
};

type DataContextType = {
  generalCategories: generalCategoryType[] | undefined;
  subCategories: subCategoryType[] | undefined;
  createProduct: (params: ProductParams) => Promise<void>;
  selectedIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
  products: ProductParams[];
  setProducts: Dispatch<SetStateAction<ProductParams[]>>;
  addRating: (props: ratingType) => void;
  getProducts: () => Promise<void>;
  addCart: cartProductType[];
  setAddCart: Dispatch<SetStateAction<cartProductType[]>>;
  totalPrice: number;
  numberFormatter: Intl.NumberFormat;
  user: userParamsType;
  setUser: Dispatch<SetStateAction<userParamsType>>;
  getUser: (params: userParamsType) => Promise<void>;
  productCount: number;
  setProductCount: Dispatch<SetStateAction<number>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useAuth();

  const [refresh, setRefresh] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [generalCategories, setGeneralCategories] =
    useState<generalCategoryType[]>();
  const [subCategories, setSubCategories] = useState<subCategoryType[]>();
  const [selectedIndex, setIndex] = useState<number>(0);
  const [products, setProducts] = useState<ProductParams[]>([]);
  const [addCart, setAddCart] = useState<cartProductType[]>([]);
  const [user, setUser] = useState<userParamsType>({} as userParamsType);
  const [productCount, setProductCount] = useState(1);

  // GET USER
  const getUser = async () => {
    try {
      const { data } = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setUser(data);

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  // CREATE PRODUCT
  const createProduct = async (props: ProductParams) => {
    try {
      const { data } = await api.post("/createProduct", props, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setRefresh(refresh + 1);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  // GET PRODUCT
  const getProducts = async () => {
    try {
      const { data } = await api.get("/getProducts", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setProducts(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  // GET GENERAL CATEGORIES
  const getGeneralCategories = async () => {
    try {
      const res = await api.get("/getGeneralCategories");
      setGeneralCategories(res.data);
    } catch (error) {
      console.log("in getGeneralCategories() function error:", error);
    }
  };

  // GET SUB CATEGORIES
  const getSubCategories = async () => {
    try {
      const res = await api.get("/getSubCategories");
      setSubCategories(res.data);
    } catch (error) {
      console.log("in getSubCategories() function error:", error);
    }
  };

  // ADD RATING
  const addRating = async (props: ratingType) => {
    const { productId, comment, rate } = props;
    try {
      const { data } = await api.post(
        "/addRating",
        { productId, rate, comment },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setRefresh((prev) => prev + 1);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    getProducts();
    getGeneralCategories();
    getSubCategories();
  }, [refresh]);

  useEffect(() => {
    if (isLoggedIn) {
      getUser();
    }
  }, [isLoggedIn, refresh]);

  const totalPrice = addCart.reduce(
    (sum, currentValue) => sum + currentValue.price * currentValue.quantity,
    0
  );
  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <DataContext.Provider
      value={{
        generalCategories,
        subCategories,
        createProduct,
        selectedIndex,
        setIndex,
        products,
        setProducts,
        addRating,
        getProducts,
        addCart,
        setAddCart,
        totalPrice,
        numberFormatter,
        user,
        setUser,
        getUser,
        productCount,
        setProductCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
