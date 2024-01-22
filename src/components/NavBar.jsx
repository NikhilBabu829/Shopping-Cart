import { createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom';



export default function NavBar(){
  
  const themeColors = useTheme()

    return (
      <>
        <CssBaseline />
        <AppBar sx={{display : "flex",flexDirection : "row" ,alignItems : "center", justifyContent : "space-between"}} position="relative" color="primary">
          <Toolbar>
            <IconButton aria-label="">
              <Link to="/"> <AcUnitIcon sx={{color : themeColors.palette.text.primary}}/> </Link>
            </IconButton>
          </Toolbar>
          <Toolbar sx={{flexGrow:"0.2"}}>
            <Box sx={{width:"100%"}}>
                <ButtonGroup sx={{display:"flex", flexDirection : "row"}} variant="text" color="primary" aria-label=""> 
                  <Button className='noBorderBtn' color= 'warning' sx={{width: 1}}><Link to="/shop" className='linksToPages' style= {{color : themeColors.palette.warning.main}}>Shop</Link></Button>
                  <Button className='noBorderBtn' color='warning'  sx={{width: 1}}><Link to="/shop/cart" className='linksToPages' style={{color : themeColors.palette.warning.main}} >Cart</Link></Button>
                </ButtonGroup>
              </Box>
          </Toolbar>
        </AppBar>
      </>
    )
}


