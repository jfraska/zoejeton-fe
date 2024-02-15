import "./style.css";
import { useEffect, useState, createContext } from "react";

export const CursorContext = createContext("cursorContext");

const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  const { x, y } = mousePosition;

  return (
    <CursorContext.Provider>
      <ins
        className="cursor pointer-events-none fixed top-2 left-2 p-2 bg-white rounded-full z-20 mix-blend-difference"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
