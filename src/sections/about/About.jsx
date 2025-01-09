import POI_IMG from "../../assets/images/POI.png";
import AIVM_IMG from "../../assets/images/AIVM.png";
import AboutWrapper from "./About.style.jsx";
import Lottie from "react-lottie";
import animationData1 from "./Lottie1.json";
import animationData2 from "./Lottie2.json";

const About = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <AboutWrapper>
      <div className="about-container">
        {/* Proof of Intelligence (PoI) Section */}
        <div className="about-inner">
          <div className="about">
            <div className="about-text">
              <h2>
                ClosetChain: Transforming the $1.7 Trillion Fashion lndustry
              </h2>
              <p>
                InSoBlok's flagship product, ClosetChain, revolutionizes fashion
                by leveraging influencer power, SocialFi, and tokenization. lt
                addresses the $743 billion return problem with Al-powered
                virtual try-ons while driving sales and engagement through
                exclusive NFT collections and gamified campaigns.
              </p>
            </div>
            <div className="about-image">
              <Lottie className="lottie" options={defaultOptions2} />
              {/* <img src={POI_IMG} alt="PoI Graphic" /> */}
            </div>
          </div>

          {/* Artificial Intelligence Virtual Machine (AIVM) Section */}
          <div className="about">
            <div className="about-image">
              <Lottie className="lottie" options={defaultOptions1} />
              {/* <img src={AIVM_IMG} alt="AIVM Graphic" /> */}
            </div>
            <div className="about-text">
              <h2>Scalable Web3 Expansion Across lndustries</h2>
              <p>
                With a strong foundation in fashion, ClosetChain is designed to
                scale into other sectors:
                <br /> - Health & Fitness ($96B): Tokenizing fitness journeys
                with rewards and personalized solutions. <br />- PersonaI Care &
                Beauty ($4.4T): Merging tokenized beauty, virtual try-ons, and
                NFT loyalty programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
