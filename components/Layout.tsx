import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { H3 } from "./Typography";
interface WrapperProps {
  width?: string;
  border?: string;
  borderRadius?: string;
  height?: string;
  fontSize?: string;
  weight?: string;
  bg?: string;
  fontColor?: string;
  hoverBg?: string;
  ms?: string;
  me?: string;
  mt?: string;
  mb?: string;
  ps?: string;
  pe?: string;
  pt?: string;
  pb?: string;
  zIndex?: any;
  position?: string;
  top?: any;
}
const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border: ${(props) => (props.border ? props.border : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  margin-left: ${(props) => (props.ms ? props.ms : "")};
  margin-right: ${(props) => (props.me ? props.me : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  padding-left: ${(props) => (props.ps ? props.ps : "")};
  padding-right: ${(props) => (props.pe ? props.pe : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  z-index: ${(props) => props.zIndex && props.zIndex};
  position: ${(props) => props.position && props.position};
  top: ${(props) => props.top && props.top};
  &:hover {
    background: ${(props) => props.hoverBg && props.hoverBg};
  }
`;
const Container = ({ children }: any) => {
  return (
    <>
      <Wrapper ps="3.29%" pe="3.4%" pt="30px" pb="1%">
        {children}
      </Wrapper>
    </>
  );
};
const MarqueeSlider = ({ children }: any) => {
  return (
    <>
      <Marquee
        play={true}
        pauseOnHover={true}
        className={`bg-black `}
        gradient={false}
      >
        {children}
      </Marquee>
    </>
  );
};
const SplitScreen = () => {
  return (
    <>
      <Row className="text-center align-items-center">
        <Col md={6}>
          <H3>
            IN GAME XP TO
            <br /> REAL MONEY
          </H3>
        </Col>
        <Col md={6}>
          <Wrapper className="d-flex flex-column align-items-center justify-content-center">
            <Wrapper>
              You must reach the Daily PLEX Rewards Target. Win or Lose, PLEX is
              earned.
            </Wrapper>
            <Wrapper>Pakistan</Wrapper>
            <Wrapper>Pakistan</Wrapper>
          </Wrapper>
        </Col>
      </Row>
    </>
  );
};
export {
  Wrapper,
  useMediaQuery,
  MarqueeSlider,
  SplitScreen,
  Row,
  Col,
  Container,
};
