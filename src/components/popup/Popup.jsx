import React from "react";

import PopupWrapper from "./Popup.style.jsx";

const Popup = props => {
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

export default Popup;
