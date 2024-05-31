import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(`/api/random-character`, fetcher);

  if (error) return <p>Failed to load products</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Random Character</h1>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>
      <p>
        <strong>Age:</strong> {data.age}
      </p>
      <p>
        <strong>Gender:</strong> {data.gender}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Twitter:</strong> {data.twitter}
      </p>
      <p>
        <strong>Geohash:</strong> {data.geohash}
      </p>
    </div>
  );
}
