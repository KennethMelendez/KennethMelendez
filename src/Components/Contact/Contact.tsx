import { Grid } from "@mui/material";

export default function Contact() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "70vh" }}
    >
      <Grid item xs={3} padding={10}>
        <h1>You can reach me at kennethmelendez@protonmail.com 💻</h1>
      </Grid>
    </Grid>
  );
}