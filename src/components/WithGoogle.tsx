import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import RideSVG from "../resources/ride.svg";
import { Parallax } from "react-scroll-parallax";



function WithGoogle() {
	return (
		<Card>		
			<CardMedia
				title='Ride'
			>
				<GoogleIcon />
			</CardMedia>
			<CardContent>
				<Typography variant='h5'>
					Paquet Ride
				</Typography>
				<Typography variant='body1'>
					Mult mai ușor, mult mai simplu și mult mai accesibil. Serviciul nostru
                    de taxi te va ajuta să ajungi la destinația ta, fără să te temi de 
                    costuri suplimentare și de țepe.
				</Typography>
			</CardContent>
		</Card>
	);
}

export default WithGoogle;