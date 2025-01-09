import ForeFrontWrapper from './ForeFront.style.jsx';
import AIVM_IMG from '../../assets/images/inso_logo.webp';

const ForeFront = () => {
  return (
    <ForeFrontWrapper>
      <section className="forefront-section">
        <div className='forefront-container'>
          <div className="forefront-graphic">
            <img src={AIVM_IMG} alt="InSoBlok AI Graphic" />
          </div>
          <div className="forefront-content">
            <h1>Secure the Future, Join InSoBlok Protocol AI</h1>
            <p>
              Be at the forefront of technological evolution with InSoBlok AI’s
              presale. Secure exclusive access to discounted tokens and groundbreaking
              features like PoI Consensus and AIVM. Join a community driving
              intelligent, decentralized solutions and redefining blockchain
              innovation. Your journey into the future of AI and blockchain begins
              today—step into the InSoBlok ecosystem now!
            </p>
          </div>
        </div>
      </section>
    </ForeFrontWrapper>
  );
}

export default ForeFront;