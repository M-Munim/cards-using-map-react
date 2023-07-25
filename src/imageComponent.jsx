import React from 'react'

function callfun(val) {
    return <>
      <div className="card">
        <img src={val.link} alt=" fail" />
        <h3> Game Name : {val.name} </h3>
        <h3> Release Date: {val.release}</h3>
        <p>{val.desc}</p>
      </div>
    </>
  }

export default callfun;