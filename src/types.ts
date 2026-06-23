export interface Treatment {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string; // Unsplash image URL
  symptoms: string[];
  careApproach: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  initials: string;
}

export interface ChooseCard {
  id: string;
  number: string;
  title: string;
  description: string;
}
