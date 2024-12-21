import SemiCircleProgressStyleWrapper from "./SemiCircleProgress.style";

const SemiCircleProgress = ({ percentage, tokenSold, presaleToken }) => {
  return (
    <SemiCircleProgressStyleWrapper percentage={percentage}>
      <div className="progress-item">
        <div className="needle"></div>
        <p className="progress-title">{percentage}%</p>
      </div>

      <div className="status-content">
        <div className="status-item left">
          <h4>Raised</h4>
          <h4>{tokenSold}</h4>
        </div>

        <div className="status-item right">
          <h4>Goal</h4>
          <h4>{presaleToken}</h4>
        </div>
      </div>
    </SemiCircleProgressStyleWrapper>
  );
};

export default SemiCircleProgress;
