import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks/store';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const useData = () => {
  const productID = useAppSelector((state) => state.config.productID);
  const [data, setData] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productID}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }

        const product = (await response.json()) as Product;

        setData(product);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setloading(false);
      }
    })();
  }, [productID]);

  return { data, error, loading };
};
