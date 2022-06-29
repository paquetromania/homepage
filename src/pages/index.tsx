import { Grid, Container, Typography, Divider, Stack } from "@mui/material";
import HomeHeader from "../components/HomeHeader";


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
						Ce se intampla?
					</Typography>
					<Typography>
						Paquet a fost un proiect ambitios care din pacate
						nu a fost putut sa fie dus pana la capat. Acest proiect
						a fost arhivat si va astepta o stergere permanenta pe 3 Aprilie 2023.
					</Typography>
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<Typography
						variant='h2'
					>
						De ce?
					</Typography>
					<Typography>
						Din pacate, restaurantele nu au fost foarte cooperante,
						nu am avut resursele necesare pentru a continua proiectul.
						Acest proiect a fost prea mare pentru capacitatea noastra.
					</Typography>
					<Divider sx={{ width: "75%", alignSelf: "center" }}/>
					<Typography
						variant='h2'
					>
						Pot sa ajut?
					</Typography>
					<Typography>
						Nu prea. Acest proiect a fost arhivat si va astepta o stergere.
						Totusi daca doresti sa preiei proiectul, poti sa ne contactezi
						pe <a href='mailto:info@paquet.ro'/> sau pe retelele de socializare.
					</Typography>
				</Stack>
			</Container>
		</>
	);
};

export default Home;