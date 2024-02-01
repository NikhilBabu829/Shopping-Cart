
import NavBar from "../components/NavBar"
import Container from '@mui/material/Container'
import { Box, Typography, Button, Card, CardMedia, CardContent,CardActions } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function Home(){

    const themeColors = useTheme()

    const [APIData, setAPIData] = useState([])
    const [loading, isLoading] = useState(true)
    const [numberOfSlides, setNumberOfSlides] = useState(0);

    async function getAPIData(){
        // fetch('https://fakestoreapi.com/products')
        // .then((response)=>{
        //     return response.json()
        // })
        // .then((resposeJson)=>{
        //     setAPIData((prevData)=>{
        //         return ([
        //             ...prevData,
        //             resposeJson
        //         ])
        //     })
        // })

        // const response = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=12")
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json()
        setAPIData((prevData)=>{
            return ([
                ...prevData,
                data
            ])
        })
        isLoading(false)
    }

    
    
    useEffect(()=>{
        getAPIData()
        if(window.innerWidth < 600){
            setNumberOfSlides(1)
        }
        else if(window.innerWidth < 900 && window.innerWidth > 600){
            setNumberOfSlides(2)
        }
        else if(window.innerHeight < 600){
            setNumberOfSlides(1)
        }
        else{
            setNumberOfSlides(3)
        }
    },[])

    return (
        <>      
        {
            loading 
            ? (
                <LoadingScreen />
                )
            : (
            <>
                <NavBar/>
                <Container maxWidth="lg" sx={{height : "100vh"}}>
                    <Box sx={{height : "80%"}}>
                        <Swiper
                            style={{
                                "--swiper-pagination-color": themeColors.palette.text.primary,
                                "--swiper-pagination-bullet-inactive-color": themeColors.palette.text.secondary,
                            }}
                            spaceBetween={30}
                            slidesPerView={numberOfSlides}
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
                                APIData[0].slice(0,12).map((data)=>(
                                    <SwiperSlide className="sliderSLide">
                                        <Card sx={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                                            <CardMedia 
                                                title="productImage" 
                                                height="50%"
                                                image = {data.images[0]} 
                                                component="img"
                                                alt="green iguana"
                                                sx={{objectFit : "fill"}}
                                            />
                                            <CardContent>
                                                <Typography variant="h6" textAlign='center' color="palette.text.primary" gutterBottom>{data.title}</Typography>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Box>
                    <Typography variant="h5" color="main" textAlign="center">Welcome to this Land! Check out our new fashion this week</Typography>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Button variant="outlined" color="warning" sx={{marginTop:"1%"}}><Link to="/shop" style={{color : themeColors.palette.warning.main, textDecoration:0}}>Shop Now</Link></Button>
                    </Box>
                </Container>
            </>
            )
        }
        </>
    )
}
