import styled from "styled-components";

const GridWaveCanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 1425px;
  box-sizing: border-box;
  overflow-x: hidden;
  transition: transform 0.4s ease-out;

  @media (max-width: 1060px) {
    height: 1390px;
  }

  @media (max-width: 900px) {
    height: 1330px;
  }

  @media (max-width: 800px) {
    height: 1300px;
  }

  @media (max-width: 600px) {
    height: 1570px;
  }
`;

export default GridWaveCanvasWrapper;
