import type { NextPage } from "next";
import { Container, Typography, Divider, Stack, Grid } from "@mui/material";
import HomeHeader from "../components/HomeHeader";

import PaquetDelivery from "../components/PaquetDelivery";
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
					<PaquetDelivery />
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<SponsorCard />
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<Partners />
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<PageLinks />
				</Stack>
			</Container>
		</>
	);
};

export async function getStaticProps() {
	return {
		props: {}
	};
}

export default Home;
