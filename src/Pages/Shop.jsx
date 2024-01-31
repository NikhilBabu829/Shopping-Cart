import NavBar from "../components/NavBar";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Container, Box, Card, CardActionArea, CardMedia, CardContent, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
// import { Navigate } from "react-router-dom";

export default function Shop(){
    
    const [APIData, setAPIData] = useState([])
    const [loading, isLoading] = useState(true)
    // const [redirect, setRedirect] = useState(false)
    // const [redirectData, setRedirectData] = useState([])

    const  theming = useTheme()
    const navigate = useNavigate()

    async function APIRequest(){
        // const response = await fetch("https://fakestoreapi.com/products")
        const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=30")
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
        APIRequest();
    },[])


    function routeChangeClick(data){
        navigate(`/shop/about_product`,{state : data, replace : true})
        // return (
        //     <Navigate to="/shop/about_product" replace={true} state={{title : data.title, description : data.description, }}/>
        // )
        // setRedirect(true)
        // setRedirectData(data)
    }

    return (
        <>
            {
                loading 
                ? (
                    <LoadingScreen />
                ) 
                : (
                    // redirect ? (
                    //     <Navigate to="/shop/about_product" replace={true} state={{title : redirectData.title, description : redirectData.description}}/>
                    // )
                    // : (
                        <>
                        <NavBar />
                        <Container maxWidth="lg">
                            <Box sx={{marginTop : {xs : "5%", md : "2%"}, marginBottom : {xs : "5%", md : "2%"}}}>
                                <Grid container spacing={4} sx={{ display : {xs : "flex"}, justifyContent : {xs : "center", lg : "start", xl : "start", md : "start"} }}> {/*sx={{display : {xs : 'flex'}, alignItems: {xs :"center"}, justifyContent : {xs :'center'}}} */}
                                    {
                                        APIData[0].map((data)=>{
                                            return (
                                                <Grid item sm={6} xs={10} lg={3} md={4}>
                                                    <Card>
                                                        <CardActionArea onClick={()=>{routeChangeClick(data)}}>    
                                                            <Link to='/shop/about_product' style={{textDecoration : 0}}>
                                                                <CardMedia 
                                                                    component="img"
                                                                    image={data.images[0]}
                                                                    alt="Product Image"
                                                                    sx={{objectFit : "fill", maxHeight : "250px"}} 
                                                                />
                                                                <CardContent>
                                                                <Typography gutterBottom color={theming.palette.text.secondary} variant="body1" >
                                                                    {data.title}
                                                                </Typography>
                                                                <Typography variant="body2" color={theming.palette.text.primary}>
                                                                    {data.price} $
                                                                </Typography>
                                                                </CardContent>
                                                            </Link>
                                                        </CardActionArea>
                                                    </Card>
                                                </Grid>      
                                            )
                                        })
                                    }  
                                </Grid>
                            </Box>
                        </Container>
                        </>
                    // )
                )
            }
        </>
    ) 
}
