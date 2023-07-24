import styled from "@emotion/styled";
import ButtonComp from "@mui/material/Button";

interface Props {
  mt?: string;
  lh?: string;
  width?: string;
  weight?: string;
  fontColor?: string;
  bg?: string;
  border?: string;
  height?: string;
  onClick?: any;
  borderRadius?: string;
  fontSize?: string;
  padding?: string;
  transform?: boolean;
  family?: string;
}
export const PrimaryButton = styled(ButtonComp)<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  text-align: center;
  text-transform: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  height: ${(props) => (props.height ? props.height : "58px")};
  color: ${(props) => (props.fontColor ? props.fontColor : "#0d0d0d")};
  width: ${(props) => (props.width ? props.width : "200px")};
  line-height: ${(props) => (props.lh ? props.lh : "auto")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "6px"};
  border: ${(props) => (props.border ? props.border : "none")};
  transform: ${(props) => props.transform && "skew(-20deg)"};
  background: ${(props) => (props.bg ? props.bg : "#DB5C4D")};
  font-family: ${(props) => props.family && props.family};
  &:hover {
    background: ${(props) =>
      (props.bg ? props.bg : "RGB(219, 92, 77,0.7)") + " !important"};
  }
`;
