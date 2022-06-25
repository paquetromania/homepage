import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import DeliveryBkgSVG from "../resources/deliveryBackground.svg";
import DeliveryFrgSVG from "../resources/deliveryForeground.svg";
import { ParallaxBanner } from "react-scroll-parallax";



function PaquetDelivery() {
	return (
		<Card
			sx={{
				width: "100%"
			}}
		>
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
					Livrare rapidă
				</Typography>
				<Typography variant='body1'>
					Îți aducem orice mâncare ai chef rapid și ușor.
					Un serviciu de comunitate pentru comunitate.
				</Typography>
			</CardContent>
		</Card>
	);
}

export default PaquetDelivery;