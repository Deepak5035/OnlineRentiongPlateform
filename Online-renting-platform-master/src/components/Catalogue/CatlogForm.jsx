import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




export default function CatlogForm() {
  const classes = useStyles();

  const [producName,setProductName] = useState();
  const [price,setPrice] = useState();
  const [modal,setModel] = useState();
  const [postDate,setPostDate] = useState();
  const [imageUrl,setImageUrl] = useState();


  const handleChange = event =>{
    if(event.target.name === 'productName'){
      setProductName(event.target.value)
    }else if(event.target.name === 'price'){
      setPrice(event.target.value)
    }
    else if(event.target.name === 'model'){
        setModel(event.target.value)
      }else if(event.target.name === 'post'){
        setPostDate(event.target.value)
      }else if(event.target.name === 'imageUrl'){
        setImageUrl(event.target.value)
      }
}

const handleLogin = ()=>{
      }
    

  

  return (
    <form>
      <div>
          <h1> Add for Rent </h1>
        <TextField name="productName" label="Required" defaultValue="Product Name"  onChange={handleChange} /><br/>
        <TextField name="price" label="Required" defaultValue="Price"  onChange={handleChange} /><br/>
        <TextField name="Model" label="Required" defaultValue="Model"  onChange={handleChange}/><br/>
        <TextField name="postDate" label="Required" defaultValue="Post Date"  onChange={handleChange}/><br/>
        <TextField name="imageUrl" label="Required" defaultValue="Image URL"  onChange={handleChange} /><br/><br/>
        <Button variant="contained" color="primary" onClick={handleLogin}> Submit Details</Button>
    

        
      </div>
 
    </form>
  );
}
