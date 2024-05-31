import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <p>Failed to load products</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h1>Product Detail</h1>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <Link href="/products/">Back to all Products</Link>
    </>
  );
}
