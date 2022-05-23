import React, { useState } from 'react'
import axios from 'axios'

function Json() {
    const [data, setData] = useState([])
    return (


        <div>
            <button onClick={() => {
                axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
                    console.log(res.data);
                    setData(res.data)
                })
            }}></button>
            {
                data.map((obj, index) =>
                    <div>
                        <h4>{index}</h4>
                        <h1>  {obj.title}</h1>
                    </div>

                )
            }

        </div>
    )
}

export default Json