import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import HubSVG from "../resources/hub.svg";
import { Parallax } from "react-scroll-parallax";



function PaquetHub() {
	return (
		<Card>
			<CardMedia
				component={Parallax}
				title='Hub'
				scale={[.8, 1]}
			>
				<HubSVG 
					width='100%'
					height={300}
				/>
			</CardMedia>
			<CardContent>
				<Typography variant='h5'>
					Paquet Hub{" "}
					<Chip
						label="NOU"
						color="primary"
						size="small"
					/>
				</Typography>
				<Typography variant='body1'>
					Un magazin alternativ de aplicații pentru tine. Toate aplicațiile pot fi deschise
                    direct în browser. Aceste aplicații iau foarte puțin spațiu de stocare, nu ai probleme
					cu actualizările, performanța sau instalări.
				</Typography>
			</CardContent>
		</Card>
	);
}

export default PaquetHub;