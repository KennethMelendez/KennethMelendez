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
      lineHeight={0.7}
    >
      <Grid item xs={3}>
        <h1><a href = "mailto: kennethmelendez@protonmail.com.com">✉</a></h1>
      </Grid>
    </Grid>
  );
}