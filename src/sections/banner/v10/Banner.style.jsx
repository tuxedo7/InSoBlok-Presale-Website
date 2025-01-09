import styled from "styled-components";
import BackgroundImg from "../../../assets/images/banner/banner-bg-2.png";

const BannerWrapper = styled.div`
  // background-image: url(${BackgroundImg});
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-size: cover;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;

  // &::before {
  //   z-index: -1;
  //   position: absolute;
  //   content: "";
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: ${({ theme }) => theme.colors.bgBannerV2};
  // }

  // &::after {
  //   z-index: -1;
  //   position: absolute;
  //   content: "";
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: black;
  // }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
}

._blue_blur_insoblok_effect {
  position: absolute;
  width: 488px;
  height: 488px;
  top: -120px;
  left: -208px;
  opacity: 0.5;
  filter: blur(100px);
  border-radius: 999px;
  background: #6635DF97;
  z-index: 1;
}

._red_blur_insoblok_effect {
  position: absolute;
  width: 488px;
  height: 488px;
  top: -120px;
  right: -208px;
  opacity: 0.5;
  filter: blur(100px);
  background: #E4329297;
  z-index: 1;
}

.girdwave-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.divide-line {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4.375rem;
}

@media screen and (min-width: 1400px) {
  ._blue_blur_insoblok_effect {
    width: 688px;
    height: 688px;
    top: -240px;
    left: -208px;
  }
  ._red_blur_insoblok_effect {
    width: 688px;
    height: 688px;
    top: -240px;
    right: -208px;
  }
}

._banner_pattern {
  position: absolute;
  top: 25rem;
  width: 100%;
}

._guide-info-container_insoblok_91 {
  display: flex;
  flex-direction: column;
  gap: .2rem;
}

._guide-info-inner {
  display: flex;
  color: #7376aa;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;

  &:hover {
    color: #7064e9;
  }
      
  button.btn-info {
    font-size: 1rem;
    font-weight: 400;
    color: #7376aa;
    border: none;
    background: none;
    
    &:hover {
      color: #7064e9;
    }
  }
}

._presale-top {
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

._presale-item {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  gap: 1rem;

  ._presale-item-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  
    button {
      width: 100%;
    }
    
    .btn-default {
      color: #FFFFFF80;
    }
  }

  ._presale-item-select {
    display: flex;
    width: 100%;
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

._presale-item-msg {
  text-align: center;

  .text-msg {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
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

._presale-item-action {
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

  ._presale-top {
    padding: 15px 30px;
  }

  ._presale-item {
    align-items: flex-start;
    /* flex-direction: column;*/
  }
}

._banner-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
  width: 100%;
  max-width: 70.5rem;
  margin-inline: auto;
  margin-top: 50px;
  padding: 20px;
  isolation: isolate;
  --vw: max(1vw, .5rem);
  --bg-h: 20rem;
  z-index: 1;
}

@media (max-width: 800px) {
  ._banner-container {
    padding-inline: 1rem;
    gap: 4rem;
    overflow-x: hidden
  }
}

@media (max-width: 600px) {
  ._banner-container {
    --bg-h: 17rem
  }
}

.inso-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 78.875rem;
  margin-inline: auto;
  padding-inline: 2rem;
  isolation: isolate;
  --vw: max(1vw, .5rem);
  --bg-h: 20rem;
}

@media (max-width: 800px) {
  .inso-container {
    padding-inline: 1rem;
    overflow-x: hidden
  }
}

@media (max-width: 600px) {
  .inso-container {
    --bg-h: 17rem
  }
}

._buy-wrapper_insoblok_1 {
}

.__presale-info_insoblok_7 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.__presale-info-item_insoblok_16 {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3.5rem; /* Base font size */
  font-weight: 700; /* Bold text */
  color: #ccceef;
  line-height: 67px; /* Adjust line height */
  margin: 0;
}

@media (max-width: 900px) {
  .__presale-info-item_insoblok_16 {
    font-size: 2.5rem;
    line-height: 50px;
  }

  .__presale-info-label_insoblok_3, .__presale-info-label_insoblok_4{
    font-size: 2.5rem;
  }

  .__presale-info-label_insoblok_15{
    font-size: 0.875rem !important;
    font-weight: 700 !important;
  }
}

@media (max-width: 560px) {
  .__presale-info-item_insoblok_16 {
    font-size: 1.8rem;
    line-height: 40px;
  }

  .__presale-info-label_insoblok_3, .__presale-info-label_insoblok_4{
    font-size: 1.8rem;
  }
}

.__presale-info-label_insoblok_3 {
  background: linear-gradient(90deg, #E43292 20%, #6635DF 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.__presale-info-label_insoblok_4 {
  color: #696a7f !important;
}
  
/* Hidden state */
.is_hidden {
  opacity: 0;
  display: none;
  transform: translateY(50px);
  animation: slide-out 0.6s forwards;
}

/* Visible state */
.is_visible {
  opacity: 1;
  display: block;
  transform: translateY(0px);
  animation: slide-in 0.6s forwards;
}

/* Slide-in animation */
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* Slide-out animation */
@keyframes slide-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}

@keyframes slideIn {
  100% {
    transform: translateY(0px);
  }
}

@keyframes slideOut {
  100% {
    transform: translateY(-350px);
  }
}

.__presale-info-label_insoblok_15 {
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: #7c7fb1;
}

.__presale-info_insoblok_9 {
  display: flex;
  justify-content: center;
  gap: 1.125rem;
  margin-top: 1.875rem;

  .btn-primary, .btn-default {
    max-width: 230px;
  }
}

@media (max-width: 600px) {
  .__presale-info_insoblok_9 {
    flex-direction: column;

    .btn-primary, .btn-default {
      max-width: none;
      width: 100%;
    }
  }
}

.btn-primary {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  gap: 0.625rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 50px;
  cursor: pointer;
  transition: background-color .2s ease-out;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5rem;
  background: linear-gradient(90deg, #E43292 20%, #6635DF 100%);
  border-radius: .5rem;
  transition: .4s;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background: linear-gradient(90deg, #3b82f6, #9333ea);
    transform: scale(1.05);
  }
}

.btn-primary: hover {
  opacity: 0.9;
}

.btn-outlined {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  gap: 0.625rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  // border: none;
  align-items: center;
  // padding: 1rem 2rem;
  width: 17.5rem;
  height: 50px;
  cursor: pointer;
  transition: background-color .2s ease-out;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5rem;
  background: #0B0B0B;
  border-radius: .5rem;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    bottom: -1px;
    right: -1px;
    left: -1px;
    z-index: -1;
    margin: 0px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(103.16deg, #E43292 0%, #6635DF 100%);
  }
}

.btn-default {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  gap: 0.625rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 50px;
  cursor: pointer;
  transition: background-color .2s ease-out;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5rem;
  background: transparent;
  border-radius: .5rem;
  border: 1px solid #ffffff1f;
  transition: .4s;

  img {
    width: 30px;
    height: auto;
  }

  &:hover {
    background: linear-gradient(90deg, #3b82f6, #9333ea);
    border: none;
    transform: scale(1.05);
  }
}

._card_z7qk4_84 {
  width: 100%;
  max-width: 480px;
  position: relative;
  background: radial-gradient(circle at var(--x,50%) var(--y,50%),#64748b,#1e293b);
  padding: 1px;
  border-radius: 1.5rem;

  &::before {
    position: absolute;
    content: "";
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    border: 1px solid transparent;
    background: linear-gradient(94deg, #dd00ac 10.66%, #7130c3 53.03%, #410093 96.34%, rgba(255, 0, 238, .26) 191.41%, rgba(255, 59, 212, 0) 191.43%);
    border-radius: inherit;
  }
}

._card_2wlgh_1 {
  background: #0f1021;
  border-radius: 1.5rem;
  padding: 1.5rem 3rem;
}

._text-right_j2o0e_4 {
  font-size: 14PX;
  font-weight: 400;
  line-height: 1.125rem;
  text-align: right;
  background: linear-gradient(90deg, #E43292 20%, #6635DF 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  &:hover {
    color: #7064e9;
  }
}

._step-container_insoblok_65 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

._text-container_j2o0e_6 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;  
}

._text-center_j2o0e_9 {
  font-size: 24px;
  font-weight: 700;
  line-height: 2rem;
  background: linear-gradient(90deg, #E43292 20%, #6635DF 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

._text-center_j2o0e_11 {
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: #7376aa;
}

._progress-container_j2o0e_1 {
  display: flex;
  flex-direction: column;
  // align-items: center;
}

._text-container_j2o0e_8 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 500px) {
  ._text-container_j2o0e_8 {
    justify-content: center;
  }
}

._text-left_j2o0e_15 {
  display: flex;
  gap: 0.5rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.125rem;
  color: #7376aa;
}

._text-center_j2o0e_18 {
  display: flex;
  width: auto;
  margin-top: 1.25rem;
  gap: 0.5rem;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 1.125rem;
  color: #7376aa;
}

._text-right_j2o0e_24 {
  display: flex;
  gap: 0.5rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.125rem;
  color: #7376aa;
}

._bold_j2o0e_29 {
  color: #7376aa;
  font-size: 14px;
  font-weight: 700;
}

._division_bar_55 {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0.125rem;
  background: linear-gradient(90deg, transparent, hsla(0, 0%, 100%, 0) 0, rgba(111, 100, 233, .6) 50%, transparent);
  
  &::before {
    content: "";
    position: absolute;
    width: 5%;
    height: 100%;
    background: linear-gradient(90deg, transparent, hsla(0, 0%, 100%, 0) 0, rgba(111, 100, 233, .9) 50%, transparent);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    animation: separateline1 5s ease-in-out infinite;
  }
}

@keyframes separateline1 {
	0% {margin-left: 0px;}
	100% {margin-left: 400px;}
}

._bar-container_j2o0e_38 {
  display: flex;
  background-color: #9485fd4d;
  border-radius: 999rem;
  height: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

._bar_j2o0e_38 {
  position: relative;
  height: 100%;
  width: var(--frac);
  background: linear-gradient(90deg, #E43292 20%, #6635DF 100%);
  border-radius: 999rem;
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

._balance-container_insoblok_75 {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

._balance-title_insoblok_81 {
  display: flex;
  gap: 0.5rem;
  margin: 1.5rem 0rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #7376aa;
}

._line_middle {
  width: auto;
  height: 1px;
  flex-grow: 1;
  background: #FFFFFF4D;
}

._bold_insoblok_87 {
  background: linear-gradient(90deg,#12b5de -30%,#7130c3 30%,#ff3bd4 90%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

._select-btn_insoblok_92 {
  display: flex;
  gap: 1.25rem;

  .btn-primary {
    color: white;
  }
}

@media (max-width: 600px) {
  ._select-btn_insoblok_92 {
    flex-direction: column;

    .btn-primary, .btn-default {
      width: 100%;
    }
  }
}

._bottom_lineup {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

._small_insoblok_85 {
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.875rem;
  color: white;
}

._input-container_insoblok_108 {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

@media (max-width: 600px) {
  ._input-container_insoblok_108 {
    flex-direction: column;
    gap: 1rem
  }
}

._input-container_insoblok_108 > * {
  flex: 1;
  min-width: 0
}

@media (max-width: 600px) {
  ._input-container_insoblok_108 > * {
    flex: none;
    width: 100%
  }
}

._equals_insoblok_131 {
  flex: none;
  width: 30px;
  height: 18px;
}

._input-container_t6c15_1 {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: transparent;
  transition: background-color .2s ease-out, box-shadow .2s ease-out;
  padding: 1px;
  height: 4.75rem;
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
  height: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #0f172a;
  border: 2px solid #64748b;
  border-radius: .5rem;
  align-items: center;
  padding-left: .875rem;
  padding-right: 1.25rem;
  padding-block: .5rem;
  transition: background-color .2s ease-out;
  color: #fff;
  font-weight: 700;
}

._input-inner_t6c15_37:hover {
    border-color: #38bdf8;
    box-shadow: 0 0 10px rgba(56, 189, 248, .7);
    outline: none;
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
  font-weight: 400;
  font-size: 1rem;
  min-width: 0;
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
  width: 1.5rem;
  height: auto;
}

._button_insoblok_135 {
  max-width: 18.75rem;
  margin-inline: auto;
  width: 100%;
  height: 3.375rem;
  font-size: 1.125rem
}
`;

export default BannerWrapper;
