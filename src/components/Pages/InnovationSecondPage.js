import React from "react";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AppBar, Container, Toolbar, Tab } from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

const useStyles = makeStyles((theme) => {
  return {
    marginRL: {
      marginLeft: 50,
      marginRight: 10,
      marginBottom: 30,
    },
    toolbar: {
      display: "flex",
      minheight: "100vh",
      flexdirection: "column",
    },
    root: {
      display: "block",
    },
    button: {
      borderRadius: 30,
    },
  };
});

var cardStyle = {
  display: "block",
  width: "auto",
  transitionDuration: "0.3s",
  height: "35vw",
};

var cardHeight = {};

export default function InnovationSecondPage() {
  const classes = useStyles();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid
        container
        alignItems="Stretch"
        spacing={2}
        className={classes.marginRL}
      >
        <Grid item component={Card} xs={6} md={4} elevation={10}>
          <CardMedia
            style={cardStyle}
            component="img"
            height="194"
            image="miniscope.jpg"
          />
        </Grid>
        <Grid item component={Card} xs={7} elevation={10} display="flex">
          <CardContent style={cardStyle}>
            <Typography variant="h5" color="primary">
              Innovations/
            </Typography>
            <Typography variant="h3" display="block">
              TITLE
            </Typography>
            <Typography variant="h5">Innovator/s: SAMP SAMP/</Typography>
            <Typography variant="subtitle">
              <strong>Status:</strong> Samp
            </Typography>
            <TabContext value={value}>
              <CardActions>
                <TabList
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: { background: "#30408d" },
                  }}
                >
                  <Tab label="Description" value="1" />
                  <Tab label="Stories" value="2" />
                </TabList>
              </CardActions>
              <TabPanel value="1">
                <Typography display="flex" style={{ height: 400 }}>
                  Description: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum", "Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum", "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do
                </Typography>
              </TabPanel>

              <TabPanel value="2">
                <Typography display="flex" style={{ height: 400 }}>
                  Stories: "Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum", "Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum", "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do
                </Typography>
              </TabPanel>
            </TabContext>
            <div
              style={{ justifyContent: "end", display: "flex", columnGap: 20 }}
            >
              <Button variant="contained" color="default" size="large" href="/">
                Back
              </Button>
              <Button variant="contained" color="primary" size="large">
                Invest
              </Button>
            </div>
          </CardContent>
        </Grid>
      </Grid>

      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2019 Gistia
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
