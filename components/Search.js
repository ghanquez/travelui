import React from 'react';
import styled from 'styled-components';
import SearchStyles, {
  SearchItemTownsStyle,
  SearchItemHalfFieldStyle,
  SearchItemAddHotelStyle,
  SearchItemSearchFlightsStyle,
} from '../styles/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faHome,
  faCarSide,
  faMapMarkerAlt,
  faMarker,
  faCalendarAlt,
  faUsers,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const SearchItemTab = props => {
  return (
    <div className={`item-tab ${props.active && 'active'}`}>
      <FontAwesomeIcon icon={props.icon} />
      &nbsp;&nbsp;&nbsp;{props.children}
    </div>
  );
};

const SearchItemRoundTrip = props => {
  return (
    <div className={`item-roundtrip ${props.active && 'active'}`}>
      {props.children}
    </div>
  );
};

const SearchItemField = props => {
  return (
    <div className={`item-field ${props.active && 'active'}`}>
      <FontAwesomeIcon icon={props.icon} />
      &nbsp;&nbsp;&nbsp;
      {props.children}
    </div>
  );
};

const SearchItemTowns = ({ towns }) => {
  let renderedTowns;
  if (towns) {
    renderedTowns = (
      <ul>
        {towns.map((town, i) => {
          return <li key={i}>{town}</li>;
        })}
      </ul>
    );
  }
  return <SearchItemTownsStyle>{renderedTowns}</SearchItemTownsStyle>;
};

const SearchItemHalfField = props => {
  return (
    <SearchItemHalfFieldStyle>
      <FontAwesomeIcon icon={props.icon} />
      &nbsp;&nbsp;&nbsp;{props.children}
    </SearchItemHalfFieldStyle>
  );
};

const SearchItemAddHotel = props => {
  return <SearchItemAddHotelStyle>{props.children}</SearchItemAddHotelStyle>;
};

const SearchItemSearchFlights = props => {
  return (
    <SearchItemSearchFlightsStyle>
      {props.children}
    </SearchItemSearchFlightsStyle>
  );
};

const Search = () => {
  //Mocked data
  const data = { departure: 'Tbilisi', towns: ['Munich', 'Amsterdam'] };
  const { departure, towns } = data;

  return (
    <SearchStyles>
      <SearchItemTab icon={faPlane} active>
        Flight
      </SearchItemTab>
      <SearchItemTab icon={faHome}>Hotel</SearchItemTab>
      <SearchItemTab icon={faCarSide}>Rental car</SearchItemTab>
      <SearchItemRoundTrip active>Roundtrip</SearchItemRoundTrip>
      <SearchItemRoundTrip>One way</SearchItemRoundTrip>
      <SearchItemRoundTrip>Multi-City</SearchItemRoundTrip>
      <SearchItemField icon={faMapMarkerAlt} active>
        {departure}
      </SearchItemField>
      <SearchItemField icon={faMapMarkerAlt}>To</SearchItemField>
      <SearchItemTowns towns={towns} />
      <SearchItemHalfField icon={faCalendarAlt}>Departing</SearchItemHalfField>
      <SearchItemHalfField icon={faCalendarAlt}>Returning</SearchItemHalfField>
      <SearchItemHalfField icon={faUsers}>Adults</SearchItemHalfField>
      <SearchItemHalfField icon={faPlus}>Economy</SearchItemHalfField>
      <SearchItemAddHotel>Add a Hotel</SearchItemAddHotel>
      <SearchItemSearchFlights>Search Flights</SearchItemSearchFlights>
    </SearchStyles>
  );
};

export default Search;
