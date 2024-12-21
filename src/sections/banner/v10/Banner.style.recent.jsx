import styled from "styled-components";

import BackgroundImg from "../../../assets/images/banner/banner-bg-2.png";

const BannerWrapper = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  padding: 40px 20px 0px 20px;
  position: relative;
  z-index: 0;

  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.bgBannerV2};
  }

  &::after {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
  }
  
  .stage-raised{
    font-size: 14px;
    letter-spacing: .15em;
  }
  
  .wallet-balance-container{
    display: flex;
    justify-items: center;
    width: 100%;
    justify-content: center;
    font-size: 12px;
    padding-top: 2px;
    font-weight: bold;
    letter-spacing: .1em;

    .wallet-balance-bar {
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1.5px;
      width: 100%;
      display: flex;
      padding-top: 8px;
      padding-bottom: 5px;

    }

    .wallet-balance-bar:after,
    .wallet-balance-bar:before {
      content: "\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0";
      text-decoration: line-through;
      margin: auto 0.75em;

    }
  }

 

 

  .inso-wallet-container{
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.white}1a;
    padding: 5px 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    justify-content: center;
    justify-items: center;
    
    .wallet-title{
      display: flex;
      width: 100%;
      justify-content: center;

      h6{
        letter-spacing: .1rem;
        font-size: 12px;
      }
    }
    
    .wallet-balance-row{
      padding-bottom: 3px;
      font-size: 12px;
      color: white;
      letter-spacing: .1rem;
      font-weight: bold;
    }
    
   
  }

  .gradient-border {
    --border-width: 3px;
    box-sizing: border-box;

    width: 400px;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', serif;
    color: white;
    font-size: 46px;
    text-transform: uppercase;
    background: #222;
    // background: transparent;
    border-radius: var(--border-width);

    &::after {
      position: absolute;
      content: '';
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      width: calc(100% + var(--border-width) * 2);
      height: calc(100% + var(--border-width) * 2);
      z-index: -1;
      background-image: linear-gradient(
              60deg,
              hsl(224, 85%, 66%),
              hsl(269, 85%, 66%),
              hsl(314, 85%, 66%),
              hsl(359, 85%, 66%),
              hsl(44, 85%, 66%),
              hsl(89, 85%, 66%),
              hsl(134, 85%, 66%),
              hsl(179, 85%, 66%),
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * var(--border-width));
      animation: moveGradient 4s alternate infinite;
    }
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }

  .token-panel {
    padding: 20px;
    margin: auto; 
    max-width: 440px;
    min-height: 150px;
    border-radius: 10px;
    vertical-align: center;
    background: radial-gradient(#323f6e, #3b3a3b);
   // text-transform: uppercase;
    text-shadow: 0 1px 0 #130042;
    --border-width: 1px;

    

    h4{
      line-height: 2em;
      font-weight: 600;
      letter-spacing: .15rem;
    }


  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
}

.banner-title {
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  letter-spacing: .25rem !important;

  img {
    width: 100px;
    height: 50px;
    //border-radius: 50px;
  }
}

.video-banner-title {
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 50px;
  line-height: 70px;
  letter-spacing: .3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  img {
    width: 100px;
    height: 50px;
    //border-radius: 50px;
  }
}

.loSymu {
  padding: 0px !important;
}

.fxRGZw {
  border-radius: 0px !important;
}

.dropdown-toggle {
  border-radius: 0px !important;
}

.banner-title-extra {
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
}

.gittu-banner-card {
  //width: 500px;
  background: ${({ theme }) => theme.colors.white}1a;
  backdrop-filter: blur(10px);
   border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin:auto;
  margin-top: 25px;
  max-width: 460px;
  border: 1px solid white;
  

  background: linear-gradient(to bottom, #0a1535 0%, #103566 37%, #163a75 61%, #0c528e 100%);
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.1) inset;
  // height: 100vh;
  /* align-items: center; */

  &-left,
  &-right {
    width: 100%;
  }

  &-left {
    background: ${({ theme }) => theme.colors.white}0d;
  }

  &-left-content {
    padding: 20px 40px 40px 40px;

    h5 {
      line-height: 33px;
    }
  }

  &-right-content {
    padding: 25px 25px 35px 25px;
  }
}

.presale-top {
  padding: 15px;
  background: ${({ theme }) => theme.colors.white}1a;
  //  border-radius: 20px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;

  h5 {
    font-family: ${({ theme }) => theme.fonts.primary};
  }
}

.video-responsive {
  margin-top:120px;
  overflow: hidden;
  padding-bottom: 56.25%;
  padding-top: 120px;
  position: relative;
}

.video-responsive iframe {
  left: 50%;
  top: 0;
  height: 70%;
  width: 70%;
  transform: translate(-50%, 0);
  position: absolute;
}

.presale-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
 // gap: 30px;

  .presale-item-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .presale-item-select{
    display: flex;
    width: 100%;
  }
  
  .dropdown-toggle{
    width: 110px !important;
  }

  h6 {
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.white};
  }

  input {
    width: 100%;
    padding: 12px;
    background: ${({ theme }) => theme.colors.white}0d;
    border: 1px solid ${({ theme }) => theme.colors.white}1a;
    //border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px !important;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
    -moz-appearance: textfield; /* Firefox */

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  }
}

