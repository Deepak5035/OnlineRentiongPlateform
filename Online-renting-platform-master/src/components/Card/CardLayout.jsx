import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./CardStyle"


const useStyles = makeStyles(styles);

export default function CardLayout(props) {
  const classes = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;

  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  console.log(cardClasses,rest);
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}


