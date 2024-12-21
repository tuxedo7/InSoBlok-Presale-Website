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
    top: calc(40% - 100px);
    height: fit-content;
    max-height: 380px;
    border-radius: 1rem;
    left: calc(40% - 100px);
    bottom: 40px;
    z-index: 100;
    padding: 3px;
  );
  }

  .box-modal {
    background: #202020;
    border-radius: 1rem;
    padding: 10px;

    p {
      padding-top: 10px;
      font-weight: 300;
      
      color: #ffffffcc;
      font-size: 13px;
      
      a{
        color: #0d76fc;
        font-size: 14px;
        text-decoration: underline;
      }
    }
    
    .warning-icon{
      padding-top: 20px;
      margin-left: 170px;
      color: #FCD535;
    }
    
    .close-button{
      background-color: #FCD535;
      color: white;
      width: 300px;
      height: 50px;
      border-radius: 10px;
      margin-left: 50px;
      margin-top: 25px;
    }
    
    .cancel-button{
        background-color:#1e2329;
      border-radius:4px;
      color: #606266;
      padding: 2px 15px;
      float: right;
      font-size: 14px;
      border: none;
      border-radius: 4px;
      margin-top: 15px;
      
      
      
    }
    
    .cancel-button:hover{
        background-color: white;
      
    }
    
    .agree-button{
      background:#e43292;
      // float: right;
      margin-left: 5px;
      padding: 2px 15px;
      font-size: 14px;
      border: none;
      border-radius: 4px;
      color: white;
      margin-top: 15px;
    }
    
    .agree-button:hover{
      color: #e43292 ;
      background-color: white ;
    }
  }

  .close-icon-modal {
    content: 'x';
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
