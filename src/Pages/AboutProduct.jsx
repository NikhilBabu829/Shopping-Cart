import React from 'react';
import Typography from '@mui/material/Typography'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Grid, Button, Box, Card, CardMedia } from '@mui/material';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTheme } from '@emotion/react';
export default function (){

  const themeColors = useTheme() 
  
  const location = useLocation()
  const [open, setOpen] = useState(false)

    function handleClickCart(){
      setOpen(true)
    }

    function handleCloseCart(){
      setOpen(false)
    }

    const action = (
      <React.Fragment>
        <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseCart}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      </React.Fragment>
    )

    return (
      
      <>
        <NavBar />
        <Container maxWidth="lg" sx={{marginTop : "1%", marginBottom :"2%"}}>
            <Grid container spacing={2}>
              <Grid item lg={7}>
                <Typography variant="h1" color="palette.text.primary">{location.state.title}</Typography>
                <Typography variant="h6" color="palette.text.secondary">{location.state.description}</Typography>
                <Typography variant="h5" color="palette.text.primary">{location.state.price} $</Typography>
                <Button variant="outlined" color="warning" sx={{marginTop : "1%"}} onClick={handleClickCart}>
                  Add to cart
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleCloseCart}
                  message="Added To Cart"
                  action={action}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                />
              </Grid>
              <Grid item lg={5}>
                <Box sx={{width:"100%", height : "100%", overflow:"hidden"}}>
                    {/* <img src={location.state.images[0]} alt="" style={{objectFit:"contain", width:"100%", borderRadius: "10px" ,maxHeight: "600px"}}/> */}
                    <Swiper
                        style={{
                            "--swiper-pagination-color": themeColors.palette.text.primary,
                            "--swiper-pagination-bullet-inactive-color": themeColors.palette.text.secondary,
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            location.state.images.map((image)=>(
                                <SwiperSlide className="sliderSLide">
                                    <Card sx={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                                        <CardMedia 
                                            title="productImage" 
                                            height="50%"
                                            image = {image} 
                                            component="img"
                                            alt="green iguana"
                                            sx={{objectFit : "fill"}}
                                        />
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
              </Grid>
            </Grid>
        </Container>
      </>
    )
}
