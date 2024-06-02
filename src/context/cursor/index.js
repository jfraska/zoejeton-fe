import "./style.css";
import { useEffect, useState, createContext } from "react";

export const CursorContext = createContext("cursorContext");

const CursorProvider = ({ children, containerRef }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const { offsetX: x, offsetY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener("mousemove", onMouseMove);
      containerRef.current.addEventListener("touchmove", onMouseMove);
    }

    return () => {
      if (containerRef && containerRef.current) {
        containerRef.current.removeEventListener("mousemove", onMouseMove);
        containerRef.current.removeEventListener("touchmove", onMouseMove);
      }
    };
  }, [containerRef]);

  const { x, y } = mousePosition;

  return (
    <CursorContext.Provider value="">
      <ins
        className="cursor pointer-events-none absolute top-2 left-2 p-2 bg-white rounded-full z-20 mix-blend-difference"
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
