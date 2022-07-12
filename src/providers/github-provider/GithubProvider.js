import React, { createContext, useState, useCallback } from "react"
import api from '../../services/api'

export const GithubContext = createContext({
  user:{},
  repositories:[],
  starred:[],
})

function GithubProvider({children}){
  const [githubState, setGithubState] = useState({
    loading:false,
    // hasUser: false,
    user:{
      avatar_url:undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog:undefined,
      company:undefined,
      location:undefined,
      followers:0,
      following:0,
      public_gists:0,
      public_repos:0,
    },
    repositories:[],
    starred:[]
  })
  const getUser = (username) =>{
         setGithubState( prevState => ({
          ...prevState, 
           loading: !prevState.loading,
           // hasUser:true,
        }));    
    api.get(`users/${username}`).then(({data})=>{
     // console.log({data});
        setGithubState( prevState => ({
          ...prevState, 
          loading: false,
            user:{
                avatar_url: data.avatar_url,
                login: data.login,
                name:  data.name,
                html_url: data.html_url,
                blog:data.blog,
                company:data.company,
                location:data.location,
                followers:data.followers,
                following:data.following,
                public_gists:data.public_gists,
                public_repos:data.public_repos,
            },
        }));
    })
      // .finally(()=>{
      // setGithubState((prevState) => ({
        // ...prevState,
        // loading:prevState.loading
//
      // }));
    // });
  };

  // const getUserRepos = () =>{
    // api.get(`users/${githubState.user.login}/repos`).then(({data})=>{
//
        // setGithubState( prevState => ({
          // ...prevState,
            // repositories:data,
        // }));
    // });
  // };
  const contexValue = {
    githubState,
    getUser:useCallback((username)=> getUser(username),[] ),
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    // getUserReops: useCallback(()=> getUserRepos(),[]),
  }
  return(
    <GithubContext.Provider value={ contexValue }>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
