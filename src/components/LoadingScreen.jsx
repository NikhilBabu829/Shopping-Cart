import { LineWave } from "react-loader-spinner";
import { Box } from "@mui/material";

export default function LoadingScreen(){
    return (
        <Box className="loadingAnimationContainer" >
            <LineWave 
                visible={true}
                height="100"
                width="100"
                color="#ffffff"
                ariaLabel="line-wave-loading"
            />
        </Box>
    )
}
