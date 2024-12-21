import styled from "styled-components";

import BackgroundImg from "../../../assets/images/banner/banner-bg-2.png";

const BannerWrapper = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
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
    background: ${({theme}) => theme.colors.bgBannerV2};
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

  .stage-raised {
    font-size: 14px;
    letter-spacing: .15em;
  }

  .wallet-balance-container {
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

  .inso-wallet-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.colors.white}1a;
    padding: 5px 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    justify-content: center;
    justify-items: center;

    .wallet-title {
      display: flex;
      width: 100%;
      justify-content: center;

      h6 {
        letter-spacing: .1rem;
        font-size: 12px;
      }
    }

    .wallet-balance-row {
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
      background-image: linear-gradient(60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%),);
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


    h4 {
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
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
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
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 400;
  font-size: 50px;
  line-height: 70px;
  letter-spacing: .3rem;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
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
  font-family: ${({theme}) => theme.fonts.primary};
  font-weight: 700;
  font-size: 70px;
  line-height: 90px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
}

.gittu-banner-card {
  //width: 500px;
  background: ${({theme}) => theme.colors.white}1a;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin: auto;
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
    background: ${({theme}) => theme.colors.white}0d;
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
  background: ${({theme}) => theme.colors.white}1a;
  //  border-radius: 20px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;

  h5 {
    font-family: ${({theme}) => theme.fonts.primary};
  }
}

