import styled from "styled-components";

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  overflow: clip;
  color: white;
  background: black;
  z-index: 0;

  &:before {
    content: " ";
    position: absolute;
    width: 80rem;
    height: 80rem;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 100%) rotate(-90deg);
    z-index: -1;
    pointer-events: none;
    border-radius: 80.3125rem;
    background: conic-gradient(
      from 180deg at 50% 50%,
      #ffc876 35.76692193746567deg,
      #79fff7 153.749338388443deg,
      #9f53ff 258.7512445449829deg,
      #ff98e2 360deg
    );
    filter: blur(200px);
  }

  ._bg_1qdzc_11 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, #0d0d0d00 -43.17%, #0d0d0d);
    -webkit-backdrop-filter: blur(2.5rem);
    backdrop-filter: blur(2.5rem);
    z-index: -1;
  }

  ._footer-inner_1qdzc_47 {
    max-width: 93rem;
    display: grid;
    margin-inline: auto;
    column-gap: 4rem;
    row-gap: 3rem;
    padding-block: 2.5rem;
    padding-inline: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "form store-links" "divider divider" "desc page-links";
  }

  @media (max-width: 1500px) {
    ._footer-inner_1qdzc_47 {
      grid-template-areas: "form form" "store-links store-links" "divider divider" "desc page-links";
    }

    ._store-links_1qdzc_103,
    ._form-container_1qdzc_215 {
      gap: 1rem;
      text-align: center;
    }
  }

  @media (max-width: 1200px) {
    ._footer-inner_1qdzc_47 {
      grid-template-columns: 1fr;
      grid-template-areas: "form" "store-links" "divider" "desc" "page-links";
    }

    ._stores_1qdzc_111 {
      flex-wrap: wrap;
    }

    ._stores_1qdzc_111 {
      gap: 1rem;
    }
  }

  ._form-container_1qdzc_215 {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    grid-area: form;
    max-width: 35rem;
  }

  ._form_1qdzc_215 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: 1.125rem;
    margin-inline: auto;
  }

  ._form-input_1qdzc_233 {
    max-width: 23rem;
    width: 100%;
    flex: 1;
    min-width: 15rem;
    height: 3.5rem;
    border-radius: 999rem;
    border: none;
    padding-inline: 1.5rem;
    outline: none !important;
    border: 1px solid #404040;
    background-color: #000;
  }

  ._form-input_1qdzc_233::placeholder {
    color: #909090;
    opacity: 1;
  }

  ._form-button_1qdzc_252 {
    width: 11rem;
    height: 3.5rem;
  }

  .custom_btn {
    border-radius: 3.5rem;
    border: 2px solid transparent;
    outline: none;
    color: #fff;
    box-shadow: 0 4px 4px #00000040;
    --bg: #000;
    background: linear-gradient(180deg, var(--bg), var(--bg)) padding-box,
      conic-gradient(
          from 180deg at 50% 50%,
          #ff98e2,
          #ffc876 35.77deg,
          #79fff7 153.75deg,
          #9f53ff 258.75deg,
          #ff98e2 360deg
        )
        border-box;
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
    background: conic-gradient(
      from 180deg at 50% 50%,
      #ff98e2,
      #ffc876 35.77deg,
      #79fff7 153.75deg,
      #9f53ff 258.75deg,
      #ff98e2 360deg
    );
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

  ._divider_1qdzc_62 {
    grid-area: divider;
    height: 0.0625rem;
    width: 100%;
    background-color: #ffffff1a;
  }

  ._col_1qdzc_69 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  ._desc-container_1qdzc_76 {
    grid-area: "desc";
    max-width: 35rem;
  }

  ._logo_container_lqdzc_78 {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    font-size: 1.6rem;
  }

  ._logo_1qdzc_81 {
    height: 2.875rem;
    width: auto;
  }

  ._desc_1qdzc_76 {
    font-size: 0.875rem;
    line-height: 1.8m;
    color: #909090;
  }

  ._desc_1qdzc_76 .bold {
    color: #fff;
  }

  ._title_1qdzc_96 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  ._store-links_1qdzc_103 {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    grid-area: store-links;
  }

  ._stores_1qdzc_111 {
    display: flex;
    gap: 2rem;
  }

  ._stores_1qdzc_111 > * {
    height: 3rem;
    width: auto;
  }

  ._sections_1qdzc_123 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    grid-area: page-links;
  }

  ._section_1qdzc_123 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  ._section-title_1qdzc_137 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  ._section-link_1qdzc_143 {
    font-size: 0.875rem;
    transition: color 0.2s ease-out;
    color: #fff;
  }

  ._section-link_1qdzc_143:hover,
  ._section-link_1qdzc_143._active_1qdzc_149 {
    color: #ffd512;
    text-decoration: none;
  }

  ._socials_1qdzc_156 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  ._socials-title_1qdzc_163 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  ._socials-list_1qdzc_168 {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  ._social-link_1qdzc_174 {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 999rem;
    overflow: hidden;
  }

  ._social-link_1qdzc_174 * {
    width: 100%;
    height: 100%;
  }

  ._bottom-text_1qdzc_259 {
    padding: 1.5rem;
    background-color: #000;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

export default FooterWrapper;
