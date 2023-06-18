import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Start = () => (
  <Card
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "sm",
      margin: "0 auto",
      //   minHeight: "100vh",
    }}
  >
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> */}
      <p>
        A quiz refers to a short test of knowledge, typically around 10
        questions in length, with question formats often including multiple
        choice, fill in the blanks, true or false and short answer. A quiz is
        much shorter than a traditional test or exam and is rarely impactful on
        a final course grade.
      </p>
      <br />
      <br />
      <h4>Do you want to start quiz , click on start quiz. </h4>
      <br />
      {/* </Typography> */}
      <Button size="small" variant="contained" component={Link} to="/quiz">
        Start Quiz
      </Button>
    </CardContent>
  </Card>
);

export default Start;
