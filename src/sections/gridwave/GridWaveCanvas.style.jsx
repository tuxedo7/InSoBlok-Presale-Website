import styled from "styled-components";

const GridWaveCanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1340px;
  box-sizing: border-box;
  overflow-x: hidden;
  display: block;
  transform: translateY(-50px);
  animation: slide-in 0.6s forwards;

  @media (max-width: 1540px) {
    height: 1325px;
  }

  @media (max-width: 1240px) {
    height: 1315px;
  }

  @media (max-width: 1060px) {
    height: 1295px;
  }

  @media (max-width: 900px) {
    height: 1245px;
  }

  @media (max-width: 800px) {
    height: 1215px;
  }

  @media (max-width: 600px) {
    height: 1485px;
  }

  @media (max-width: 560px) {
    height: 1555px;
  }

  @media (max-width: 490px) {
    height: 1485px;
  }
`;

export default GridWaveCanvasWrapper;
