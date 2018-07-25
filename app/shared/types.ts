// tslint:disable-next-line:interface-over-type-literal
export type Product = {
    id: number;
    name: string;
    icon: string;
    category: SubCategory
    createdAt: string;
    updatedAt: string;
    shops: Shop[];
    generic_properties: GenericProperty[];
};

// tslint:disable-next-line:interface-over-type-literal
export type GenericProperty = {
  id: number;
  property: string;
  property_group: string;
  createdAt: string;
  updatedAt: string;
};

// tslint:disable-next-line:interface-over-type-literal
export type Shop = {
    id: number;
    isActive: boolean;
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
    properties: Property;
    // categories: [];
};
// tslint:disable-next-line:interface-over-type-literal
export type Property = {
  id: number;
  property: string;
  property_group: string;
  is_default: boolean;
  price: number;
  generic_id: number;
  createdAt: string;
  updatedAt: string;
};

// tslint:disable-next-line:interface-over-type-literal
export type Category = {
  id: number;
  category: string;
  icon: string;
  subcategories: SubCategory[];
  createdAt: string;
  updatedAt: string;
  // products: Product[];
};

// tslint:disable-next-line:interface-over-type-literal
export type SubCategory = {
  id: number;
  category: string;
  icon: string;
  parent_category: Category[];
  createdAt: string;
  updatedAt: string;
  products: Product[];
};

// tslint:disable-next-line:interface-over-type-literal
export type Query = {
    getProducts: Product[];
    getProduct: Product;
    getShops: Shop[];
    getMainCategory: Category;
// tslint:disable-next-line:eofline
};