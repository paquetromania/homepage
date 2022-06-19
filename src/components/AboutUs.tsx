import {Container, Grid, Card, CardContent, Typography } from "@mui/material";


function AboutUs() {
	return (
		<Card
			sx={{
				backgroundImage: theme => `linear-gradient(to top right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
				paddingY: 2,
				marginY: 2
			}}
		>
			<Container>
				<Typography
					variant='h2'
					gutterBottom
					color='white'
				>
					Despre noi
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
						<Card>
							<CardContent>
								<Typography
									variant='h3'
								>
									Ce este Paquet?
								</Typography>
								<Typography>
									Paquet este o aplicatie care oferă servicii de transport și de livrare. 
									O aplicatie tânără care vrea să facă pași în a oferi comunităților o 
									opțiune mai bună. În curând vom adauga mai multe servicii și produse.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={6} xs={12} display='flex' flexWrap='wrap'>
						<Card>
							<CardContent>
								<Typography
									variant='h3'
								>
									Care este planul?
								</Typography>
								<Typography>
									Planul nostru este să oferim servicii cât mai bune și eficiente.
									Unul dintre principiile noastre cheie este de a fi cât mai fideli
									și transparenți cu clienții noștri. Noi nu vom colecta date despre
									clienți, și în niciun caz nu vom vinde informații despre clienți.
									Clientul pentru noi este de neprețuit.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Card>
	);
}

export default AboutUs;