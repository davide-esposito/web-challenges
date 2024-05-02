import Link from "next/link";

export default function VolumeNavigation({ currentSlug, volumes }) {
  const index = volumes.findIndex((volume) => volume.slug === currentSlug);
  const prevVolume = index > 0 ? volumes[index - 1] : null;
  const nextVolume = index < volumes.length - 1 ? volumes[index + 1] : null;

  return (
    <div>
      {prevVolume && (
        <Link href={`/volumes/${prevVolume.slug}`}>
          ← Previous Volume: {prevVolume.title}
        </Link>
      )}
      <br></br>
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>
          Next Volume: {nextVolume.title} →
        </Link>
      )}
    </div>
  );
}
