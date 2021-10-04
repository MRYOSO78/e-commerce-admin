/* eslint-disable no-dupe-keys */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "auto",
      height: 50,
    },

    appbar: {
      color: "primary",
    },
    toolbar: theme.mixins.toolbar,
    pages: {
      width: 130,
      fontSize: 17,
      color: "#F4F4F4",
    },
    toolbar: {
      minHeight: 20,
      justifyContent: "space-between",
    },
    root: {
      display: "block",
    },
    icon: {
      fontSize: 40,
      marginLeft: "auto",
    },
    pagesDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    dropDown: {
      fontSize: 25,
      paddingLeft: 5,
    },
    titleDiv: {},
  };
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className="logoContainer">
            <img src="nuLogo.png" alt="logo" className="logoNU" />
            <div
              className="titleDiv"
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <h3 className="logoTitle">NU INNOVATION TECH HUB</h3>
              <p className="logoTitle_">
                Center for Innovation & Entrepreneurship
              </p>
            </div>
          </div>
          <div className={classes.pagesDiv}>
            <Button size="small" variant="text" className={classes.pages}>
              PRODUCT
            </Button>
            <Button size="small" variant="text" className={classes.pages}>
              INNOVATORS
            </Button>
            <Button size="small" variant="text" className={classes.pages}>
              INNOVATIONS
            </Button>
            <Button size="small" variant="text" className={classes.pages}>
              EXHIBITS <IoIosArrowDown className={classes.dropDown} />
            </Button>
            <Button size="small" variant="text" className={classes.pages}>
              ABOUT US
            </Button>
            <Button size="small" variant="text" className={classes.pages}>
              CONTACT US
            </Button>
            <TiShoppingCart className={classes.icon} />
          </div>
          {/* <ShoppingCart/> */}
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
