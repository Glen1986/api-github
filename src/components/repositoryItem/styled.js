import styled from 'styled-components'

export const Wrapper = styled.div`
height:200px;
width:300px;
border: 2px solid #ccc;
border-radius:6px;
padding 1rem;
margin-left:-8px;
margin-right:8px;
margin-bottom:12px;
align-content:center;
font-weight:300;
font-size:14px;
`;

export const WrapperTitle = styled.h2`
font-weight:bold;
font-size:16px;
margin: 6px 0;
`;

export const WrapperFullName = styled.h2`
font-weight:500;
font-size:14px;
margin: 0;
color:#3c4242;
`;
export const WrapperLink = styled.a`
font-weight:300;
font-size:14px;
margin: 0;
color:#232cd9;
:hover{
  color:#02cc2a;
  font-weight:500;
  cursor:pointer;
}
`;
