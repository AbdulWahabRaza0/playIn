import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { Image } from "react-bootstrap";
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
  p?: string;
  zIndex?: any;
  ls?: string;
  lHeight?: string;
  position?: string;
  top?: any;
  family?: string;
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
  padding: ${(props) => (props.p ? props.p : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  z-index: ${(props) => props.zIndex && props.zIndex};
  position: ${(props) => props.position && props.position};
  line-height: ${(props) => props.lHeight && props.lHeight};
  background: ${(props) => props.bg && props.bg};
  font-family: ${(props) =>
    props.family ? props.family : "'Nekst','sans-serif'"};
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
const TypeWriterComp = ({ text }: any) => {
  return (
    <>
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};
const MarqueeSlider = ({ children }: any) => {
  return (
    <>
      <Marquee
        style={{ overflowY: "hidden" }}
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

const SimpleCard = ({ imgSrc, text }: any) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  return (
    <>
      <Wrapper
        width="80%"
        height="auto"
        border="2px solid gray"
        pt="20px"
        pb="20px"
        ps="20px"
        pe="20px"
        className={`d-flex flex-row align-items-center ${
          isResponsive
            ? "justify-content-center flex-wrap"
            : "justify-content-betweem"
        }`}
      >
        <Wrapper ms="5%" me="3%">
          <Image src={imgSrc} alt="header1" width="25px" height="25px" />
        </Wrapper>
        <Wrapper
          ms="5%"
          me="5%"
          mt={isResponsive ? "" : ""}
          className={isResponsive ? "text-center" : "text-start"}
          fontSize={isResponsive ? "21px" : "24px"}
          weight="200"
        >
          {text}
        </Wrapper>
      </Wrapper>
    </>
  );
};
export {
  Wrapper,
  useMediaQuery,
  MarqueeSlider,
  SimpleCard,
  Row,
  Col,
  Container,
  TypeWriterComp,
  Image,
};
