import React from "react"
import * as S from './styled'

function RepositoyItem({name, linkToRepo, fullname}){
  return(
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Full Name:</S.WrapperFullName>
      <br/>
        <S.WrapperLink 
          href={linkToRepo} target="blank"
        >{fullname}</S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoyItem
