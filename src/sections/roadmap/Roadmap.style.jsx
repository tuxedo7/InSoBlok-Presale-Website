import styled from "styled-components";

const RoadmapWrapper = styled.div`
  /* General Container */
  .roadmap-inner {
    position: relative;
    color: #fff;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 2.25rem 3rem;
    border-radius: 32px;
    text-align: center;
    max-width: 1200px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transition: border-color 0.3s ease;
    background: #0f1021;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      bottom: -1px;
      right: -1px;
      left: -1px;
      z-index: -1;
      border: 1px solid transparent;
      border-radius: inherit; /* !importanté */
      border-color: #6c5ce7; /* Highlight border color */
      outline: none; /* Remove default outline */
      animation: pulse 1s infinite alternate;
    }
  }

  @keyframes pulse {
    0% {
      border-color: #6c5ce7;
    }
    25% {
      border-color: rgb(141, 92, 231);
    }
    50% {
      border-color: rgb(192, 92, 231);
    }
    75% {
      border-color: rgb(231, 92, 208);
    }
    100% {
      border-color: #e43292;
    }
  }

  /* Header Section */
  .roadmap-header {
    display: flex;
    justify-content: center;
  }

  .roadmap-header .roadmap-center {
    max-width: 39rem;
  }

  .roadmap-header .roadmap-center .roadmap-tag {
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 18px;
    font-size: 16px;
    border-radius: 4px;
    margin-bottom: 12px;
    display: inline-block;
    padding: 7px 14px;
    background-color: #080912;
    box-shadow: 4px 4px 20px 20px rgba(0, 0, 0, 0.01);
  }

  .roadmap-header .roadmap-center .roadmap-tag span {
    background: linear-gradient(90deg, #12b5de -30%, #7130c3 30%, #ff3bd4 90%);
    text-transform: capitalize;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .roadmap-header .roadmap-center h1 {
    font-size: 2.25rem;
    font-weight: 600;
    color: #ccceef;
    margin: 0.5rem 0;
  }

  .roadmap-header .roadmap-center p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #7376aa;
  }

  .roadmap-division-bar {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 2px;
    margin: 2.75rem 0rem;
    background: linear-gradient(
      90deg,
      transparent,
      hsla(0, 0%, 100%, 0) 0,
      rgba(111, 100, 233, 0.6) 50%,
      transparent
    );

    &::before {
      content: "";
      position: absolute;
      width: 5%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        hsla(0, 0%, 100%, 0) 0,
        rgba(111, 100, 233, 0.9) 50%,
        transparent
      );
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      animation: separateline2 5s ease-in-out infinite;
    }
  }

  @keyframes separateline2 {
    0% {
      margin-left: -550px;
    }
    100% {
      margin-left: 550px;
    }
  }

  @media (max-width: 800px) {
    @keyframes separateline2 {
      0% {
        margin-left: -400px;
      }
      100% {
        margin-left: 400px;
      }
    }
  }

  @media (max-width: 450px) {
    @keyframes separateline2 {
      0% {
        margin-left: -225px;
      }
      100% {
        margin-left: 225px;
      }
    }
  }

  /* Steps Section */
  .roadmap-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .roadmap-step {
    background: transparent;
    border-radius: 12px;
    position: relative;
    text-align: left;
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .roadmap-step:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  .step-header {
    .step-number {
      width: 2.25rem;
      height: 2.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 700;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px #7376aa;
      background: none;
      border: 1px solid #7376aa;
      border-radius: 0.375rem;
    }

    .step-title {
      margin-top: 0.375rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #ccceef;
    }

    &:hover {
      color: #7064e9;
      cursor: pointer;

      .step-number {
        border-color: #7064e9;
        -webkit-text-stroke: 1px #7064e9;
      }

      .step-title {
        color: #7064e9;
      }
    }
  }

  .step-description {
    margin-top: 0.375rem;
    font-size: 1rem;
    font-weight: 400;
    color: #7376aa;
    line-height: 1.5;
  }

  .roadmap-step.highlight .step-number {
    border-color: #e43292;
    -webkit-text-stroke: 1px #e43292;
  }

  .roadmap-step.highlight .step-title {
    background: linear-gradient(90deg, #e43292 0%, #6635df 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Footer Section */
  .roadmap-footer {
    margin-top: 2.75rem;
  }

  .see-roadmap-button {
    background: transparent;
    color: #64748b;
    border: 1px solid #64748b;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.9;
      color: #e43292;
      border: 1px solid #e43292;
    }
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .roadmap-steps {
      grid-template-columns: repeat(
        3,
        1fr
      ); /* Three columns for tablets and desktops */
    }

    .roadmap-header .roadmap-center h1 {
      font-size: 2.75rem;
    }
  }
`;

export default RoadmapWrapper;
