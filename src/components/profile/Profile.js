import React from "react"
import * as S from "./styled"

function Profile(){
  return(
    <S.Wrapper>
      <S.WrapperImage 
        src="https://avatars.githubusercontent.com/u/65117375?v=4" 
        alt="foto"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Glen Escobar</h1>
          <S.WrapperUsername>
            <h3>userName:</h3>
            <a 
              href="https://github.com/Glen1986" 
              target="blank"
            >Glen1986</a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>6</span>
          </div>
          <div>
            <h4>starred</h4>
            <span>6</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>6</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper> 
  )
}

export default Profile
