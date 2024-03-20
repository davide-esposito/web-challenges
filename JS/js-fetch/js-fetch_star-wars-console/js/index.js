console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  console.log(data.results[2].eye_color);
}

fetchData();
