export type Product = {
    id: number;
    name: string;
    icon: string;
    category: SubCategory
    createdAt: string;
    updatedAt: string;
    shops: Shop[];
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
    properties:Property;
    //categories: [];
}

export type Property = {
  id: number;
  property: string;
  property_group: string;
  is_default: boolean;
  price: number;
  generic_id: number;
  createdAt: string;
  updatedAt: string;
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
    getProduct:Product;
    getShops: Shop[];
    getMainCategory: Category;
  }