import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import {ContextProvider} from '../Context/ContextProvider';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardMedia, Box, CardContent, Card, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton, useMediaQuery } from "@mui/material";
import Divider from '@mui/material/Divider';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useTheme } from "@emotion/react";

export default function Cart(){

  const [open, setOpen] = useState(false)

  const {removeItemsIntoCart, itemsInCart, totalCost, setItemsInCart, setTotalCost } = useContext(ContextProvider)
  const themeColors = useTheme()
  const mediaForSmallScreens = useMediaQuery(themeColors.breakpoints.down('sm'))

  function handleRemoveEvent(data){
      const {id} = data;
      const index = itemsInCart.map(item => item.id).indexOf(id);
      itemsInCart.splice(index, 1);
      removeItemsIntoCart(itemsInCart, data);
  }

  function handleBuy(){
      setOpen(true)
      setItemsInCart([]);
      setTotalCost(0);
      setTimeout(()=>{
        setOpen(false);
      },10000)
  }

  function closeBuy(){
      setOpen(false)
  }

  return (
      <>
          <NavBar />
          <Container maxWidth="md" sx={{marginTop : "1%"}}>
              <Typography variant="h3" color={themeColors.palette.warning.main}>Checkout</Typography>
              {
                mediaForSmallScreens ? (
                  <Divider light sx={{marginBottom : "3%"}}/>
                )
                : (
                  <Divider light sx={{marginBottom : "1%"}}/>
                )
              }
              <Grid container spacing={2}>
                {
                  mediaForSmallScreens ? (
                    <>
                      <Grid item>
                        {
                          itemsInCart.map((item)=>{
                            return (
                              <Card key={item.id} sx={{marginBottom : "5%"}}>
                                <CardMedia component="img" title={item.title} image={item.images[0]} sx={{height : "240px", objectFit:"contain"}}/>
                                  <CardContent>
                                    <Typography variant="h6" color="palette.text.primary">{item.title}</Typography>
                                    <Typography variant="body1" color="palette.text.primary">{item.price} $</Typography>
                                    <Button variant="contained" color="warning" onClick={()=>{handleRemoveEvent(item)}}>
                                      remove
                                    </Button>
                                  </CardContent>
                              </Card>
                            )
                          })
                        }
                      </Grid>
                      <Grid item>
                      <Divider/>
                      <Typography variant="h5" color="palette.text.primary">Total Cost</Typography>
                      <Typography variant="h6" color="palette.text.secondary">{totalCost} $</Typography>
                      <Button variant="contained" color="success" onClick={handleBuy} sx={{marginBottom:"20%"}}>
                          Order Now
                      </Button>
                      <Dialog open={open} onClose={closeBuy}>
                          <DialogTitle sx={{textAlign : "center"}}>
                            We Received Your Order
                            <IconButton>
                              <CheckCircleOutlineOutlinedIcon color="success" fontSize="large"/>
                            </IconButton>
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText sx={{textAlign : "center"}}>
                              Thank you for shopping with us!
                            </DialogContentText>
                            <DialogContentText>
                              This Alert Will Disapper in 10 Seconds
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              color= "error"
                              variant="outlined"
                              onClick={closeBuy}
                            >
                              Close Now
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Grid>
                    </>
                  ) : (
                    <>
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
                      <Grid item lg={7} sx={{textAlign : "end"}}>
                        <Typography variant="h5" color="palette.text.primary">Total</Typography>
                        <Typography variant="h6" color="palette.text.secondary">{totalCost} $</Typography>
                        <Button variant="outlined" color="success" onClick={handleBuy}>
                          Order Now
                        </Button>
                        <Dialog open={open} onClose={closeBuy}>
                          <DialogTitle sx={{textAlign : "center"}}>
                            We Received Your Order
                            <IconButton>
                              <CheckCircleOutlineOutlinedIcon color="success" fontSize="large"/>
                            </IconButton>
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText sx={{textAlign : "center"}}>
                              Thank you for shopping with us!
                            </DialogContentText>
                            <DialogContentText>
                              This Alert Will Disapper in 10 Seconds
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              color= "error"
                              variant="outlined"
                              onClick={closeBuy}
                            >
                              Close Now
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Grid>
                    </>
                  )
                }
              </Grid>
          </Container>
      </>
  )
}


/**
 * 
 
 */