import React from 'react';

const CardList = ({names}) => {
    return (
        <div className='d-flex flex-wrap gap-4 justify-content-evenly'>
            {names.map((item) => {
                return (
                    <div className='border p-4' key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.username}</h2>
                        <p>{item.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default CardList;
