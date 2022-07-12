import React from 'react'
import Layout from '../../components/layout/Layout';
import NoSearch from '../../components/no-search/NoSearch';
import Profile from '../../components/profile/Profile';
import Repositories from '../../components/repositories/Repositories';
import useGithub from '../../hooks/github-hook/githubHook'

export function App() {

  const { githubState } = useGithub()
  return (
    <main>
      <Layout>
        {githubState.hasUser ? (
          <>
            { !githubState.loading ? (
              <>
                <Profile />
                <Repositories/>
              </>
            ) : (
              <div>Loading</div>
            )}
          </>
        ):(
          <NoSearch />
        )}
      </Layout>
    </main>
  );
}

