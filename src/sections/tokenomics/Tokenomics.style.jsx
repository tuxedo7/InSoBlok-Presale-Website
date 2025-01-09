import styled from "styled-components";

const TokenomicsWrapper = styled.div`
  /* General Container Styles */
  .tokenomics-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .tokenomics-inner {
    max-width: 58.25rem;
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
    color: #ccceef;
    margin: 0.5rem 0;
  }

  .header p {
    font-size: 1.25rem;
    color: #7376aa; /* Light gray for subtitle */
    text-align: center;
  }

  .content img {
    width: 600px;
  }

  @media (min-width: 1024px) {
    .header h1 {
      font-size: 2.75rem;
    }

    .header p {
      font-size: 1.1rem;
    }
  }

  .btn-primary:hover {
    background: linear-gradient(90deg, #3b82f6, #9333ea);
    transform: ease-out 1s;
  }

  /* General styling for the contact address section */
  .contact-address-copy-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .contact-address-copy-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem; /* Reduce the gap between elements */
    border-radius: 9px;
    padding: 26px;
    width: fit-content !important;
    margin-top: 4.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Optional: Adding shadow */

    .btn-primary {
      max-width: 200px;
      font-size: 18px;
      font-weight: 400;
    }
  }

  /* Styling for the color-gray class */
  .color-gray {
    display: flex;
    gap: 1rem;
    position: relative;
    color: #7376aa !important;
    flex-wrap: wrap; /* Allows elements to wrap on smaller screens */
    justify-content: center; /* Center the content */
  }

  /* Styling for the links in color-gray */
  .color-gray a {
    cursor: pointer;
    color: #7376aa;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .color-gray a:hover {
    color: #7376aa;
  }

  /* Styling for the copied content (address) */
  .copy-content {
    font-size: 26px;
    display: inline-block;
    word-wrap: break-word;
    text-align: center;
  }

  /* Tooltip styling */
  .tooltip-copy {
    text-align: center;
    position: absolute;
    top: -40px;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    background-color: #f0f8ff !important;
    z-index: 13234 !important;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 2px 9px;
    color: #000;
    font-weight: 400;
  }

  .tooltip-copy.active {
    opacity: 1;
    visibility: visible;
  }

  /* Button styling */
  .btn-primary {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 1.5rem;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .btn-primary:hover {
    background-color: #0056b3;
  }

  /* Mobile Responsiveness with Media Queries */
  @media (max-width: 767px) {
    /* Adjust layout for smaller screens */
    .contact-address-copy-section {
      padding: 16px; /* Less padding on small screens */
    }

    .color-gray {
      flex-direction: column; /* Stack the text and copy icon */
      align-items: center; /* Center align for mobile */
      gap: 1rem; /* Reduced gap */
    }

    .copy-content {
      font-size: 1.2rem; /* Reduce font size for smaller screens */
      word-wrap: break-word;
      text-align: center; /* Ensure the text is centered */
      margin-bottom: 10px; /* Add some space below */
    }

    .tooltip-copy {
      font-size: 14px; /* Reduce tooltip font size for mobile */
      padding: 2px 6px;
    }

    .btn-primary {
      width: 100%; /* Make button full width */
      padding: 12px; /* Adjust padding for larger touch targets */
      font-size: 14px; /* Adjust font size */
    }

    .color-gray a {
      font-size: 14px; /* Reduce link font size for smaller screens */
    }
  }

  @media (max-width: 480px) {
    /* Further adjustments for very small screens */
    .contact-address-copy-section {
      padding: 12px;
    }

    .color-gray {
      gap: 0.5rem; /* Less gap on very small screens */
      a {
        font-size: 12px;
      }
    }

    .copy-content {
      font-size: 1rem; /* Further reduce font size */
    }

    .btn-primary {
      font-size: 12px; /* Smaller button font size */
    }
  }
`;

export default TokenomicsWrapper;
