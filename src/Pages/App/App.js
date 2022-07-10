import React from 'react'
import Layout from '../../components/layout/Layout';
import Profile from '../../components/profile/Profile';
import Repositories from '../../components/repositories/Repositories';
import {ResetCSS} from '../../global/resetCSS';

export function App() {
  return (
   <main>
     <ResetCSS/>
     <Layout>
       <Profile />
       <Repositories/>
    </Layout>
    </main>
  );
}

