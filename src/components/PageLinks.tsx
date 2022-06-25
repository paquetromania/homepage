import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper } from "@mui/material";
import {
	Call as ContactIcon,
	Favorite as HeartIcon
} from "@mui/icons-material";
import Link from "next/link";

function PageLinks() {
	return (
		<List
			component={Paper}
			subheader={
				<ListSubheader
					disableSticky
				>
					Exploreaza
				</ListSubheader>
			}
		>
			<Link
				href='/contact'
				passHref
			>
				<ListItemButton>
					<ListItemIcon>
						<ContactIcon />
					</ListItemIcon>
					<ListItemText 
						primary="Contact"
						secondary="Contacteaza-ne"
					/>
				</ListItemButton>
			</Link>
		</List>
	);
}

export default PageLinks;