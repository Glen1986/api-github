import styled from 'styled-components'

export const WrapperHeader = styled.section`
height:3rem;
margin:2rem;
  .text{
    background:#eee;
    width:80vw;
    height:100%;
    border-radius:8px 0 0 8px;
    padding:8px;
  }
  .button{
    width:10vw;
    background:#2057fa;
    color:black;
    color:#ababab;
    text-align:center;
    height:100%;
    border-radius:0 8px 8px 0;
    margin-left:4px;
    :hover{
      background:#29b0ff;
      font-weight:bold;
      color:white;
    }
  }
`;
