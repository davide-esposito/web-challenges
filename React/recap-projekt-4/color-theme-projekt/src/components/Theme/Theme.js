import "./Theme.css";
import ThemeDetail from "../ThemeDetail/ThemeDetail";
import ThemePreview from "../ThemePreview/ThemePreview";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export default function Theme({ theme, onDelete, onEdit }) {
  const [showDetails, setShowDetails] = useState(true);

  function handleToggleView() {
    setShowDetails(!showDetails);
  }

  return (
    <article className="theme">
      <button
        className="theme__detail-toggle-button"
        onClick={handleToggleView}
      >
        <h2 className="theme__title">{theme.name}</h2>
        {showDetails ? (
          <IconChevronUp size="2.5rem" />
        ) : (
          <IconChevronDown size="2.5rem" />
        )}
      </button>
      {showDetails ? (
        <ThemePreview theme={theme} />
      ) : (
        <ThemeDetail theme={theme} onDelete={onDelete} onEdit={onEdit} />
      )}
    </article>
  );
}
