import React, { useState } from 'react';
import data from '../../api/data.json';


const Parks = () => {

    return (
        <div>
            <ul>
            {data.map(park => {
                return (
                    <li>
                       <p><strong>{ park.fullName }</strong></p>
                    </li>
                )
            }
            )
            } 
            </ul>
        </div>
    )
}


export default Parks;