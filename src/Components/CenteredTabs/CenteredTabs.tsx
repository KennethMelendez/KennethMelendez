import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import HomePage from "../HomePage/HomePage";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";

export default function CenteredTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" value="1" />
          <Tab label="About Me" value="2" />
          <Tab label="Contact" value="3" />
        </Tabs>
        <TabPanel value="1">
          <HomePage />
        </TabPanel>
        <TabPanel value="2">
          <AboutMe />
        </TabPanel>
        <TabPanel value="3">
          <Contact />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
