export interface Recipe {
  id: number;
  title: string;
  subtitle: string;
  conservation: string;
  calories: string;
  imageUrl: string;
}

export interface Bonus {
  id: number;
  title: string;
  subtitle: string;
  count: string;
  price: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  text: string;
  imageUrl: string;
}