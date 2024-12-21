import styled, { css } from "styled-components";

const PopupWrapper = styled.div`

  .popup-box-modal {
    background: conic-gradient(
    from 225deg at 50% 50%,
    #ffc876,
    #79fff7,
    #9f53ff,
    #ff98e2,
    #ffc876
  );
    position: fixed;
    width: 350px;
    top: 50%;
    height: fit-content;
    max-height: 380px;
    border-radius: 1rem;
    left: 50%;
    bottom: 40px;
    z-index: 100;
    padding: 3px;
    transform: translate(-50%, -50%);
  );
  }

  .box-modal {
    background: #202020;
    border-radius: 1rem;

    p {
      padding: 20px;

      color: white;
      font-size: 14px;

      a {
        color: #0d76fc;
        font-size: 14px;
        text-decoration: underline;
      }
    }

    .warning-icon {
      padding-top: 20px;
      margin-left: 140px;
      color: #fcd535;
    }

    .close-button {
      background-color: #fcd535;
      color: white;
      width: 300px;
      height: 50px;
      border-radius: 10px;
      margin-left: 20px;
      margin-top: 25px;
      margin-bottom: 20px;
    }

    .cancel-button {
      background-color: #1e2329;
      border-radius: 4px;
      border-color: #dcdfe6;
      color: #dcdfe6;
      padding: 2px 15px;
      float: right;
      font-size: 14px;
    }

    .agree-button {
      background: conic-gradient(
        from 0deg at 50% 50%,
        rgb(106, 207, 21) 0deg,
        rgb(32, 155, 68) 360deg
      );
      float: right;
      margin-left: 5px;
      padding: 2px 15px;
      font-size: 14px;
    }
  }

  .close-icon-modal {
    content: "x";
    cursor: pointer;
    position: fixed;
    right: calc(400px - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
`;

export default PopupWrapper;
