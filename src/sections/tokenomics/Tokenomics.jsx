import TokenomicsWrapper from "./Tokenomics.style.jsx";
import TokenomicsImg from "../../assets/images/tokenomics.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

const Tokenomics = () => {
  const [visibleTextCoppied, setVisibleTextCoppied] = useState(true);
  const textAreaRef = useRef(null);

  const onCopyToClipboard = () => {
    const range = document.createRange();
    const selection = window.getSelection();

    if (textAreaRef.current) {
      range.selectNodeContents(textAreaRef.current); // Select the contents of the <div>
      selection.removeAllRanges(); // Clear any previous selections
      selection.addRange(range); // Apply the new selection
    }
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    setVisibleTextCoppied(true);
    selection.removeAllRanges();
  };

  useEffect(() => {
    if (visibleTextCoppied) {
      const timeout = setTimeout(() => {
        setVisibleTextCoppied(false); // Change to false after 3 seconds
      }, 2000);

      // Cleanup timeout on component unmount or state change
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [visibleTextCoppied]);

  return (
    <TokenomicsWrapper>
      <div className="tokenomics-container">
        <div className="tokenomics-inner">
          <div className="header">
            <div className="tag">
              <span>Tokenomics</span>
            </div>
            <h1>Tokenomics</h1>
            <p>
              In this groundbreaking tokenomics model, we weave together the
              threads of artificial intelligence, non-fungible tokens (NFTs),
              and blockchain economics. Buckle up for a journey where scarcity
              meets smart contracts, and creativity mingles with data-driven
              insights. Our tokenomics isn’t just a roadmap; it’s a cosmic dance
              of innovation and value creation.
            </p>
          </div>
          <div className="content">
            <img src={TokenomicsImg}></img>
          </div>
        </div>
      </div>
      <div class="contact-address-copy-container">
        <div class="contact-address-copy-section">
          <h6 class="color-gray">
            <div ref={textAreaRef} class="copy-content">
              0x9ca8530ca349c966fe9ef903df17a75b8a778927
            </div>{" "}
            <a onClick={onCopyToClipboard}>
              <FontAwesomeIcon icon="copy" flip="both" size="2x" />
            </a>
            <div class={`tooltip-copy ${visibleTextCoppied ? "active" : ""}`}>
              Text Coppied!
            </div>
          </h6>{" "}
          <a
            target="_blank"
            className="btn-primary"
            href="https://etherscan.io/token/0x9ca8530ca349c966fe9ef903df17a75b8a778927#code"
          >
            View Contract
          </a>
        </div>
      </div>
    </TokenomicsWrapper>
  );
};

export default Tokenomics;
