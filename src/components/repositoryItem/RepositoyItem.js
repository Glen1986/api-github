import React from "react"
import * as S from './styled'

function RepositoyItem({name, linkToRepo, fullname}){
  return(
    <S.Wrapper>
      <h2>fullName:</h2>
      <h4>{fullname}</h4>
      <br/>
      <a 
        href={linkToRepo} target="blank"
      >{name}</a>
    </S.Wrapper>
  )
}

export default RepositoyItem
