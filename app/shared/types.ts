export type Product = {
    id: number;
    name: string;
    icon: string;
    //category: SubCategory
    createdAt: string;
    updatedAt: string;
    //shops: [Shop]!
  }

export type Shop = {
    id: number;
    isActive: Boolean;
    name: string;
    phone: string;
    address: string;
    opensAt: string;
    closesAt: string;
    longitude: number;
    latitude: number;
    currency: string;
    createdAt: string;
    updatedAt: string;
    products: Product[];
    //categories: [];
}

export type Category = {
  id: number;
  category: string;
  icon: string;
  subcategories: SubCategory[];
  createdAt: string;
  updatedAt: string;
  //products: Product[];
}

export type SubCategory = {
  id: number;
  category: string;
  icon: string;
  parent_category: Category[];
  createdAt: string;
  updatedAt: string;
  products: Product[];
}
  
  export type Query = {
    getProducts: Product[];
    getShops: Shop[];
    getMainCategory: Category;
  }