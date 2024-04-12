import "./Tag.css";

export default function Tag({ tag }) {
  console.log(tag);
  const isAdmin = tag.includes(`admin`);
  console.log(isAdmin);
  return <li className={`tag ${isAdmin ? "tag--highlight" : ""}`}>{tag}</li>;

  // return (
  //   <li className={`tag ${tag === `admin` ? `tag--highlight` : ``}`}>{tag}</li>
  // );
}
