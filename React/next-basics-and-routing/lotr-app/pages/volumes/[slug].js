import Link from "next/link";
import Image from "next/image";
import VolumeNavigation from "@/components/VolumeNavigation";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    null;
  }

  return (
    <section>
      <Head>
        <title>{volume.title}</title>
      </Head>
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
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
      <VolumeNavigation currentSlug={volume.slug} volumes={volumes} />
    </section>
  );
}
