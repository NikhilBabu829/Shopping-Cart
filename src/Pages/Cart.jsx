import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import {ContextProvider} from '../Context/ContextProvider';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardMedia, Card, Button } from "@mui/material";
import Divider from '@mui/material/Divider';

export default function Cart(){
    const {removeItemsIntoCart, itemsInCart} = useContext(ContextProvider)
    const [totalAmount, setTotalAmount] = useState(0);

    function handleRemoveEvent(data){
        const {id} = data;
        const newCartItems = itemsInCart.filter((item) => item.id !== id)
        removeItemsIntoCart(newCartItems);
    }

    function getTotalAmount(){
        
    }

    return (
        <>
            <NavBar />
            <Container maxWidth="md" sx={{marginTop : "1%"}}>
                <Typography variant="h3" color="palette.text.primary">Checkout</Typography>
                <Divider light sx={{marginBottom : "1%"}}/>
                <Grid container spacing={2}>
                  <Grid item lg={5}>
                    {
                        itemsInCart.map((item)=>{
                            return (
                                <Card key={item.id} sx={{marginBottom : "2%"}}>
                                    <Grid container spacing={1}>
                                    <Grid item lg={4}>
                                        <CardMedia 
                                            component="img"
                                            image={item.images[0]}
                                            alt="Product Image"
                                            sx={{objectFit : "fill", maxHeight : "250px", borderRadius : "5px"}} 
                                        />
                                    </Grid>
                                    <Grid item lg={8} sx={{}}>      
                                        <Typography variant="body1" color="palette.text.primary">{item.title}</Typography>
                                        <Typography variant="body2" color="palette.text.secondary">{item.price} $</Typography>
                                        <Button variant="text" color="error" onClick={()=>{handleRemoveEvent(item)}}>
                                            remove
                                        </Button>
                                    </Grid>
                                    </Grid>
                                </Card>
                            )
                        })
                    }
                  </Grid>
                  <Grid item lg={7}>
                    {
                        itemsInCart.map((item)=>{
                            <Typography variant="h5" color="palette.text.primary"></Typography>
                        })
                    }
                  </Grid>
                </Grid>
            </Container>
        </>
    )
}
