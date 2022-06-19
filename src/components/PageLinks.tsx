import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper } from "@mui/material";
import {
	AssignmentTurnedIn as RoadIcon,
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
				href='/drum'
				shallow
				passHref
			>
				<ListItemButton>
					<ListItemIcon>
						<RoadIcon />
					</ListItemIcon>
					<ListItemText 
						primary="Drumul nostru"
						secondary="Ce mai avem de facut la Paquet"
					/>
				</ListItemButton>
			</Link>
		</List>
	);
}

export default PageLinks;