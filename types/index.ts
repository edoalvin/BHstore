export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "all" | "daily" | "sport" | "maternity";
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  location: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}
