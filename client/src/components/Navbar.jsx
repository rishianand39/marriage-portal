import styled from "styled-components";

const Wrapper=styled.div`
  width: 100%;
  height: 80px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Box=styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const Navbar = () => {

  return (
    <Wrapper>
      <Box>
        <h2>Marriage Portal</h2>
        <select>
          <option value="eng">English</option>
          <option value="hin">Hindi</option>
        </select>
      </Box>
    </Wrapper>
  )
}

export default Navbar