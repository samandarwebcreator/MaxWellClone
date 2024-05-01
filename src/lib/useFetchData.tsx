"use client";

import { useState, useEffect } from "react";

export interface Product {
  productName: string;
  productImage: string;
  productDesc: string;
  productPrice: string;
  id: string;
}

function useFetchData(apiUrl: string): {
  data: Product[] | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<Product[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData: Product[] = await response.json();
        console.log(jsonData);

        setData(jsonData);
        setLoading(false);
        setError(null);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
}

export default useFetchData;
