import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 85%;
  margin: 20px auto 100px;
`;
const Form = styled.form`
  width: 60%;
  margin: auto;
`;
const Input = styled.input`
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 1.1rem;
`;
const Button = styled.button`
  width: 30%;
  border: none;
  height: 50px;
  font-weight: bold;
  background-color: #2879fe;
  color: white;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;
const Box = styled.div`
  width: 60%;
  margin: 50px auto 0;
`;

const Application = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [data, setData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await axios.get(
        `http://localhost:8080/?email=${email}`
      );
      
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.response.data)
    }
  };
  console.log(data)
  return (
    <Wrapper>
      <Form>
        <Input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        <Button disabled={loading} onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Form>
      {data && (
        <Box>
          <h2 style={{ textAlign: "center" }}>Your application</h2>

          <div>
            <br />
            <span style={{ fontWeight: "bold" }}>Your Name: </span>
            <span>
              {`${data.first_name} ${data.last_name}`}
            </span>
            <br />
            <span style={{ fontWeight: "bold" }}>Approved: </span>
            <span>
              {data.isApproved ? "Your application is approved" : "Not yet"}
            </span>
            <br />
            <span style={{ fontWeight: "bold" }}>Rejected: </span>
            <span>
              {data.isRejected ? "Your application is rejected" : "Not yet"}
            </span>
            <br />
            <span style={{ fontWeight: "bold" }}>Message: </span>
            <span>
              {data.message
                ? data.message
                : "Please wait for 24 hr since you have submitted the application. We will cross verify that"}
            </span>
          </div>
        </Box>
      )}
    </Wrapper>
  );
};

export default Application;
