import { useEffect } from "react";
import { useState } from "react";
import CountdownWrapper from "./Countdown.style";
import FlipCountdown from '@rumess/react-flip-countdown';
import { usePresaleData } from "../../utils/PresaleContext";

const Countdown = ({ endDate, ...props }) => {
  const [remainingTime, setRemainingTime] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });
  const {endTime} = usePresaleData();
  const date = new Date(Number(endTime));
  const endDateISO = date.toISOString();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      //update the presale timestamp in milliseconds
      const difference = new Date(1734539234000) - now;

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ).padStart(2, "0"),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        };
      } else {
        timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };
      }

      return timeLeft;
    };

    setRemainingTime(calculateTimeLeft());

    const timer = setInterval(() => {
      setRemainingTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <CountdownWrapper {...props}>
      {/* <FlipCountdown 
        hideYear
        hideMonth
        theme='dark' // Options (Default: dark): dark, light.
        size='small'
        dayTitle="Days"  // Customizing the titles
        hourTitle="Hrs"
        minuteTitle="Mins"
        secondTitle="Secs"
        endAt={`2024-12-31`} 
      /> */}
      <div className="countdown-container">
        <h1 className="countdown-title">InSoBlok Presale</h1>
        <p className="countdown-label">NEXT PRICE INCREASE IN </p>
        <div className="countdown-remaintime">
          <div className="countdown-card">
            <p className="c-value">{remainingTime.days}</p>
            <p className="c-label">Days</p>
          </div>
          <div className="_colon"></div>
          <div className="countdown-card">
            <p className="c-value">{remainingTime.hours}</p>
            <p className="c-label">Hours</p>
          </div>
          <div className="_colon"></div>
          <div className="countdown-card">
            <p className="c-value">{remainingTime.minutes}</p>
            <p className="c-label">Minutes</p>
          </div>
          <div className="_colon"></div>
          <div className="countdown-card">
            <p className="c-value">{remainingTime.seconds}</p>
            <p className="c-label">Seconds</p>
          </div>
        </div>
      </div>
    </CountdownWrapper>
  );
};

export default Countdown;
