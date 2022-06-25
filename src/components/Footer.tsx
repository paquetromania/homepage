import { Container, IconButton, Box, Stack, Typography, Link, Button } from "@mui/material";
import NextLink from "next/link";
import { Facebook, Instagram, GitHub, Favorite as HeartIcon } from "@mui/icons-material";



const LINKS = [
	{
		href: "https://www.facebook.com/paquetromania",
		icon: Facebook
	},
	{
		href: "https://www.instagram.com/paquetromania",
		icon: Instagram
	},
	{
		href: "https://github.com/paquetromania",
		icon: GitHub
	},
	{
		href: "https://github.com/sponsors/paquetromania",
		icon: HeartIcon
	}
];


function Footer() {
	return (
		<Box
			sx={{
				marginTop: 2,
				padding: 2,
				backgroundColor: "primary.main",
				borderRadius: theme => `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`
			}}
		>
			<Container>
				<Stack>
					<Typography
						variant='h4'
						color='white'
					>
						Paquet
					</Typography>
					<Stack
						spacing={1}
						direction='row'
						alignItems='center'
						alignContent='center'
					>
						{LINKS.map(({ href, icon: Icon }) => (
							<IconButton
								key={href}
								href={href}
								target='_blank'
								rel='noopener noreferrer'
								sx={{
									color: "white"
								}}
							>
								<Icon />
							</IconButton>
						))}
					</Stack>
					<NextLink
						href='/contact'
						passHref
					>
						<Link
							color='white'
						>
							Contact
						</Link>
					</NextLink>
				</Stack>
			</Container>
		</Box>
	);
}

export default Footer;