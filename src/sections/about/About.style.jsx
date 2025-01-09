import styled from "styled-components";

const AboutWrapper = styled.div`
  .about-container {
    width: 100%;
    padding: 2rem;
  }

  .about-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  .about {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 2rem;
  }

  .about-text {
    max-width: 600px;
  }

  .about-text h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #ccceef;
  }

  .about-text p {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.6;
    color: #7376aa; /* Light gray text */
  }

  .about-image img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1100px) {
    .about {
      flex-direction: column;
      text-align: center;
    }

    .about:nth-child(even) {
      flex-direction: column-reverse;
    }

    .about-text {
      text-align: justify;
    }
  }
`;

export default AboutWrapper;
