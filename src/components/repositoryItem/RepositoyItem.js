import React from "react"

function RepositoyItem({name, linkToRepo, fullname}){
  return(
    <div>
      <h2>{fullname}</h2>
      <br/>
      <a 
        href={linkToRepo} target="blank"
      >{name}</a>
    </div>
  )
}

export default RepositoyItem
