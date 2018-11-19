import styled from 'styled-components';

const searchBackgroundColor = '#424a8b';
const searchColor = 'white';
const inactiveTabColor = '#545c9b';
const inactiveFieldColor = '#A0A9CB';
const roundTripButtonColor = '#49BCF7';
const width = '430px';
const height = '500px';

const SearchStyles = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 83px 80px 50px auto;
  min-width: ${width};
  max-width: ${width};
  min-height: ${height};
  max-height: ${height};

  background-color: ${searchBackgroundColor};
  color: ${searchColor};

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  padding-bottom: 30px;

  div {
    text-align: center;
    align-self: center;
  }

  .item-tab {
    place-self: center stretch;
    grid-row: 1;
    grid-column: span 2;
    background-color: ${inactiveTabColor};
    place-self: stretch;
    &.active {
      background-color: ${searchBackgroundColor};
    }
  }

  .item-roundtrip {
    grid-column: span 2;
    grid-row: 2;
    font-size: 0.8em;
    align-self: center;
    padding: 0px 20px 0px 20px;
    height: 50%;
    text-align: left;

    &.active {
      justify-self: center;
      align-self: center;
      background-color: ${roundTripButtonColor};
      border-radius: 20px;
    }
  }

  .item-field {
    color: ${inactiveFieldColor};
    text-align: left;
    border-bottom: 1px solid ${inactiveTabColor};
    margin: 0px 30px;
    grid-column: 1 / -1;
    grid-row: 4;

    &.active {
      text-align: left;
      border-bottom: 1px solid ${inactiveTabColor};
      color: white;
      margin: 0px 30px;
      grid-column: 1 / -1;
      grid-row: 3;
    }
  }

  .item-towns {
    grid-column: 1 / -1;
    grid-row: 5;
    ul {
      display: flex;
      li {
        background-color: ${inactiveTabColor};
        list-style-type: none;
        padding: 15px;
        margin-right: 10px;
        border-radius: 30px;
        font-weight: bold;
        font-size: 0.6em;
      }
    }
  }

  .item-half-field {
    color: ${inactiveFieldColor};
    text-align: left;
    border-bottom: 1px solid ${inactiveTabColor};
    margin: 0px 30px;
    grid-column: span 3;
  }

  .item-add-hotel {
    grid-column: 1 / span 2;
    grid-row: 8;
  }

  .item-search-flights {
    background-color: #f07253;
    padding: 20px 0px;
    border-radius: 30px;
    grid-column: 4 / span 2;
    grid-row: 8;
  }
`;

export default SearchStyles;
