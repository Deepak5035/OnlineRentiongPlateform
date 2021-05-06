import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Navigator() {
  const classes = useStyles();

  return (
    <div className={classes.root} align="right">
    <br/>
    <br/>


      <Link to="/catalogue">Catalogue</Link>
      <Link to="/catlogform">Add for Rent</Link>
     
    </div>
  );
}
