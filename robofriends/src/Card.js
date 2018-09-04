import React from 'react';



const Card = ({name, email, id}) => {
    return  (
        <div className='dib bg-light-green grow tc br3 pa3 mr2 mb2 bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robot image'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    )
}

export default Card; 