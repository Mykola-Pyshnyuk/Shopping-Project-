import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #272a2a;
`;

const FooterText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>Copyright &copy; 2025. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
