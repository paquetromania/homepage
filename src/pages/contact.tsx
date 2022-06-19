import { Container, Stack, Typography, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
	Mail as MailIcon,
	Instagram as InstagramIcon,
	Facebook as FacebookIcon
} from "@mui/icons-material";
import Header from "../components/Header";

type ContactLink = {
	href: string
	icon: React.ComponentType<any>
	primaryText: string
	secondaryText: string
}

const LINKS: ContactLink[] = [
	{
		href: "mailto:info@paquet.ro",
		icon: MailIcon,
		primaryText: "Trimite-ne un email",
		secondaryText: "info@paquet.ro"
	},
	{
		href: "https://instagram.com/paquetromania",
		icon: InstagramIcon,
		primaryText: "Instagram",
		secondaryText: "paquetromania"
	},
	{
		href: "https://www.facebook.com/paquetromania",
		icon: FacebookIcon,
		primaryText: "Facebook",
		secondaryText: "paquetromania"
	}
];


function Contact() {
	return (
		<Container>
			<Stack>
				<Header>
					Contact
				</Header>
				<Typography>
					Vrei sa te alaturi de noi? Vrei sa ne sustii? Sau vrei sa ne intrebi ceva?
				</Typography>
				<List>
					{LINKS.map(link => (
						<a
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							key={link.href}
						>
							<ListItemButton>
								<ListItemIcon>
									<link.icon />
								</ListItemIcon>
								<ListItemText
									primary={link.primaryText}
									secondary={link.secondaryText}
								/>
							</ListItemButton>
						</a>
					))}
				</List>
			</Stack>
		</Container>
	);
}

export default Contact;