import React, { useState } from "react"
import * as S from './styled'
import useGithub from '../../hooks/github-hook/githubHook'

function Header(){
  const [userNameForSearch, setUserNameForSearch] = useState()
  const {getUser} = useGithub()

  const submitGetUser = (e) => {
    e.preventDefault()
    if(!userNameForSearch) return;
   return getUser(userNameForSearch)
  }

  return(
    <form onSubmit={submitGetUser}>
      <S.WrapperHeader>
        <input className="text" type="text" onChange={(e)=> setUserNameForSearch(e.target.value)}/>
        <input className="button" type="submit" value="Buscar"/>
      </S.WrapperHeader>
     </form>
    )
}

export default Header
