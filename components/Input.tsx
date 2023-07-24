import styled from "styled-components";
interface Props {
  width?: string;
}
const Input = styled.input<Props>`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  width: ${(props) => (props.width ? props.width : "50%")};
  color: white;
  background-color: black;
  border: 1px solid white;
`;
export { Input };
