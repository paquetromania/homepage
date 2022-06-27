import { Grid, Avatar } from "@mui/material";
import PaquetHub from "../resources/apps/hub.png";
import PaquetPodcasts from "../resources/apps/podcasts.png";
import PaquetDelivery from "../resources/apps/delivery.png";
import PaquetRide from "../resources/apps/ride.png";


const APPS = [
	{
		name: "Paquet Hub",
		logo: PaquetHub
	},
	{
		name: "Paquet Podcasts",
		logo: PaquetPodcasts
	},
	{
		name: "Paquet Delivery",
		logo: PaquetDelivery
	},
	{
		name: "Paquet Ride",
		logo: PaquetRide
	}
];

const Apps = () => {
	return (
		<Grid
			container
			spacing={2}
			justifyContent='center'
			alignItems='center'
			alignContent='center'
			direction='row'
			sx={{
				marginLeft: theme => `-${theme.spacing(2)}!important`,
				marginBottom: theme => `${theme.spacing(2)}!important`
			}}
		>
			{APPS.map((app, i) => (
				<Grid 
					key={i}
					item
					xs={3}
					md={2}
				>
					<Avatar
						src={app.logo.src}
						alt={app.name}
						sx={{
							width: "100%",
							height: "100%"
						}}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Apps;