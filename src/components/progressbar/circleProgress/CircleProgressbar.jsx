import CircleProgressbarStyleWrapper from "./CircleProgressbar.style";
import EllipseImg from "../../../assets/images/ellipse.png";

const CircleProgressbar = ({ percentage }) => {
  return (
    <CircleProgressbarStyleWrapper percentage={percentage}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="350px"
        height="350px"
        className="progressbar-svg"
      >
        <circle className="progressbar-bg" cx="175" cy="175" r="150" />
        {percentage > 0 && (
          <circle
            className="progress-done"
            cx="175"
            cy="175"
            r="150"
            strokeLinecap="round"
          />
        )}
      </svg>

      <div className="progressbar-inner">
        <img src={EllipseImg} alt="img" />
      </div>

      <div className="progress-level">
        <h2>{percentage}%</h2>
      </div>
    </CircleProgressbarStyleWrapper>
  );
};

export default CircleProgressbar;
