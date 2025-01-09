import TransformingBlockchainWrapper from './TransformingBlockchain.style.jsx';
import React, { useState } from "react";

const features = [
  {
    id: 1,
    title: "01. lnfluencer Marketplace with ClosetChain",
    description:
      "Empowering creators and brands through CIosetChain private events, enabling influencers to tokenize their impact with exclusive NFT collections and decentralized monetization tools.",
    highlight: true,
  },
  {
    id: 2,
    title: "02. AI-Powered Decentralized Commerce",
    description:
      "Revolutionizing e-commerce and fashion with blockchain transparency, Al-powered shopping, tokenized wardrobes, and virtual try-ons—tackling the $743 billion return problem while merging style with technology.",
  },
  {
    id: 3,
    title: "03. Next-Gen SocialFi Ecosystem",
    description:
      "Transforming social interactions into tokenized value through features like live streaming with 'Yay Nay' voting, AI-driven product discovery, talent scouting, staking, governance and NFT-powered engagement experiences.",
  },
  {
    id: 4,
    title: "04. Blockchain-Powered Health & Fitness Solutions",
    description:
      "Using Web3 to tokenize health and fitness journeys in the $96 billion fitness industry, enabling secure data sharing, rewarding active lifestyles and offering personalized wellness experiences through decentralized platforms.",
  },
  {
    id: 5,
    title: "05. Decentralized Personal Care & Beauty Economy",
    description:
      "Bridging the physical and digital worlds with tokenized beauty experiences in the $4.4 trillion healthcare market, featuring AI-powered virtual skin Analysis, makeup try-ons and NFT-based loyalty rewards.",
  },
  {
    id: 6,
    title: "06. NFT Collaborations & Live Tokenized Auctions",
    description:
      "Tapping into the $231 billion NFT market, lnSoBlok enables exclusive pattnerships, live auctions and limited-edition NFT drops. With cross-chain interoperability and DA0 governance, it drives innovation in the Web3 creator economy.",
  },
];

const TransformingBlockchain = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    console.log(index)
    // If the clicked panel is not the currently active panel, set it active
    if (activeIndex !== index) {
      features.forEach(ft => {
        ft.highlight = false;
      });
      setActiveIndex(index);
      features[index-1].highlight = true;
      return;
    }
    // If clicked again, close the currently active panel
    setActiveIndex(null);
  };
  
  return (
    <TransformingBlockchainWrapper>
      <div className="features-grid-container">
        <div className="header">
          <div className="tag"><span>InSoBlok AI Features</span></div>
          <h1>Transforming lnfluencer Commerce & Real-World Assets in the Web3 Era</h1>
          <p>Tokenized Experiences, DecentraIized PIatforms and Next-Gen Engagement</p>
        </div>
        <div className="grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`card ${feature.highlight ? "highlight" : ""}`}
              onClick={() => togglePanel(feature.id)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </TransformingBlockchainWrapper>
  );
}

export default TransformingBlockchain;