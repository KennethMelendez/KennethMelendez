import { Grid } from "@mui/material";
import kenny from "../../Images/kenny.gif";

export default function HomePage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "70vh" , fontSize: "1.9em"}}
    >
      <Grid item xs={3}>
        <h1>
          Welcome! <img src={kenny} alt="" />
        </h1>

        <span>My names Kenny ⤴</span>
      </Grid>
    </Grid>
  );
}
