import React, { useState, useEffect, useRef } from "react";
import FAQWrapper from "./FAQ.style.jsx";

const faqs = [
  {
    id: 0,
    number: "01",
    title: "What is InSoBlok?",
    description:
      "InSoBlok is the world's first blockchain and AI platform designed exclusively for fashion enthusiasts. It introduces 'ClosetChain,' a decentralized ecosystem powered by the $INSO token, aimed at disrupting the $1.7 trillion fashion industry.",
  },
  {
    id: 1,
    number: "02",
    title: "What role does AI play in InSoBlok's ecosystem?",
    description:
      "AI is integral to InSoBlok's functionality. It powers AI-driven Product Discovery for personalized recommendations and Virtual Try-on capabilities, enhancing the shopping experience. Additionally, AI-generated models and Fashion NFT Staking revolutionize talent management in the fashion industry.",
    highlight: true,
  },
  {
    id: 2,
    number: "03",
    title: "How does InSoBlok tackle high return rates in online retail?",
    description:
      "AI is integral to InSoBlok's functionality. It powers AI-driven Product Discovery for personalized recommendations and Virtual Try-on capabilities, enhancing the shopping experience. Additionally, AI-generated models and Fashion NFT Staking revolutionize talent management in the fashion industry.",
  },
  {
    id: 3,
    number: "04",
    title: "What role does AI play in InSoBlok's ecosystem?",
    description:
      "AI is integral to InSoBlok's functionality. It powers AI-driven Product Discovery for personalized recommendations and Virtual Try-on capabilities, enhancing the shopping experience. Additionally, AI-generated models and Fashion NFT Staking revolutionize talent management in the fashion industry.",
  },
  {
    id: 4,
    number: "05",
    title: "How does InSoBlok ensure authenticity and transparency?",
    description:
      "InSoBlok utilizes blockchain technology to ensure transparency in transactions and authenticity in product details. Immutable records stored on the blockchain combat counterfeit concerns and maintain trust with consumers.",
    highlight: true,
  },
  {
    id: 5,
    number: "06",
    title: "What are the benefits of investing in InSoBlok's $INSO token?",
    description:
      "Investing in the $INSO token allows stakeholders to participate in an innovative ecosystem where AI, blockchain, and fashion converge. The token incentivizes engagement, promotes growth in retail sales, and supports ethical fashion practices.",
  },
  {
    id: 6,
    number: "07",
    title: "What is FashionBlock's vision for the future of fashion?",
    description:
      "Unlike traditional platforms, InSoBlok offers a holistic approach to fashion engagement by integrating AI-driven solutions, blockchain transparency, and interactive features. It aims to enhance user satisfaction and revolutionize industry standards.",
  },
  {
    id: 7,
    number: "08",
    title:
      "What unique experiences does InSoBlok offer through events like 'Clothing Closet Unveil'?",
    description:
      "InSoBlok hosts exclusive events like 'Clothing Closet Unveil' where influencers interact with fans, auction prized designs, and engage in charitable activities. Users can participate in AI-powered virtual try-ons and make instant purchases using the $INSO token.",
    highlight: true,
  },
  {
    id: 8,
    number: "09",
    title:
      "How does InSoBlok enhance community engagement in online fashion shopping?",
    description:
      " InSoBlok enhances community engagement through features like Social Media Chat, which fosters interaction among fashion enthusiasts. This transforms traditional online shopping into a social and interactive experience.",
  },
  {
    id: 9,
    number: "10",
    title:
      "How does InSoBlok differentiate itself from traditional online fashion platforms?",
    description:
      "Unlike traditional platforms, InSoBlok offers a holistic approach to fashion engagement by integrating AI-driven solutions, blockchain transparency, and interactive features. It aims to enhance user satisfaction and revolutionize industry standards.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [focusIndex, setFocusIndex] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const element = e.target; // Get the element that triggered the event
    const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
    
    // Calculate mouse position relative to the element
    const x = e.clientX - rect.left; // mouse x relative to the element
    const y = e.clientY - rect.top;  // mouse y relative to the element
    
    setFocusIndex(index);
    setCursorPosition({ x, y });
  };

  const togglePanel = (index) => {
    // If the clicked panel is not the currently active panel, set it active
    if (activeIndex !== index) {
      setActiveIndex(index);
      return;
    }
    // If clicked again, close the currently active panel
    setActiveIndex(null);
  };

  return (
    <FAQWrapper>
      <div className="faq-container">
        <div className="faq-inner">
          <div className="header">
            <div className="tag">
              <span>InSoBlok FAQ</span>
            </div>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="content">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex == index ? "expanded" : ""}`}
                onMouseMove={(el) => handleMouseMove(el, index)}
                style={{
                  "--active": focusIndex == index ? 1 : 0,
                  "--x": cursorPosition.x + 'px',
                  "--y": cursorPosition.y + 'px',
                }}
                key={index}
              >
                {/* Header Section */}
                <div className="faq-header" onClick={() => togglePanel(index)}>
                  <div className="faq-title">
                    {/* {activeIndex == index && <div className="faq-number-container"><span className="faq-number">{faq.number}</span></div>} */}
                    <h3>{faq.title}</h3>
                  </div>
                  <div
                    className={`faq-icon ${
                      activeIndex == index ? "expanded" : ""
                    }`}
                  >
                    {activeIndex == index ? "-" : "+"}
                  </div>
                </div>

                {/* Content Section */}
                {activeIndex == index && (
                  <>
                    <div className="division-bar" />
                    <div className="faq-content">
                      <p>{faq.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FAQWrapper>
  );
};

export default FAQ;
