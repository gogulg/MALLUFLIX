import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageURL } from '../../constant';
import './RowPost.css'

function RowPost(props ) {

    const [state, setState] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results);
            setState(response.data.results)
        })
    }, [])

    return (
       <div
            className='row'><h1>{props.title}</h1>
            <div
                className='posters'>
                {
                        state.map((obj , index )=>(
                    <img className={props.isSmall ? 'smallPoster' : 'poster'}src={`${imageURL+obj.backdrop_path}`}  key={index}></img>        
                    ))}

            </div>




        </div>
    )
}

export default RowPost