import RoadmapWrapper from "./Roadmap.style.jsx";
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import steps from "./data.js";

// import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

const Roadmap = () => {
  return (
    <RoadmapWrapper>
      <Splide
        className="roadmap-steps"
        aria-label="Roadmap"
        options={{
          autoWidth: true,
          arrows: false,
        //   pagination: false,
          focus: "center",
          gap: "2rem",
        }}
      >
        {steps.map((step) => (
          <SplideSlide key={step.id}>
            <div className="roadmap-step">
              <div className="roadmap-step-header">
                <h2 className="roadmap-step-title">{step.title}</h2>
                <h3 className="roadmap-step-sub-title">{step.sub_title}</h3>
              </div>
              <div className="_divider_line"></div>
              <div className="roadmap-step-description">
                {step.description.map((desc, cIndex) => {
                  return <div key={cIndex}>
                    <h6 className="roadmap-step-desc-header">{desc.header}</h6>
                    <ul className="roadmap-step-desc-content">
                      {desc.content.map((item, uIndex) => {
                        return <li key={uIndex}>{item}</li>;
                      })}
                    </ul>
                  </div>;
                })}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </RoadmapWrapper>
  );
};

export default Roadmap;
