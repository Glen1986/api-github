import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
// text-align:center;
  align-items:flex-start;
`;

export const WrapperInfoUser = styled.div`
  display:flex;
// text-align:center;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-between;
  height:200px;
  margin:16px;
h1{
  font-size:28px;
  font-weight: bold;
}
h3{
  font-size:22px;
  font-weight: 500;
}
h4{
  font-size:12px;
  font-weight: bold;
}
`;

export const WrapperStatusCount = styled.div`
  display:flex;
  align-items:center;
div{
  margin:8px;
  text-align:center;
}
h4{
  margin-bottom:2rem;
}
`;

export const WrapperUsername = styled.div`
  display:flex;
  // text-align:center;
  align-items:center;
  justify-content:space-between;
  margin: 0.6rem 0 0 0.5rem;
  font-weight:400;
a{
  text-decoration:none;
  color: black;
  border:none;
  margin-left:8px;
}
`;
export const WrapperImage = styled.img`
  border-radius:50%;
  width: 200px;
  margin:8px;

// WrapperTabList.tabsRole = 'tablist';
`;
