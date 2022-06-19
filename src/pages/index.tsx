import type { NextPage } from "next";
import { Container, Typography, Divider, Stack, Grid } from "@mui/material";
import HomeHeader from "../components/HomeHeader";

import PaquetDelivery from "../components/PaquetDelivery";
import PaquetRide from "../components/PaquetRide";
import AboutUs from "../components/AboutUs";
import PageLinks from "../components/PageLinks";
import Partners from "../components/Partners";
import SponsorCard from "../components/SponsorCard";

const Home: NextPage = () => {
	return (
		<>
			<HomeHeader />
			<Container>
				<Stack
					sx={{
						marginBottom: 2
					}}
				>
					<Typography
						variant='h2'
					>
						Ce vrem sa oferim
					</Typography>
					<Grid
						container
						spacing={2}
						direction='row'
						sx={{
							marginLeft: theme => `-${theme.spacing(2)}!important`,
							marginTop: theme => `-${theme.spacing(2)}!important`
						}}
					>
						<Grid item md={6} xs={12} display='flex' flexWrap='wrap'>
							<PaquetDelivery />
						</Grid>
						<Grid item md={6} xs={12} display='flex' flexWrap='wrap'>
							<PaquetRide />
						</Grid>
					</Grid>
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<SponsorCard />
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<Partners />
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<PageLinks />
				</Stack>
			</Container>
			<AboutUs />
		</>
	);
};

export async function getStaticProps() {
	return {
		props: {}
	};
}

export default Home;
