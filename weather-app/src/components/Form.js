import React from 'react';


const Form = ({getWeather}) => {

        return (
            <form onSubmit={getWeather}>
                <input type='text' name='city' placeholder='City name...'/>
                <input type='text' name='country' placeholder='Country name...'/>
                <button>Submit</button>
            </form>
        );
    }


export default Form; 