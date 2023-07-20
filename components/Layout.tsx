import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
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
  &:hover {
    background: ${(props) => props.hoverBg && props.hoverBg};
  }
`;

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
      <Row className="text-center">
        <Col md={6}>Hello</Col>
        <Col md={6}>Hello</Col>
      </Row>
    </>
  );
};
export { Wrapper, useMediaQuery, MarqueeSlider, SplitScreen, Row, Col };
