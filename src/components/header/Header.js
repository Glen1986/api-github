import React from "react"
import * as S from './styled'

function Header(){
  return(
    <S.WrapperHeader>
      <input className="text" type="text" />
      <input className="button" type="submit" value="click"/>
    </S.WrapperHeader>
    )
}

export default Header
