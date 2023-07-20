import styled from "styled-components";
export interface Props {
  color?: string;
  fontSize?: string;
  lHeight?: string;
  weight?: string;
  tt?: string;
  hoverBg?: string;
  ls?: string;
}
const H1 = styled.h1<Props>`
  font-style: normal;
  font-weight: ${(props) => props.weight && props.weight};
  line-height: ${(props) => props.lHeight && props.lHeight};
  font-size: ${(props) => props.fontSize && props.fontSize};
  letter-spacing: ${(props) => props.ls && props.ls};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  margin-bottom: 0px;
`;
const H2 = styled.h2``;
const H3 = styled.h3<Props>`
  font-style: normal;
  font-weight: ${(props) => props.weight && props.weight};
  line-height: ${(props) => props.lHeight && props.lHeight};
  font-size: ${(props) => props.fontSize && props.fontSize};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  letter-spacing: ${(props) => props.ls && props.ls};
  margin-bottom: 0px;
`;

const P = styled.p<Props>`
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "24px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  letter-spacing: ${(props) => props.ls && props.ls};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  margin-bottom: 0px;
`;
export { H1, H2, H3, P };
