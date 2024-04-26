import "./ThemeDetail.css";
import ColorCard from "../ColorCard/ColorCard";
import { useState } from "react";
import NewThemeForm from "../ThemeForm/ThemeForm";

export default function ThemeDetail({ theme, onDelete, onEdit }) {
  const [displayState, setDisplayState] = useState("Detail");

  function handleEditView() {
    setDisplayState("Edit");
  }

  return (
    <>
      {displayState === "Detail" && (
        <section className="theme-detail">
          <div className="color-cards">
            {theme.colors.map((color, index) => (
              <ColorCard key={color.role} color={color} />
            ))}
          </div>
          <button
            onClick={() => onDelete(theme.id)}
            className="detail-theme__delete-button"
            type="button"
          >
            Delete Theme
          </button>
          <button
            className="detail-theme__edit-button"
            type="button"
            onClick={handleEditView}
          >
            Edit Theme
          </button>
        </section>
      )}
      {displayState === "Edit" && (
        <NewThemeForm
          isEditMode="true"
          initialData={theme}
          onEdit={(theme) => {
            onEdit(theme);
            setDisplayState("Detail");
          }}
        />
      )}
    </>
  );
}
