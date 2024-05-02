import Link from "next/link";
import { introduction, volumes } from "@/lib/data";

export default function VolumesPage() {
  return (
    <div>
      <h1>Lord of the Rings Volumes</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volumes.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
