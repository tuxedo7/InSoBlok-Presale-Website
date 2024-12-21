import React, { useEffect } from "react";
import NotificationStyleWrapper from "./Notification.style";
import ProcessingIcon from "../../assets/images/icons/processing.png";
import SuccessfulIcon from "../../assets/images/icons/successful.svg";

const Notification = ({ notificationDone, textMessage }) => {
  return (
    <NotificationStyleWrapper>
      {notificationDone ? (
        <div className="gittu-toast done">
          <div className="gittu-toast-inner">
            <div className="gittu-toast__content">
              <img
                className="icon-successful"
                src={SuccessfulIcon}
                alt="icon"
              />
              <p>Awesome ! Your transaction has been successfully complete</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="gittu-toast">
          <div className="gittu-toast-inner">
            <div className="gittu-toast__content">
              <img className="icon-spin" src={ProcessingIcon} alt="icon" />
              <p>{textMessage}</p>
            </div>
          </div>
        </div>
      )}
    </NotificationStyleWrapper>
  );
};

export default Notification;
