import "./Theme.css";
import ThemeDetail from "../ThemeDetail/ThemeDetail";
import ThemePreview from "../ThemePreview/ThemePreview";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export default function Theme({ name, theme }) {
  const [showDetail, setShowDetail] = useState(false);

  function toggleDetailView() {
    setShowDetail(!showDetail);
  }

  return (
    <article className="theme">
      <button
        className="theme__detail-toggle-button"
        onClick={toggleDetailView}
      >
        <h2 className="theme__title">{name}</h2>
        {showDetail ? (
          <IconChevronUp size="2.5rem" />
        ) : (
          <IconChevronDown size="2.5rem" />
        )}
      </button>
      {showDetail ? (
        <ThemeDetail theme={theme} />
      ) : (
        <ThemePreview theme={theme} />
      )}
    </article>
  );
}
