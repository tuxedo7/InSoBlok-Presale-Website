import styled from "styled-components";

const TransformingBlockchainWrapper = styled.div`
  /* General Container Styles */
  .features-grid-container {
    text-align: center;
  }

  /* Header Section */
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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
    max-width: 60rem;
    font-size: 2.25rem;
    font-weight: bold;
    color: #ccceef;
    margin: 0.5rem 0;
  }

  .header p {
    font-size: 1.25rem;
    color: #7376aa; /* Light gray for subtitle */
    margin-bottom: 2rem;
  }

  /* Grid Layout */
  .grid {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  /* Card Styles */
  .card {
    background: #0f1021; /* Dark card background */
    border: 1px solid #64748b; /* Subtle border */
    border-radius: 8px;
    padding: 30px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      border: 1px solid;
      border-color: #6c5ce7; /* Highlight border color */
      transform: translateY(-5px);
      outline: none; /* Remove default outline */
      animation: faq-pulse 0.5s infinite alternate;
    }
  }

  @keyframes faq-pulse {
    0% {
      border-color: #6c5ce7;
    }
    100% {
      border-color: #a29bfe;
    }
  }

  .card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #ccceef;
    cursor: pointer;

    &:hover {
      color: #7064e9;
    }
  }

  .card p {
    font-size: 1rem;
    font-weight: 400;
    color: #7376aa; /* Light gray text */
    line-height: 1.5;
  }

  /* Highlighted Card */
  .card.highlight {
    border-left: none;
  }

  .card.highlight::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    border-radius: 8px; /* Match card radius */
    padding: 3px; /* Thickness of gradient border */
    background: linear-gradient(180deg, #e43292 0%, #6635df 100%);
  }

  .card.highlight h3 {
    background: linear-gradient(89.83deg, #e43292 12.22%, #6635df 92.05%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(
        2,
        1fr
      ); /* Two columns for tablets and up */
    }
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr); /* Three columns for desktops */
    }

    .header h1 {
      font-size: 2.5rem;
    }

    .header p {
      font-size: 1.1rem;
    }
  }
`;

export default TransformingBlockchainWrapper;
