import React from 'react';
import styled from 'styled-components';
import SearchStyles from '../styles/Search';
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
  return <div className="item-towns">{renderedTowns}</div>;
};

const SearchItemHalfField = props => {
  return (
    <div className="item-half-field">
      <FontAwesomeIcon icon={props.icon} />
      &nbsp;&nbsp;&nbsp;{props.children}
    </div>
  );
};

const Search = () => {
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
        Tbilisi
      </SearchItemField>
      <SearchItemField icon={faMapMarkerAlt}>To</SearchItemField>
      <SearchItemTowns towns={['Munich', 'Amsterdam']} />
      <SearchItemHalfField icon={faCalendarAlt}>Departing</SearchItemHalfField>
      <SearchItemHalfField icon={faCalendarAlt}>Returning</SearchItemHalfField>
      <SearchItemHalfField icon={faUsers}>Adults</SearchItemHalfField>
      <SearchItemHalfField icon={faPlus}>Economy</SearchItemHalfField>
      <div className="item-add-hotel">Add a Hotel</div>
      <div className="item-search-flights">Search Flights</div>
    </SearchStyles>
  );
};

export default Search;
