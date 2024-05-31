import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const { data, error } = useSWR(`/api/products`, fetcher);

  if (error) return <p>Failed to load products</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
