import RoadmapWrapper from "./Roadmap.style.jsx";
import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Prototype Development",
    description:
      "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do",
  },
  {
    id: 2,
    title: "Testnet Rollout",
    description:
      "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do",
    highlight: true,
  },
  {
    id: 3,
    title: "Mainnet Launch",
    description:
      "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do",
  },
];

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    console.log(index)
    // If the clicked panel is not the currently active panel, set it active
    if (activeIndex !== index) {
      steps.forEach((st) => {
        st.highlight = false;
      });
      setActiveIndex(index);
      steps[index - 1].highlight = true;
      return;
    }
    // If clicked again, close the currently active panel
    setActiveIndex(null);
  };

  return (
    <RoadmapWrapper>
      <div className="roadmap-container">
        <div className="roadmap-inner">
          <div className="roadmap-header">
            <div className="roadmap-center">
              <div className="roadmap-tag">
                <span>InSoBlok AI Roadmap</span>
              </div>
              <h1>InSoBlok AI Roadmap</h1>
              <p>
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum do
              </p>
            </div>
          </div>
          <div className="roadmap-division-bar" />
          <div className="roadmap-steps">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`roadmap-step ${step.highlight ? "highlight" : ""}`}
                onClick={() => togglePanel(step.id)}
              >
                <div className="step-header">
                  <span className="step-number">{step.id}</span>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="roadmap-footer">
            <button className="see-roadmap-button">See Roadmap</button>
          </div>
        </div>
      </div>
    </RoadmapWrapper>
  );
};

export default Roadmap;
