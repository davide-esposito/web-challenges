import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Lord of the Rings Volume Explorer</h1>
      <Link href="/volumes/Index">Explore Volumes</Link>
    </div>
  );
}
