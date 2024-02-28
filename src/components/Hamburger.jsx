import { useEffect } from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  span {
    width: 100%;
    height: 2.5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default function Hamburger({ state, scroll, setState }) {
  useEffect(() => {
    const firstChild = document.querySelector("button span:first-child");
    const secondChild = document.querySelector("button span:nth-child(2)");

    firstChild.style.transform = state
      ? "rotate(45deg) translate(0, -4.5px)"
      : "rotate(0deg) translate(0, 0)";
    secondChild.style.transform = state
      ? "rotate(-45deg) translate(0, 4.5px)"
      : "rotate(0deg) translate(0, 0)";
  }, [state]);

  return (
    <StyledBurger onClick={() => setState(!state)}>
      <span className={state || scroll ? "bg-black" : "bg-white"} />
      <span className={state || scroll ? "bg-black" : "bg-white"} />
    </StyledBurger>
  );
}
