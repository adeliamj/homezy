export type PropertyType = {
  id: number;
  image: string;
  price: number;
  per?: string;
  title: string;
  address: string;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  type?: string;
  contact?: {
    name: string;
    role: string;
    company: string;
    officeAddress: string;
  };
  location: {
    lat: number;
    lng: number;
  };
};


export interface MarkerType {
  position: [number, number];
  text: string;
  id: string | number;
}
