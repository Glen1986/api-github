import React from "react";
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
      <S.WrapperTabPanel>panel repositorios</S.WrapperTabPanel>
      <S.WrapperTabPanel>panel starred</S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
