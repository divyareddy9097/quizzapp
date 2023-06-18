import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [isLoggedIn13, setIsLoggedIn13] = useState(false);
  const navigate13 = useNavigate();

  const handleLogin13 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn13(true);

    // Navigate to the desired route
    navigate13("/addques"); // Example: Navigate to the Admin page after login
  };

  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const { question, option1, option2, option3, option4, answer } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8080/adduser", userData);
    setUserData({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    });
    navigate("/addques");
  };

  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="question"
              name="question"
              value={question}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="option1"
              name="option1"
              value={option1}
              onChange={handleData}
            />
            <TextField
              label="option2"
              name="option2"
              value={option2}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="option3"
              name="option3"
              value={option3}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="option4"
              name="option4"
              value={option4}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="answer"
              name="answer"
              value={answer}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained" onClick={handleLogin13}>
                Add Question
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Content;
