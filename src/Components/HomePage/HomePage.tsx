import { Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "70vh" }}
    >
      <Grid item xs={3}>
        <h1>Hello, pleasure to meet you!</h1>
        <h1>My name is Kenny 🥳</h1>
      </Grid>
    </Grid>
  );
}
