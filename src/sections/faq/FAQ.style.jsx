import styled from "styled-components";

const FAQWrapper = styled.div`
  /* General Container Styles */
  .faq-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .faq-inner {
    width: 100%;
    max-width: 57.375rem;
    text-align: center;
  }

  /* Header Section */
  .header .tag {
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 18px;
    font-size: 16px;
    border-radius: 4px;
    margin-bottom: 12px;
    display: inline-block;
    padding: 7px 14px;
    background-color: #0f1021;
    box-shadow: 4px 4px 20px 20px rgba(0, 0, 0, 0.01);
  }

  .header .tag span {
    background: linear-gradient(90deg, #12b5de -30%, #7130c3 30%, #ff3bd4 90%);
    text-transform: capitalize;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .header h1 {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0.5rem 0;
    color: #ccceef;
  }

  .content {
    margin-top: 3.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    .header h1 {
      font-size: 2.75rem;
    }
  }

  /* General FAQ Item Styling */
  .faq-item {
    width: 100%;
    background: #0f1021;
    border: 0;
    border-radius: 10px;
    position: relative; /* For positioning elements */
    transition: background .2s ease;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: var(--y);
      left: var(--x);
      transform: translate(-50%, -50%);
      background: radial-gradient(#7064e9, transparent, transparent);
      width: 200%;
      height: 200%;
      opacity: 0;
      transition: 0.5s, top 0s, left 0s;
      border-radius: inherit;
    }

    &:hover::before {
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 2px;
      background: #0f1021;
      border-radius: inherit;
    }
  }

  @media (max-width: 1400px) {
    .faq-item {
      max-width: 740px;
    }
  }

  @media (max-width: 1200px) {
    .faq-item {
      max-width: 640px;
    }
  }

  /* Gradient Border when Expanded */

  /* Header Section */
  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.75rem;
    cursor: pointer;
    position: relative; /* For the number */
    transition: background 0.3s ease;
    z-index: 2;
  }

  .faq-header:hover {
    //   background: rgba(255, 255, 255, 0.05);
  }

  /* Number Styling (Top-Left Corner) */
  .faq-number-container {
    position: absolute;
    top: -2rem;
    left: 4rem;
    padding: 0rem 0.5rem;
    background: black;
  }

  .faq-number {
    font-size: 2.25rem;
    font-weight: 700;
    background: linear-gradient(
      1--spreaddeg,
      #e43292 0%,
      #6635df 100%
    ); /* Gradient background */
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1; /* Ensures it stays above */
  }

  /* Title and Icon */
  .faq-title h3 {
    color: #ccceef;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin: 0;
  }

  /* Icon Section */
  .faq-icon {
    font-size: 24px;
    font-weight: 400;
    color: #ffffff99;
    transition: transform 0.3s ease;
  }

  .faq-item.expanded .faq-icon {
    color: #ccceef;
    font-size: 24x;
    font-weight: 400;
    transform: rotate(
      1--spreaddeg
    ); /* Optional rotation effect for expanded state */
  }

  .division-bar {
    width: calc(100%-3.5rem);
    height: 1px;
    background: #ffffff33;
    position: relative;
    z-index: 2;
  }

  /* Content Section */
  .faq-content {
    padding: 1.75rem;
    animation: slideDown 0.3s ease forwards;
    position: relative;
    z-index: 2;
  }

  .faq-content p {
    font-size: 16px;
    color: #7376aa;
    margin: 0;
    font-weight: 400;
    text-align: left;
    line-height: 27px;
  }

  /* Smooth Slide Animation */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .faq-header {
      padding: 1rem;
    }

    .faq-title h3,
    .faq-icon {
      font-size: 0.9rem;
    }

    .faq-item.expanded .faq-icon {
      font-size: 0.9rem;
      padding: 0rem 0.5rem;
    }

    .faq-number-container {
      top: -1.25rem;
      left: 2rem;
      padding: -0.25rem 0.25rem;
    }
    .faq-number {
      font-size: 1.5rem;
    }

    .faq-content {
      padding: 0.8rem 1rem;
      p {
        font-size: 14px;
      }
    }
  }
`;

export default FAQWrapper;
