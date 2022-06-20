import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import DeliveryBkgSVG from "../resources/deliveryBackground.svg";
import DeliveryFrgSVG from "../resources/deliveryForeground.svg";
import { ParallaxBanner } from "react-scroll-parallax";



function PaquetDelivery() {
	return (
		<Card>
			<CardMedia
				title='Delivery'
				component={ParallaxBanner}
				sx={{
					height: 300
				}}
				layers={[
					{
						children: (
							<DeliveryFrgSVG
								width='100%'
								height={300}
							/>
						),
						translateX: [-50, 50]
					},
					{
						children: (
							<DeliveryBkgSVG
								width='100%'
								height={300}
							/>	
						)
					}
				]}
			/>
			<CardContent>
				<Typography variant='h5'>
					Paquet Delivery
				</Typography>
				<Typography variant='body1'>
					Acest serviciu te va ajuta să comanzi mâncare cât mai repede
                    și cât mai ușor.
				</Typography>
			</CardContent>
		</Card>
	);
}

export default PaquetDelivery;