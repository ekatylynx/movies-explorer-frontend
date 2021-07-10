import React, { useEffect, useRef } from "react";
import "./Popup.css";

const Popup = ({ type, text, onClose }) => {
  const to = useRef();

  // Запись в useState обновляет компонент, а в useRef не обновляет компонент
  // current - это запись в собственное поле объекта useRef
  useEffect(() => {
    to.current = setTimeout(() => onClose(), 4000);

    return () => clearTimeout(to.current);
  }, [type, onClose]);

  return (
    <>
      {text && type ? (
        <section className="popup-info">
          <div
            className={
              type === "error"
                ? "popup-info__notice_error"
                : "popup-info__notice"
            }
          >
            <span className="notice__text">{text}</span>
            <span className="notice__close" title="Закрыть" onClick={onClose}>
              ×
            </span>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Popup;
