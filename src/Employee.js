import React from 'react'

function Employee(props) {
  return (
    <div>{props.name}{props.age}</div>
  )
}

export default Employee