import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Navigation from "@/components/navigation";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.query) {
    return null;
  }

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <>
      <h1>
        {city.name}, {city.country}
      </h1>
      <h2>Population: {city.population}</h2>
      <p>{city.description}</p>
      <Link href="/cities">Back to all cities</Link>
      <br></br>
      <Navigation currentSlug={city.slug} cities={cities} />
    </>
  );
}
