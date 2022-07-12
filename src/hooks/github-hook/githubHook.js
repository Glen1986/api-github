import  {useContext} from "react"
import { GithubContext } from '../../providers/github-provider/GithubProvider'

function useGithub(){

  const {githubState, getUser, hasUser } = useContext(GithubContext)
  return(
    {githubState, getUser, hasUser }
    )
}

export default useGithub
