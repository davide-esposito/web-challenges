import Link from "next/link";

export default function Navigation({ currentSlug, cities }) {
  const index = cities.findIndex((city) => city.slug === currentSlug);
  const prevCity = index > 0 ? cities[index - 1] : null;
  const nextCity = index < cities.length - 1 ? cities[index + 1] : null;

  return (
    <>
      {prevCity && (
        <Link href={`/cities/${prevCity.slug}`}>
          {" "}
          Previous City: {prevCity.name}
        </Link>
      )}
      <br></br>
      {nextCity && (
        <Link href={`/cities/${nextCity.slug}`}>
          {" "}
          Next City: {nextCity.name}
        </Link>
      )}
    </>
  );
}
