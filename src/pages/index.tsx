import { Grid, Container, Typography, Divider, Stack } from "@mui/material";
import PageLinks from "../components/PageLinks";
import Partners from "../components/Partners";
import SponsorCard from "../components/SponsorCard";
import Apps from "../components/Apps";
import HomeHeader from "../components/HomeHeader";
import PaquetHub from "../components/PaquetHub";
import PaquetDelivery from "../components/PaquetDelivery";
import PaquetRide from "../components/PaquetRide";


const Home = () => {
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
						<Grid item xs={12} display='flex' flexWrap='wrap'>
							<PaquetHub />
						</Grid>
						<Grid item md={6} xs={12} display='flex' flexWrap='wrap'>
							<PaquetDelivery />
						</Grid>
						<Grid item md={6} xs={12} display='flex' flexWrap='wrap'>
							<PaquetRide />
						</Grid>
					</Grid>
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<Apps />
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

export default Home;