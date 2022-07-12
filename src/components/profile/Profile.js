import React from "react"
import useGithub from "../../hooks/github-hook/githubHook"
import * as S from "./styled"

function Profile(){
  const { githubState } = useGithub();
  console.log({githubState});
  return(
    <>
      <S.Wrapper>
        <S.WrapperImage 
          src={githubState.user.avatar_url} 
          alt="foto"
        />
        <S.WrapperInfoUser>
          <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUsername>
              <h3>userName:</h3>
              <a 
                href="https://github.com/Glen1986" 
                target="blank"
              >{githubState.user.name}</a>
            </S.WrapperUsername>
            <S.WrapperUsername>
              <h3>Company:</h3>
              <span>{githubState.user.company}</span>
            </S.WrapperUsername>
            <S.WrapperUsername>
              <h3>Name:</h3>
              <p>{githubState.user.login}</p>
            </S.WrapperUsername>
          </div>
          <S.WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span>{githubState.user.followers}</span>
            </div>
            <div>
              <h4>Followig</h4>
              <span>{githubState.user.following}</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span>{githubState.user.public_gists}</span>
            </div><div>
              <h4>Repos</h4>
              <span>{githubState.user.public_repos}</span>
            </div>
          </S.WrapperStatusCount>
        </S.WrapperInfoUser>
      </S.Wrapper> 
    </>
  )
}

export default Profile
