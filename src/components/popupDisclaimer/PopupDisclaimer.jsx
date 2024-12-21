import React from "react";

import PopupWrapper from "./PopupDisclaimer.style.jsx";

const PopupDisclaimer = props => {
    return (
        <PopupWrapper  {...props}>
        <div className="popup-box-modal">
            <div className="box-modal">
                {props.content}
            </div>
        </div>
        </PopupWrapper>
    );
};

export default PopupDisclaimer;
