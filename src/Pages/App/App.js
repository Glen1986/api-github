import React from 'react'
import Layout from '../../components/layout/Layout';
import Profile from '../../components/profile/Profile';
import {ResetCSS} from '../../global/resetCSS';

export function App() {
  return (
   <main>
     <ResetCSS/>
     <Layout>
       <Profile />
         <div>repos</div>
       <div>starred</div>
    </Layout>
    </main>
  );
}

