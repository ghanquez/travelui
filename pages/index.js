import styled from 'styled-components';
import VerticalContainer from '../components/VerticalContainer';
import Search from '../components/Search';

const Container = styled.div`
  height: 100vh;
  display: grid;
  background-color: white;
  color: black;
  grid-template-areas: 'left center right';
  grid-template-columns: 1fr 2fr 2fr;

  div {
    height: 100%;
  }

  .item1 {
    grid-area: left;
  }
  .item2 {
    grid-area: center;
  }
  .item3 {
    grid-area: right;
  }
`;

const Index = () => (
  <div>
    <Container>
      <div className="left">
        <VerticalContainer>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
          <p>Travel.</p>
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
          @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
          font-family: 'Noto Sans TC', sans-serif;
        }
      `}
    </style>
  </div>
);

export default Index;
