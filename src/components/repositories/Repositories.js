import React from "react";
import RepositoryItem from '../repositoryItem/RepositoyItem'
import * as S from './styled'

const Repositories = () => {
  return(
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem 
          fullname="yo mismo"
          linkToRepo="https://github.com/Glen1986"
          name="repo"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem 
          fullname="starred"
          linkToRepo="https://github.com/"
          name="starred"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
