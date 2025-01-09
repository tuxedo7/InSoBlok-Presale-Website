import styled from "styled-components";

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  overflow: clip;
  color: white;
  z-index: 0;

  .footer-divide-line {
    position: relative;
    overflow: hidden;
    height: 2px;
    width: 100%;
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
      width: 3%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0,
        hsla(0, 0%, 100%, 0) 0,
        rgba(111, 100, 233, 0.8) 50%,
        transparent 100%
      );
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      animation: separateline3 5s ease-in-out infinite;
    }
  }

  @keyframes separateline3 {
    0% {
      margin-left: -950px;
    }
    100% {
      margin-left: 950px;
    }
  }

  @media (max-width: 1400px) {
    @keyframes separateline3 {
      0% {
        margin-left: -700px;
      }
      100% {
        margin-left: 700px;
      }
    }
  }

  @media (max-width: 1100px) {
    @keyframes separateline3 {
      0% {
        margin-left: -550px;
      }
      100% {
        margin-left: 550px;
      }
    }
  }

  @media (max-width: 800px) {
    @keyframes separateline3 {
      0% {
        margin-left: -400px;
      }
      100% {
        margin-left: 400px;
      }
    }
  }

  @media (max-width: 450px) {
    @keyframes separateline3 {
      0% {
        margin-left: -225px;
      }
      100% {
        margin-left: 225px;
      }
    }
  }

  /* General Footer Styles */
  .footer {
    display: flex;
    flex-direction: column;
    color: #fff; /* White text */
    margin-top: 7.5rem;
    text-align: center;
  }

  .footer-container {
    display: flex;
    margin: 3rem 6rem;
    gap: 3rem; /* Add gap between columns */
  }

  .footer-left {
    max-width: 560px;
    text-align: left;
  }

  .footer-logo {
    float: left;
    margin: 2rem 4rem 0rem 4rem;
    width: 5.5rem; /* Adjust logo size */
    margin-bottom: 1rem;
  }

  .footer-description {
    font-size: 1rem;
    // text-indent: 50px;
    text-align: justify;
    // letter-spacing: 3px;
    color: #7376aa; /* Light gray text */
    line-height: 2.25rem;
  }

  .footer-right {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Footer Links Section */
  .footer-links {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
  }

  .footer-column {
    // flex: 1 1 200px;
    // margin-bottom: 2rem;
    height: fit-content;
  }

  .footer-column h4 {
    font-size: 1.2rem;
    color: #ccceef; /* White headings */
    margin-bottom: 1rem;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column li,
  a {
    font-size: 0.9rem;
    color: #7376aa; /* Light gray text */
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .footer-column li:hover,
  a:hover {
    color: #7064e9; /* Highlight on hover */
  }

  /* Footer Bottom Section */
  .footer-bottom {
    padding: 20px 0;
    border-top: 1px solid #ffffff1a;
  }

  .footer-bottom p {
    font-size: 0.8rem;
    color: #7376aa; /* Light gray text */
  }

  .footer-bottom p a {
    color: #ccceef;
    text-decoration: underline;
    margin-left: .2rem;
    margin-right: .2rem;
  }

  .footer-bottom a:hover {
    color: #7064e9;
    text-decoration: underline;
  }

  .footer-bottom .division-bar {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle divider */
    margin: 1rem 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      #000000 0%,
      #e43292 13.17%,
      #6635df 88.17%,
      #000000 100%
    );
  }

  /* Mobile-specific Styles */
  @media (max-width: 1100px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      margin: 3rem 1rem; /* Adjust margins */
    }

    .footer-left {
      width: 100%;
      text-align: center;
    }

    .footer-logo {
      float: none;
    }

    .footer-description {
      font-size: 0.9rem; /* Slightly smaller text for mobile */
      line-height: 1.8rem; /* Adjust line height for readability */
      margin-bottom: 1rem;
    }

    .footer-links {
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }

    .footer-column {
      width: 100%; /* Full width for each column */
      text-align: center;
      margin-bottom: 1.5rem; /* Space between columns */
    }

    .footer-column h4 {
      font-size: 1.1rem;
    }

    .footer-column li,
    a {
      font-size: 0.9rem; /* Adjust text size for mobile */
      margin-bottom: 0.25rem;
    }

    .footer-bottom p {
      font-size: 0.7rem; /* Smaller text for mobile */
    }

    .footer-bottom .division-bar {
      width: 80%; /* Make the divider shorter on mobile */
      margin: 1.5rem 0;
    }
  }
`;

export default FooterWrapper;