.rotate{
 animation: loading 3s linear infinite;
 @keyframes loading {
  0% { 
    transform: rotate(0); 
  }
  100% { 
    transform: rotate(360deg);
  }
 }
}

.presale-item-msg {
  text-align: center;

  .text-msg {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: underline !important;
  }

  &__content {
    margin-bottom: 30px;
    // border-radius: 10px;
    padding: 10px 14px;
    background-color: rgba(255, 63, 63, 0.15);
    border: 1px solid rgba(255, 63, 63, 0.15);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 16px;
      height: 16px;
      //  border-radius: 50%;
    }

    &.done {
      background-color: #1dff9626;
      border: 1px solid #1dff9626;
      color: #1dff96;

      a {
        color: #1dff96;
      }
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      color: #ff3f3f;
    }
  }

  
  &__content_loading {
    margin-bottom: 30px;
    // border-radius: 10px;
    padding: 10px 14px;
    background-color: rgba(63, 255, 63, 0.15);
    border: 1px solid rgba(63, 255, 63, 0.15);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 16px;
      height: 16px;
      //  border-radius: 50%;
    }

    &.done {
      background-color: #1dff9626;
      border: 1px solid #1dff9626;
      color: #1dff96;

      a {
        color: #1dff96;
      }
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      color: #33ff3f;
    }
  }
}

