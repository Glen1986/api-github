import  {useContext} from "react"
import { GithubContext } from '../../providers/github-provider/GithubProvider'

export default function useGithub(){

  const {githubState, getUser, getUserRepos, getUserStarred } = useContext(GithubContext)
  return(
    {githubState, getUser, getUserRepos, getUserStarred }
    )
}

// export default useGithub
