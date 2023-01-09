import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: 85%;
  margin: 0px auto 100px;
`;
const Box = styled.div`
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 1.1rem;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: #2879fe;
  color: white;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;
const Error = styled.span`
  color: red;
  margin: 8px;
`;
const Text = styled.div`
  margin: 5px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;
const ImgHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
`;
const Home = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    picture:null,
    certificate:null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

// handle form field text
  const handleInput = (e) => {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  //handle form field file
const handleFile=(e)=>{
  setData(pre=>{
    return{
      ...pre,
      [e.target.name]:e.target.files[0]
    }
  })
}
  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for(let key in data){
      formData.append(key,data[key])
    }
    try {
      let res= await axios.post("http://localhost:8080/registration", formData);
      alert(res.data)
      window.location.reload()
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Wrapper>
      <h1>Fill the Application</h1>
      <Box>
        <ImgHolder>
          <Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jHWqdlzhWF9BkKJeGpw2nHlImVzgnL2blQMl77LPpcbNbmAPdLKo2wXWXrXrWx4Tnio&usqp=CAU"
            alt="your picture"
          />
        </ImgHolder>
      </Box>
      <Form>
        <Input
          onChange={handleInput}
          name="first_name"
          placeholder="First Name"
          type="text"
          autoFocus
        />
        <Input
          onChange={handleInput}
          name="last_name"
          placeholder="Last Name"
          type="text"
        />
        <Input
          onChange={handleInput}
          name="email"
          placeholder="email"
          type="email"
        />
        <Input
          onChange={handleInput}
          name="dob"
          placeholder="DOB (date of birth)"
          type="date"
        />
        <Box>
          Choose your picture
          <Input onChange={handleFile} name="picture" type="file" />
        </Box>
        <Box>
          Choose a certificate ( aadhar, pan )
          <Input onChange={handleFile} name="certificate" type="file" />
        </Box>
        <Agreement>
          By submiting the application, I consent to the processing of my
          personal data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button disabled={loading} onClick={handleSubmit}>
          SUBMIT
        </Button>

        <Link to="/application">
          <Text>ALREADY Filled the application?</Text>
        </Link>
        {error && <Error>{"something went wrong"}</Error>}
      </Form>
    </Wrapper>
  );
};

export default Home;
