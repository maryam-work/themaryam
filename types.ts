export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category?: string;
  isOnSale?: boolean;
}

export interface Category {
  id: string;
  title: string;
  description?: string;
  image: string;
}

export interface Article {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  image: string;
  tag: string;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}