.presale-item-action {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media screen and (max-width: 991px) {
  .banner-title,
  .banner-title-extra {
    font-size: 55px;
    line-height: 70px;
  }

  .gittu-banner-card {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .gittu-banner-card {
    max-width: 440px;
  }
  .banner-subtitle {
    br {
      display: none;
    }
  }
}

@media screen and (max-width: 575px) {
  .gittu-banner-card {
    &-left-content {
      padding: 20px 30px 30px 30px;
    }

    &-right {
      padding: 10px;
      margin-top: 20px;
    }
  }

  .presale-top {
    padding: 15px 30px;
  }

  .presale-item {
    align-items: flex-start;
    /* flex-direction: column;*/
  }
}

.dKTXBN {
  border-radius: 3px;
  letter-spacing: .2rem;

}

.letter-spacing {
  letter-spacing: .1rem;
}

.letter-spacing-2 {
  letter-spacing: .2rem;
}


.blob {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 650px;
  border-radius: 100%;
  background-image: linear-gradient(#1100ff 10%, #ff00f2);
  filter: blur(250px);
  transition: all 450ms ease-out;
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
  z-index: -1;
}

.aurora {
  background: #000;
  position: relative;
}

.aurora:before,
.aurora:after {
  content: '';
  display: block;
  position: absolute;
  width: 1px;
  height: 1px;
  border-radius: 100%;
  opacity: 0.18;
}

.aurora:before {
  box-shadow: 0 0 35vmax 35vmax #f00;
  animation: hue 5s 0s linear infinite, move1 10s 0s linear infinite;
}

.aurora:after {
  box-shadow: 0 0 35vmax 35vmax #0ff;
  animation: hue 10s 0s linear infinite, move2 20s 0s linear infinite;
}

@-moz-keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@-webkit-keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@-o-keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@-moz-keyframes move1 {
  0% {
    top: 0vh;
    left: 50vw;
  }
  25% {
    left: 0vw;
  }
  50% {
    top: 100vh;
  }
  75% {
    left: 100vw;
  }
  100% {
    top: 0vh;
    left: 50vw;
  }
}

@-webkit-keyframes move1 {
  0% {
    top: 0vh;
    left: 50vw;
  }
  25% {
    left: 0vw;
  }
  50% {
    top: 100vh;
  }
  75% {
    left: 100vw;
  }
  100% {
    top: 0vh;
    left: 50vw;
  }
}

@-o-keyframes move1 {
  0% {
    top: 0vh;
    left: 50vw;
  }
  25% {
    left: 0vw;
  }
  50% {
    top: 100vh;
  }
  75% {
    left: 100vw;
  }
  100% {
    top: 0vh;
    left: 50vw;
  }
}

@keyframes move1 {
  0% {
    top: 0vh;
    left: 50vw;
  }
  25% {
    left: 0vw;
  }
  50% {
    top: 100vh;
  }
  75% {
    left: 100vw;
  }
  100% {
    top: 0vh;
    left: 50vw;
  }
}

@-moz-keyframes move2 {
  0% {
    top: 50vh;
    left: 100vw;
  }
  25% {
    top: 100vh;
  }
  50% {
    left: 0vw;
  }
  75% {
    top: 0vh;
  }
  100% {
    top: 50vh;
    left: 100vw;
  }
}

@-webkit-keyframes move2 {
  0% {
    top: 50vh;
    left: 100vw;
  }
  25% {
    top: 100vh;
  }
  50% {
    left: 0vw;
  }
  75% {
    top: 0vh;
  }
  100% {
    top: 50vh;
    left: 100vw;
  }
}

@-o-keyframes move2 {
  0% {
    top: 50vh;
    left: 100vw;
  }
  25% {
    top: 100vh;
  }
  50% {
    left: 0vw;
  }
  75% {
    top: 0vh;
  }
  100% {
    top: 50vh;
    left: 100vw;
  }
}

@keyframes move2 {
  0% {
    top: 50vh;
    left: 100vw;
  }
  25% {
    top: 100vh;
  }
  50% {
    left: 0vw;
  }
  75% {
    top: 0vh;
  }
  100% {
    top: 50vh;
    left: 100vw;
  }
}

 @media screen and (max-width: 480px) {
   .banner-title,
   .banner-title-extra,{
     font-size: 38px;
     line-height: 60px;
   }
   
   .video-banner-title{
     font-size: 30px;
     line-height: 45px;
   }

   .token-panel{
     max-width: 360px;
   }
   
   .gittu-banner-card{
     max-width: 360px;
   }
   
   .youtube-container{
    min-width: 300px !important;
   }
   
   .presale-item-select input {
     border-radius: 0px !important;
   //  border: 1p;
   }
 } 

 @media screen and (max-width: 375px) {
   .gittu-banner-card {
     .count-item:not(:last-child)::before {
       font-size: 20px;
       line-height: 40px;
     }
     .count-item:not(:last-child) {
       padding-right: 15px;
     }

     .count {
       font-size: 20px;
       line-height: 40px;
     }

     .label {
       font-size: 14px;
       line-height: 40px;
     }
   }
   
   .token-panel{
     max-width: fit-content;
     margin-left:auto ;
     margin-right: auto;
   }
  
 }

.box{
  //position: relative;
  //width: 500px;
  //height: 200px;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  ////background: rgba(0,0,0,.5);
  //overflow: hidden;
  //border-radius: 20px;

  padding: 20px;
  margin: auto;
  width: 480px;
  min-height: 150px;
  border-radius: 10px;
  vertical-align: center;
  background: radial-gradient(#323f6e, #3b3a3b);
  text-transform: uppercase;
  text-shadow: 0 1px 0 #130042;
  --border-width: 1px;
}

.box::before {
  content:'';
  position: absolute;
  width: 550px;
  height: 100px;
  background: linear-gradient(#00ccff, #d400d4);
  animation: animate 4s linear infinite;
}

.box::after {
  content:'';
  position: absolute;
  inset: 4px;
  border-radius: 16px;
  background: radial-gradient(#323f6e, #3b3a3b);
 // background-color: #0e1538;
}

@keyframes animate {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(350deg)
  }
}

.component-margin{
  margin-top: 150px;
  margin-bottom: 50px;
}

.youtube-container {
display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;

  height: 35.375vw;
  width: 60vw;
  min-width: 400px;
  min-height: 275px;
}

.inso-input-group-icon{
  display: inline-block;
  width: 30px;
  height: 40px;
  border: 1px solid black;
}

.inso-input-group-input{
  display: inline-block;
  width: 100px;
  height: 40px;
  border: 1px solid black;
}

.inso-input-group {
  display: flex;
  align-content: stretch;
}

.inso-input-group > input {
 border-right: none;
  text-align: right;
}

/**
 * Even when I set some dimension-related styles on this
 * element but not on the input or button, they'll still
 * line up.
 */
.inso-input-group-addon {
  background: #000000;
  padding: 0.5em 1em;
  
  img{
    height: 30px;
    width: 40px;
  }
}

@media (max-width: 600px) {
  .inso-input-group-addon {
    padding: 0.4em 0.8em;

    img {
      height: 20px;
      width: 40px;
    }
  }
}

.inso-input-group-payment-addon {
  padding: 0.5em 0.7em;
  background: ${({ theme }) => theme.colors.white}0d;
  border: 1px solid ${({ theme }) => theme.colors.white}1a;

  img{
    height: 35px;
    width: 50px;
  }
}

@media (max-width: 600px) {
  .inso-input-group-payment-addon {
    padding: 0.4em 0.6em;

    img {
      height: 25px;
      width: 45px;
    }
  }
}

.inso-input-group-end {
  display: flex;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.white}0d;
  border: 1px solid ${({ theme }) => theme.colors.white}1a;
  //border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px !important;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
  -moz-appearance: textfield; /* Firefox */

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;



export default BannerWrapper;
