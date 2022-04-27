import React from 'react';
export default function MainContent(props) {
    return (
        <div className='main-content'>
            <div className='Card'>
                <div className='Card--img'>
                    <img src={props.imageUrl} alt="logo" />
                </div>

                <div className='Card--text'>
                    <p>{props.location} <a href={props.googleMapsUrl}><em>View on Google Maps</em></a></p>
                    <h5>{props.title}</h5>
                    <p>{props.startDate}-{props.endDate}</p>
                    <p className='desc'>{props.description}</p>
                </div>
            </div>
        </div>
    );
}