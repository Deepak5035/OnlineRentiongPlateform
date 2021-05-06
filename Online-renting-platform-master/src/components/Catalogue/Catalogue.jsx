import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer";

import Typography from "@material-ui/core/Typography";
import CardCatlog from "../CardCatlog/CardCatlog.jsx";

import CatalogueData from "../../data/catalogue.json";


import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import CatlogForm from "./CatlogForm"


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Catalogue() {
  const [catalogues, setCatalogues] = useState(CatalogueData.catalogue);
  const [brand, setBrand] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const classes = useStyles();
  let brands = [];
  CatalogueData.catalogue.forEach((c) => {
    if (brands.indexOf(c.brand) === -1) {
      brands.push(c.brand);
    }
  });
  const handleChange = (event) => {
    const value = event.value;
    setBrand(value);
    if (value) {
      setCatalogues(
        CatalogueData.catalogue.filter((catalogue) => catalogue.brand === value)
      );
    }
  };

  const addToCart = (item) => {
    if(!cartItems.find(ci=>ci.id==item.id))
    setCartItems([...cartItems, item]);
  };
  return (
    <div>
      <Typography gutterBottom variant="h4" component="h5">
        Online Renting Platform
      </Typography>

      <GridContainer>
        <GridItem xs={12} sm={9} md={9}>
          <GridContainer>
            {catalogues.map((catalogue) => (
              <GridItem xs={12} sm={6} md={3}>
                <div style={{ padding: "10px" }}>
                  <CardCatlog catalogue={catalogue} handleClick={addToCart} />
                </div>
              </GridItem>
            ))}
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={9} md={3}>
          {cartItems.length > 0 ? (
            <>
              <Typography gutterBottom variant="h4" component="h5">
                Cart Items{" "}
              </Typography>

              {cartItems.map((ci) => (
                <Typography gutterBottom variant="h6" component="h5">
                  {ci.name}{" "}
                </Typography>
              ))}
              <CatlogForm/>
                Checkout
           
            </>
          ) : null}
        </GridItem>
      </GridContainer>
    </div>
  );
}
