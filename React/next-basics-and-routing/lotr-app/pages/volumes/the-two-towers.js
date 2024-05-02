import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import VolumeNavigation from "@/components/VolumeNavigation";

export default function TwoTowersPage() {
  const volume = volumes.find((volume) => volume.slug === "the-two-towers");

  return (
    <div>
      <Link href="/volumes/Index">Back to all Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/the-two-towers.png"
        alt="the-two-towers"
        width={140}
        height={230}
      />
      <VolumeNavigation currentSlug={volume.slug} volumes={volumes} />
    </div>
  );
}
