import styled from "styled-components";

const VerticalStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vh;
  text-align: center;
  transform: rotate(-90deg) translate(-50vh, -50vh);
  transform-origin: top;
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }
`;

const VerticalContainer = props => {
  return <VerticalStyles {...props}>{props.children}</VerticalStyles>;
};

export default VerticalContainer;
