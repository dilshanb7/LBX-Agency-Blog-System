export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date?: string;
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  articles: Article[];
  subCategories?: string[];
}

export interface NavItem {
  label: string;
  value: string;
}