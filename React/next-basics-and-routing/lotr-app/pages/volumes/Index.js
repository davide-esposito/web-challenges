import Link from "next/link";
import { introduction, volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function VolumesPage() {
  const router = useRouter();

  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div>
      <Head>
        <title>Lord of the Rings Volumes</title>
      </Head>
      <h1>Lord of the Rings Volumes</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume, index) => (
          <li key={index}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Go to a Random Volume</button>
    </div>
  );
}
