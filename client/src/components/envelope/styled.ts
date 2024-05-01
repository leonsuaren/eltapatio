import styled from "styled-components";

export const EnvelopeStyled = styled.div`
  @media (min-width: 668px) {
    position: relative;
    margin: 50px auto 0;
    width: 98px;
    /* height: 66px; */
    background: #b51c1a;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 1px #b51c1a inset;
    ::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 0 solid transparent;
      border-width: 33px 49px;
      border-bottom-color: #b51c1a;
      top: -100%;
      left: 0px;
    }
    ::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 0 solid transparent;
      border-width: 33px 49px;
      border-right-color: #ce2121;
      border-left-color: #a51f1f;
      border-bottom-color: #a51f1f;
      top: 0;
      border-radius: 0 0 10px 10px;
      transform: rotate(360deg);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const PaperStyled = styled.div`
  @media (min-width: 668px) {
    background: #fff;
    width: 87px;
    height: 66px;
    margin: 0 auto;
    border-radius: 10px;
    position: absolute;
    left: 6px;
    top: -33px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    ::before {
      content: "";
      position: absolute;
      left: 12px;
      background: #cccccc;
      height: 4px;
      border-radius: 10px;
      top: 14px;
      width: 31px;
    }
    ::after {
      content: "";
      position: absolute;
      left: 12px;
      background: #cccccc;
      height: 4px;
      border-radius: 10px;
      right: 12px;
      top: 28px;
      box-shadow: 0 8px 0 #cccccc, 0 16px 0 #cccccc, 0 24px 0 #cccccc,
        0 40px 0 #cccccc;
    }
  }
`;
