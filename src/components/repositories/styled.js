import styled from 'styled-components'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';


export const WrapperTabs = styled(Tabs)`
font-size:16px;
width:50%;
`;

export const WrapperTabList = styled(TabList)`
list-style-type:none;
padding:4px;
display:flex;
margin:0;
`;

// WrapperTabList.tabsRole = 'tablist';

export const WrapperTab = styled(Tab)`
border-radius: 16px;
border:1px solid #ccc;
padding:6px;
user-select: none;
box-shadow:0 0 0 4px #ccc;
cursor:pointer;
margin-right:1em;
&:focus{
outline: none;
}
  &:hover{
    box-shadow:0 0 1em black;
  }
  &.is-selected{
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom:1px solid white;

  }
`;

// WrapperTabList.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
display:none;
min-height:40vh;
padding:8px;
margin-top:-5px;
&.is-selected{
  display: block;
}
`;

// WrapperTabList.tabsRole = "TabPanel";
