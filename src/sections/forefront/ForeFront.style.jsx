import styled from "styled-components";

const ForeFrontWrapper = styled.div`
  /* Section Container */
  .forefront-section {
    display: flex;
    flex-wrap: wrap; /* Enables responsiveness */
    align-items: center;
    justify-content: center;
    margin-top: 7.5rem;
    gap: 2rem;
  }

  .forefront-container {
    display: flex;
    gap: 7.5rem;
  }

  /* Text Content Styling */
  .forefront-content {
    flex: 1 1 500px; /* Flexible width with a minimum size */
    max-width: 760px; /* Ensure content doesn't grow too large */
  }

  .forefront-content h1 {
    font-size: 44px;
    font-weight: 600;
    margin-bottom: 0.875rem;
    color: #ccceef;
  }

  .forefront-content p {
    font-size: 18px;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: length;
    color: #7376aa; /* Light gray for description */
  }

  /* Graphic Styling */
  .forefront-graphic {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    text-align: center;
  }

  .forefront-graphic img {
    width: auto;
    height: 240px; /* Maintain aspect ratio */
    display: block;
    margin: 0 auto;
  }

  /* Responsive Design */
  @media (max-width: 1400px) {
    .forefront-content {
      max-width: 560px;
      flex: none;
    }
  }
  
  @media (max-width: 1200px) {
    .forefront-container {
      flex-direction: column; /* Stack content vertically */
      text-align: center; /* Center-align text */
      gap: 4rem;
    }

    .forefront-content h1 {
      font-size: 1.8rem;
    }

    .forefront-content p {
      font-size: 0.9rem;
    }

    .forefront-graphic {
      max-width: 100%;
    }
  }
`;

export default ForeFrontWrapper;
