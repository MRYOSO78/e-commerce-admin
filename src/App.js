import Create from "./components/Pages/Innovation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InnovationSecondPage from "./components/Pages/InnovationSecondPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#002d84",
    },
  },
  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Layout />
          <div>
            <Switch>
              <Route exact path="/" component={Create} />
              <Route
                exact
                path="/innovationSpecific"
                component={InnovationSecondPage}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
