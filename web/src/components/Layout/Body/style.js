import styled from "styled-components";

export const BodySession = styled.div`
  height: calc(100% - 4rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  overflow: auto;
  position: relative;

  @media (min-width: 1124px) {
    height: calc(100% - 4rem);
    width: 100%;
  }
`