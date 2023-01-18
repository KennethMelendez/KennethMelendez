import { Grid } from "@mui/material";

export default function AboutMe() {
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
        <p>I’m a Developer with a passion for technology 🤗.</p>
        <p>
          I've helped built full-stack web applications in Java, .NET, as well
          as Python on the backend with React and Angular on the frontend.
        </p>
        <p>ଘ(੭ ᐛ )━☆ﾟ.*･｡ﾟ</p>
      </Grid>
    </Grid>
  );
}
