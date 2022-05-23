import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageURL } from '../../constant';

import './feature.css'
export default function Featured() {


    const [trend, setTrend] = useState([])
    const index = Math.floor(Math.random() * trend.length);
    useEffect(() => {
        axios.get(`/discover/movie?api_key=${API_KEY}&with_original_language=ml`).then((response) => {
            console.log(response.data.results);
            setTrend(response.data.results)
        })
    }, [])


    console.log(index);

    return (
        <div>
            <div className='banner'
                style={{ backgroundImage: `url(${trend[index] ? imageURL + trend[index].backdrop_path : ''})` }}  >
                <div className='title'>
                    {trend[index] ? trend[index].title : ''}
                </div>
                <div className='overview'>
                    {trend[index] ? trend[index].overview : ''}
                </div>
            <div  className="fade_bottom"></div>
            </div>
        </div>
    )
}
