import React from 'react';
import CardList from './CardList';
// import {names} from "./names";

function Card({names}) {
    return (
        <CardList names={names} />
    )
}
export default Card;
