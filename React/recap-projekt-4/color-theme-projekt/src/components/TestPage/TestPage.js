import "./TestPage.css";

export default function TestPage({ onClose, theme }) {
  const primaryColor = theme.colors.find(
    (color) => color.role === "primary"
  ).value;
  const secondaryColor = theme.colors.find(
    (color) => color.role === "secondary"
  ).value;
  const surfaceColor = theme.colors.find(
    (color) => color.role === "surface"
  ).value;
  const surfaceOnColor = theme.colors.find(
    (color) => color.role === "surface-on"
  ).value;

  return (
    <section
      className="test-page"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
        "--surface-color": surfaceColor,
        "--surface-on-color": surfaceOnColor,
      }}
    >
      <button className="test-page__close-button" onClick={onClose}>
        Close Preview
      </button>
      <h1 className="test-page__title">{theme.name}</h1>
      <p className="test-page__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet
        possimus beatae. Accusamus dicta quod ipsam quas ea ab dolorem in
        aspernatur, veritatis debitis voluptas dolor soluta ullam nulla aliquam!
      </p>
      <p className="test-page__highlight">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        modi exercitationem aut deleniti ut iusto deserunt animi. Asperiores
        voluptatem enim voluptas labore neque non sunt fugit, assumenda,
        voluptates voluptatibus repudiandae?
      </p>
      <button className="test-page__button test-page__button--contained">
        Contained
      </button>
      <button className="test-page__button test-page__button--outlined">
        Outlined
      </button>
      <button className="test-page__button test-page__button--primary">
        Primary
      </button>
      <button className="test-page__button test-page__button--secondary">
        Secondary
      </button>
    </section>
  );
}
