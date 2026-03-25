export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  color: string;
  modelType: 'cookie' | 'stick';
}

export interface CartItem extends Product {
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Almond stick',
    price: 1,
    description: 'Crunchy sticks loaded with premium roasted almonds.',
    category: 'Sticks',
    color: '#D2B48C',
    modelType: 'stick',
  },
  {
    id: '2',
    name: 'Raisins&Oats',
    price: 1,
    description: 'Healthy oats blended with sweet sun-dried raisins.',
    category: 'Cookies',
    color: '#8B4513',
    modelType: 'cookie',
  },
  {
    id: '3',
    name: 'Walnut Cookies',
    price: 180,
    description: 'Rich buttery cookies with a generous walnut crunch.',
    category: 'Cookies',
    color: '#A0522D',
    modelType: 'cookie',
  },
  {
    id: '4',
    name: 'Muesli Cookies',
    price: 160,
    description: 'A power-packed blend of grains, seeds, and dried fruits.',
    category: 'Cookies',
    color: '#DEB887',
    modelType: 'cookie',
  },
  {
    id: '5',
    name: 'Choco chips Cookies',
    price: 140,
    description: 'Classic cookies loaded with melt-in-your-mouth chocolate chips.',
    category: 'Cookies',
    color: '#3D2B1F',
    modelType: 'cookie',
  },
  {
    id: '6',
    name: 'Shrewsbury cookies',
    price: 200,
    description: 'The legendary buttery delight from the heart of Pune.',
    category: 'Cookies',
    color: '#F5DEB3',
    modelType: 'cookie',
  },
];
