import styled from "styled-components";
import VerticalContainer from "../components/VerticalContainer";
import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  color: black;

  .left {
    width: 10%;
  }
  .center {
    flex: 3;
  }
  .right {
    flex: 3;
  }
`;

const Index = () => (
  <>
    <Container className="container">
      <div className="left">
        <VerticalContainer>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>
            Travel. &nbsp;&nbsp;
            <FontAwesomeIcon icon={faCompass} />
          </p>
        </VerticalContainer>
      </div>
      <div className="center">
        <Search />
      </div>
      <div className="right">Right</div>
    </Container>
    <style jsx global>
      {`
        body {
          margin: 0;
          @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC");
          font-family: "Noto Sans TC", sans-serif;
        }
      `}
    </style>
  </>
);

export default Index;
