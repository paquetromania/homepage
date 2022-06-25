import { Box, Typography } from "@mui/material";
import { ParallaxBanner } from "react-scroll-parallax";
import LogoIcon from "./LogoIcon";



function HomeHeader() {
	return (
		<ParallaxBanner
			style={{
				height: window.screen.height / 3 * 2,
				width: "100%"
			}}
			layers={[
				{
					children: (
						<Box 
							sx={{
								width: "100%",
								height: "100%",
								backgroundImage: theme => `linear-gradient(to top right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
							}}
						/>
					)
				},
				{
					children: (
						<Box
							sx={{
								width: "100%",
								height: "100%",
								justifyContent: "center",
								alignItems: "center",
								alignContent: "center",
								display: "flex",
								flexDirection: "column"
							}}
						>
							<LogoIcon 
								sx={{
									width: 48,
									height: 48,
									color: "#fff"
								}}
							/>
							<Typography variant='h2' gutterBottom color='white'>
								Paquet
							</Typography>
							<Typography color='white'>
								Aducem comunitatea mai aproape
							</Typography>
						</Box>
					),
					expanded: false,
					speed: -5,
					scale: [1, 1.25]
				},
				{
					children: (
						<Box
							sx={{
								width: "100%",
								height: 200,
								marginTop: "calc(75vh - 24px)",
								backgroundColor: "background.default",
								borderRadius: theme => `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`
							}}
						/>
					),
					speed: 10,
					expanded: false
				}
			]}
		/>
	);	
}

export default HomeHeader;
