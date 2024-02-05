import { useEffect } from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  span {
    width: 25px;
    height: 2.5px;
    background: ${({ open, scroll }) =>
      open || scroll ? "#0D0C1D" : "#EFFFFA"};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 2px;
  }
`;

export default function Hamburger({ open, scroll, setOpen }) {
  useEffect(() => {
    const firstChild = document.querySelector("button span:first-child");
    const secondChild = document.querySelector("button span:nth-child(2)");

    firstChild.style.transform = open
      ? "rotate(45deg) translate(0, -4px)"
      : "rotate(0deg) translate(0, 0)";
    secondChild.style.transform = open
      ? "rotate(-45deg) translate(0, 4px)"
      : "rotate(0deg) translate(0, 0)";
  }, [open]);

  return (
    <StyledBurger open={open} scroll={scroll} onClick={() => setOpen(!open)}>
      <span />
      <span />
    </StyledBurger>
  );
}
