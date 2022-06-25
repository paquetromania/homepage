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
								Paquet este un serviciu de livrare făcut de comunitate pentru comunitate.
								Un serviciu simplu și ușor de folosit, pentru toatăs lumea.
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
									O restructurare recentă ne-a permis să devenim o platformă. Noi țintim să fim
									o platformă care ajută micile afaceri în a se dezvolta, și pe tine în a le descoperi.
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