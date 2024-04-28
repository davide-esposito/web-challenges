import "./ThemeDetail.css";
import ColorCard from "../ColorCard/ColorCard";
import { useState } from "react";
import ThemeForm from "../ThemeForm/ThemeForm";
import TestPage from "../TestPage/TestPage";

export default function ThemeDetail({ theme, onDelete, onEdit }) {
  const [displayState, setDisplayState] = useState("Detail");

  function handleEditView() {
    setDisplayState("Edit");
  }

  function handleTryOutView() {
    setDisplayState("TryOut");
  }

  function handleCloseView() {
    setDisplayState("Detail");
  }

  return (
    <>
      {displayState === "Detail" && (
        <section className="theme-detail">
          <div className="color-cards">
            {theme.colors.map((color, index) => (
              <ColorCard key={index} color={color} />
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
          <button
            className="detail-theme__try-out-button"
            type="button"
            onClick={handleTryOutView}
          >
            Try Theme
          </button>
        </section>
      )}
      {displayState === "Edit" && (
        <ThemeForm
          isEditMode="true"
          initialData={theme}
          onEdit={(theme) => {
            onEdit(theme);
            setDisplayState("Detail");
          }}
        />
      )}
      {displayState === "TryOut" && (
        <TestPage onClose={handleCloseView} theme={theme} />
      )}
    </>
  );
}
