import React from "react"
import {ResetCSS} from "./global/resetCSS"
import { App } from "./Pages/app/App";
import GithubProvider from "./providers/github-provider/GithubProvider"

function Providers(){
  return(
    <main>
      <GithubProvider>
        <ResetCSS />
        <App/>
      </GithubProvider>
    </main>
    );
};

export default Providers