.video-responsive {
  margin-top: 120px;
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
  display: block;

  .presale-item-inner {
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .presale-item-select {
    display: flex;
    width: 100%;
  }

  .dropdown-toggle {
    width: 110px !important;
  }

  h6 {
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: ${({theme}) => theme.colors.white};
  }

  input {
    width: 100%;
    padding: 12px;
    background: ${({theme}) => theme.colors.white}0d;
    border: 1px solid ${({theme}) => theme.colors.white}1a;
    //border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px !important;
    color: ${({theme}) => theme.colors.white};
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

.rotate {
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
    color: ${({theme}) => theme.colors.white};
  }

  a {
    text-decoration: underline !important;
  }

  &__content {
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
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  align-items: center;
  width: 100%;
  max-width: 70.5rem;
  margin-inline: auto;
  padding-bottom: 4rem;
  padding-top: 5rem;
  padding-inline: 2rem;
  isolation: isolate;
  --vw: max(1vw, .5rem);
  --bg-h: 20rem
}

@media (max-width: 800px) {
  .aurora {
    padding-inline: 1rem;
    padding-top: 4rem;
    gap: 4rem;
    overflow-x: hidden
  }
}

@media (max-width: 600px) {
  .aurora {
    --bg-h: 17rem
  }
}

.aurora:after {
  content: " ";
  position: absolute;
  top: 1rem;
  left: 0;
  width: 100%;
  height: 23rem;
  background-image: radial-gradient(ellipse calc(var(--vw) * 100) calc(var(--vw) * 60) at center calc(var(--vw) * -35 + var(--bg-h)), #000000 calc(40 * var(--vw)), #13181f calc(60 * var(--vw)), transparent calc(60 * var(--vw) + 1px)), radial-gradient(ellipse calc(var(--vw) * 100) calc(var(--vw) * 62) at center calc(var(--vw) * -36.1 + var(--bg-h)), #13181f calc(60 * var(--vw)), rgba(255, 255, 255, .5) calc(60 * var(--vw) + 1px), rgba(255, 255, 255, .5) calc(60 * var(--vw) + 2px), transparent calc(60 * var(--vw) + 4px));
  z-index: -1
}

.aurora:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50rem;
  aspect-ratio: 1;
  /*background: radial-gradient(ellipse 65% 90% at center -10%,#2c407d 40%,#122145 70%,transparent 100%);*/
  background: radial-gradient(ellipse 65% 90% at center -10%, #ab0476 40%, #2d002c 70%, transparent 100%);
  z-index: -1
}

._card_z7qk4_84 {
  width: 100%
}

._buy-wrapper_riuzb_1 {
  display: flex;
  flex-direction: column;
  gap: 1rem
}

._card_2wlgh_1 {
  background-color: #141414;
  border-radius: 1.5rem;
  padding: 5rem
}

@media (max-width: 800px) {
  ._card_2wlgh_1 {
    padding: 2.5rem
  }
}

@media (max-width: 600px) {
  ._card_2wlgh_1 {
    padding: 1.25rem
  }
}

._buy-container_riuzb_7 {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: #ffffff12;
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(100px);
  padding-top: 3rem;
  padding-bottom: 2.5rem;
  border: 1px solid rgba(255, 255, 255, .1333333333)
}

._account-info_riuzb_19 {
  display: flex;
  justify-content: space-between;
  gap: .5rem
}

._account-info-item_riuzb_25 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1
}

._account-info-item-inner_riuzb_33 {
  display: flex;
  flex-direction: column;
  align-items: center
}

._account-info-item_riuzb_25:last-child {
  align-items: flex-end
}

._account-info-item_riuzb_25:first-child {
  align-items: flex-start
}

._account-info-label_riuzb_47 {
  color: #909090;
  font-size: .875rem;
  line-height: 1.4em
}

._account-info-value_riuzb_53 {
  color: #fff;
  font-size: 1.75rem;
  font-weight: 400;
  margin-block: auto
}

@media (max-width: 800px) {
  ._account-info-value_riuzb_53 {
    font-size: 1.25rem
  }
}

@media (max-width: 600px) {
  ._account-info-value_riuzb_53 {
    font-size: 1rem
  }
}

._progress-container_j2o0e_1 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 4.5rem
}

._text-container_j2o0e_8 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: .5rem
}

._text-left_j2o0e_15 {
  display: flex;
  gap: .625rem;
  align-items: center;
  color: #fff;
  font-weight: 400;
  font-size: 1.1rem
}

._text-right_j2o0e_24 {
  color: #fff;
  font-size: 1.1rem
}

._bold_j2o0e_29 {
  font-weight: 700
}

._dull_j2o0e_33 {
  color: #909090;
  font-weight: 400
}

._bar-container_j2o0e_38 {
  display: flex;
  background-color: #9485fd4d;
  border-radius: 999rem;
  height: 1.25rem;
  padding: .3125rem
}

._bar_j2o0e_38 {
  position: relative;
  height: 100%;
  width: var(--frac);
  background: linear-gradient(to right, #85faeb, #bb68f7);
  border-radius: 999rem
}

._bar_j2o0e_38 > img {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  width: 2.5rem;
  height: 2.5rem;
  max-width: none
}

._inso-coin_j2o0e_63 {
  width: 2rem;
  height: 2rem
}

._tooltip-wrapper_j2o0e_68 {
  position: absolute;
  top: calc(100% + 1rem);
  right: 0%;
  transform: translate(50%)
}

._tooltip_j2o0e_68 {
  position: relative;
  display: flex;
  background: conic-gradient(from 225deg at 50% 50%, #ffc876, #79fff7, #9f53ff, #ff98e2, #ffc876);
  border-radius: .5rem;
  padding: 1px;
  font-size: .875rem;
  width: 10rem;
  transform: translate(var(--offset, 0px))
}

._tooltip_j2o0e_68:after {
  content: " ";
  position: absolute;
  top: 1px;
  left: 50%;
  width: 1rem;
  height: .5rem;
  background-image: conic-gradient(from 225deg at 50% 50%, #ffc876, #79fff7, #9f53ff, #ff98e2, #ffc876);
  background-size: 10rem 15rem;
  background-position: top center;
  clip-path: polygon(40% 5%, 50% 0%, 60% 5%, 100% 100%, 0 100%);
  transform: translate(calc(-50% - var(--offset, 0px)), -100%)
}

._tooltip-inner_j2o0e_99 {
  position: relative;
  display: flex;
  flex-direction: column;
 // gap: .3rem;
  width: 100%;
  background-color: #202020;
  border-radius: .5rem;
  color: #fff;
  font-weight: 700;
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-inline: .5rem
}

._tooltip-inner_j2o0e_99:after {
  content: " ";
  position: absolute;
  z-index: 1;
  top: 1px;
  left: 50%;
  width: 1rem;
  height: .45rem;
  background-color: #202020;
  clip-path: polygon(40% 5%, 50% 0%, 60% 5%, 100% 100%, 0 100%);
  transform: translate(calc(-50% - var(--offset, 0px)), -100%)
}

._text-row_j2o0e_126 {
  display: flex;
  gap: .25rem;
  align-items: center;
  justify-content: center
}

._text-row_j2o0e_126 > img {
  width: 1.5rem;
  height: 1.5rem
}

._tooltip-label_j2o0e_137 {
  text-align: center;
  background: conic-gradient(from 180deg at 50% 50%, #ffc876 35.7669219375deg, #79fff7 153.7493383884deg, #9f53ff 258.751244545deg, #ff98e2 360deg);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: .875rem;
  font-weight: 400
}

._step-container_riuzb_75 {
  display: flex;
  flex-direction: column;
  gap: .75rem
}

._step-title_riuzb_81 {
  color: #909090;
  text-align: center;
  font-size: 1.1rem
}

._bold_riuzb_87 {
  font-weight: 700;
  color: #fff
}

._select-grid_riuzb_92 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: .75rem
}

@media (max-width: 800px) {
  ._select-grid_riuzb_92 {
    grid-template-columns:1fr 1fr
  }
}

@media (max-width: 600px) {
  ._select-grid_riuzb_92 {
    grid-template-columns:1fr
  }
}

._dropdown-button_1fohl_1 {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 999rem;
  background-color: transparent;
  transition: background-color .2s ease-out, box-shadow .2s ease-out;
  padding: 1px;
  background-color: #2f2f2f
}

._dropdown-button_1fohl_1:after {
  content: " ";
  width: 100%;
  height: 100%;
  background: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border-radius: 9999rem;
  transition: opacity .2s ease-out
}

._dropdown-button_1fohl_1._active_1fohl_23:after {
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  transform: translate(-1px, -1px);
  background: conic-gradient(from 225deg at 50% 50%, #ffc876, #79fff7, #9f53ff, #ff98e2, #ffc876)
}

._inner_1fohl_30 {
  position: relative;
  display: flex;
  z-index: 1;
  gap: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  align-items: center;
  padding-left: .5rem;
  padding-right: 1.25rem;
  padding-block: .5rem;
  height: 3.375rem;
  cursor: pointer;
  transition: background-color .2s ease-out;
  color: #fff;
  font-weight: 700;
  background-color: #181818;
  border-radius: 999rem
}

@media (max-width: 800px) {
  ._inner_1fohl_30 {
    height: 3rem;
    padding: .5rem;
    gap: .25rem;
    font-size: .875rem
  }
}

._label-container_1fohl_77 {
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.3;
  font-size: 1.125rem
}

._label-container_1fohl_77:not(._dropdown-img_1fohl_60~._label-container_1fohl_77) {
  padding-left: .75rem
}

._subtitle_1fohl_88 {
  font-size: .75em;
  color: #909090
}

._input-container_riuzb_108 {
  display: flex;
  align-items: center;
  gap: 1.5rem
}

@media (max-width: 600px) {
  ._input-container_riuzb_108 {
    flex-direction: column;
    gap: 1rem
  }
}

._input-container_riuzb_108 > * {
  flex: 1;
  min-width: 0
}

@media (max-width: 600px) {
  ._input-container_riuzb_108 > * {
    flex: none;
    width: 100%
  }
}

._equals_riuzb_131 {
  flex: none;
  width: 30px;
  height: 18px;
}

._input-container_t6c15_1 {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 999rem;
  background-color: transparent;
  transition: background-color .2s ease-out, box-shadow .2s ease-out;
  padding: 1px;
  background-color: #2f2f2f;
  height: 3.375rem
}

._input-container_t6c15_1:after {
  content: " ";
  width: 100%;
  height: 100%;
  position: absolute;
  background: none;
  top: 0;
  left: 0;
  z-index: 0;
  border-radius: 9999rem;
  opacity: 1px;
  transition: opacity .2s ease-out
}

._input-container_t6c15_1._active_t6c15_25:after {
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  transform: translate(-1px, -1px);
  background: conic-gradient(from 225deg at 50% 50%, #ffc876, #79fff7, #9f53ff, #ff98e2, #ffc876)
}

@media (max-width: 800px) {
  ._input-container_t6c15_1 {
    height: 3rem
  }
}

._input-inner_t6c15_37 {
  position: relative;
  display: flex;
  z-index: 1;
  gap: .5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  align-items: center;
  padding-left: .875rem;
  padding-right: 1.25rem;
  padding-block: .5rem;
  transition: background-color .2s ease-out;
  color: #fff;
  font-weight: 700;
  background-color: #070707;
  border-radius: 999rem;
  height: 100%
}

._active_t6c15_25 ._input-inner_t6c15_37 {
  background-color: #141414
}

@media (max-width: 800px) {
  ._input-inner_t6c15_37 {
    padding: .5rem;
    gap: .25rem;
    font-size: .875rem
  }
}

._input_t6c15_1 {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  color: #fff;
  padding-block: 1rem;
  flex: 1;
  font-weight: 700;
  font-size: 1.125rem;
  min-width: 0
}

._input_t6c15_1:focus {
  outline: none;
  border: none
}

._input_t6c15_1::placeholder {
  font-weight: 400;
  opacity: 1;
  color: #909090
}

._after-label_t6c15_89 {
  font-weight: 700;
  color: #fff9;
  font-size: 1.125rem
}

._icon-container_t6c15_95 {
  width: 2rem;
  height: 2rem
}

._icon-container_t6c15_95 > * {
  width: 100%;
  height: 100%
}

._button_riuzb_135 {
  max-width: 18.75rem;
  margin-inline: auto;
  width: 100%;
  height: 3.375rem;
  font-size: 1.125rem
}

.custom_btn {
  border-radius: 3.5rem;
  border: 2px solid transparent;
  outline: none;
  color: #fff;
  box-shadow: 0 4px 4px #00000040;
  --bg: #000;
  background: linear-gradient(180deg, var(--bg), var(--bg)) padding-box,
  conic-gradient(from 180deg at 50% 50%,
  #ff98e2,
  #ffc876 35.77deg,
  #79fff7 153.75deg,
  #9f53ff 258.75deg,
  #ff98e2 360deg) border-box;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1em;
  height: 100%;
  padding-inline: 2rem;
  position: relative;
  z-index: 1;
  display: inline-flex;
  overflow: clip;
  transition: 0.4s ease-in-out;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.custom_btn svg {
  margin-left: 1.6rem;
  height: auto;
}

.custom_btn svg path {
  fill: #fff;
  transition: 0.2s ease-in-out;
}

.custom_btn:after {
  transition: 0.4s ease-in-out;
  content: "";
  border-radius: inherit;
  pointer-events: none;
  z-index: -1;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  height: 0;
  width: 100%;
  background: conic-gradient(from 180deg at 50% 50%,
  #ff98e2,
  #ffc876 35.77deg,
  #79fff7 153.75deg,
  #9f53ff 258.75deg,
  #ff98e2 360deg);
  height: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.custom_btn:hover,
.custom_btn.active {
  color: #000;
}

.custom_btn:hover:after,
.custom_btn.active:after {
  height: 100%;
  opacity: 1;
}

.custom_btn:hover svg path,
.custom_btn.active svg path {
  fill: #fff;
}

._container_1dji6_1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem
}

._title_1dji6_8 {
  margin-bottom: 1rem
}

._title_13gaz_1 {
  /*
  background: conic-gradient(from 180deg at 50% 50%,#ffc876 35.7669219375deg,#79fff7 153.7493383884deg,#9f53ff 258.751244545deg,#ff98e2 360deg);
  */
  background: radial-gradient(circle at 56% 38%, #E43292 22.522615131578945%, #550E9B 36.71189692982456%, #ED45A0 53.31688596491229%, #EEEEEE 82.48355263157895%);

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: 700;
  margin-top: 1rem;
  text-align: center
}

@media (max-width: 800px) {
  ._title_13gaz_1 {
    font-size: 5rem
  }
}

@media (max-width: 600px) {
  ._title_13gaz_1 {
    font-size: 4rem
  }
}

._subtitle_1dji6_12 {
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  text-align: center
}

._box_1dji6_19 {
  gap: 3.75rem;
  padding-bottom: 5rem
}

._box_1dji6_19:not(:last-of-type) {
  margin-bottom: 3rem
}

._box_1dji6_19:last-of-type {
  margin-bottom: 1.5rem
}

._step-container_1dji6_30 {
  display: flex;
  flex-direction: column;
  gap: 1.25rem
}

._step-label_1dji6_36 {
  font-size: 2rem;
  color: #fff;
  font-weight: 700;
  text-align: center
}

._body-text_1dji6_43 {
  color: #fffc;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.8
}

._wallet-buttons_1dji6_50 {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem
}

@media (max-width: 600px) {
  ._wallet-buttons_1dji6_50 {
    gap: 1rem;
    flex-wrap: wrap
  }
}

._wallet-button_1dji6_50 {
  display: flex;
  flex-direction: column;
  height: auto;
  padding-block: 1rem;
  border-radius: 1rem;
  flex: 1;
  gap: .625rem;
  max-width: 20rem;
  min-width: 10rem
}

._italics_1dji6_75 {
  font-style: italic;
  font-weight: 300
}

._purchase-img-container_1dji6_80 {
  margin-top: 1.25rem;
  position: relative;
  width: calc(100% - 4rem);
  isolation: isolate;
  max-width: 50rem;
  margin-inline: auto
}

@media (max-width: 600px) {
  ._purchase-img-container_1dji6_80 {
    width: 100%
  }
}

._purchase-img-container_1dji6_80:before {
  content: " ";
  width: 20%;
  height: 20%;
  background-image: conic-gradient(from 180deg at 50% 50%, #ffc876 35.7669219375deg, #79fff7 153.7493383884deg, #9f53ff 258.751244545deg, #ff98e2 360deg);
  position: absolute;
  top: 64%;
  left: 22%;
  transform: translate(-50%, -50%);
  filter: blur(100px);
  z-index: -1
}

._purchase-img_1dji6_80 {
  width: 100%
}

._token-reception-img_1dji6_111 {
  width: calc(80% - 4rem);
  margin-inline: auto;
  margin-top: 1.25rem;
  max-width: 18.75rem
}

._send-img_1dji6_118 {
  margin-top: 1.25rem
}

:where(._box_cprls_1) {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding-inline: 2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  background-color: #020202;
  border-radius: 1.5rem;
  border: 1px solid #222;
  color: #fff
}

@media (max-width: 800px) {
  :where(._box_cprls_1) {
    padding-inline: 1.5rem
  }
}

@media (max-width: 600px) {
  :where(._box_cprls_1) {
    padding-inline: 1.25rem
  }
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
  .banner-title-extra, {
    font-size: 38px;
    line-height: 60px;
  }

  .video-banner-title {
    font-size: 30px;
    line-height: 45px;
  }

  .token-panel {
    max-width: 360px;
  }

  .gittu-banner-card {
    max-width: 360px;
  }

  .youtube-container {
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

  .token-panel {
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

}

.box {
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
  content: '';
  position: absolute;
  width: 550px;
  height: 100px;
  background: linear-gradient(#00ccff, #d400d4);
  animation: animate 4s linear infinite;
}

.box::after {
  content: '';
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

.component-margin {
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

.inso-input-group-icon {
  display: inline-block;
  width: 30px;
  height: 40px;
  border: 1px solid black;
}

.inso-input-group-input {
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

  img {
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
  background: ${({theme}) => theme.colors.white}0d;
  border: 1px solid ${({theme}) => theme.colors.white}1a;

  img {
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
  background: ${({theme}) => theme.colors.white}0d;
  border: 1px solid ${({theme}) => theme.colors.white}1a;
  //border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px !important;
  color: ${({theme}) => theme.colors.white};
  transition: 0.3s;
  -moz-appearance: textfield; /* Firefox */

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default BannerWrapper;
