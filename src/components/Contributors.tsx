import { AvatarGroup, Avatar, Box } from "@mui/material";
import { useEffect, useState } from "react";

type Contributor = {
	login: string,
	avatar_url: string,
	contributions: number,
}


const API_URL = "https://api.github.com/repos/paquetromania/paquet/contributors";
const MAX_CONTRIBUTORS = 5;
const AVATAR_SIZE = 48;

function Contributors() {
	const [contributors, setContributors] = useState<Contributor[]>([]);

	useEffect(() => {
		fetch(API_URL).then(res => res.json()).then(setContributors);
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start"
			}}
		>
			<AvatarGroup
				max={MAX_CONTRIBUTORS}
				total={contributors.length ? contributors.length : MAX_CONTRIBUTORS}
			>
				{contributors.length ? 
					contributors
						.slice(0, MAX_CONTRIBUTORS)
						.sort((a, b) => b.contributions - a.contributions)
						.map(({ login, avatar_url }) => (
							<Avatar 
								key={login} 
								src={avatar_url}
								sx={{
									width: AVATAR_SIZE,
									height: AVATAR_SIZE
								}}
							/>
						)) 
					: 
					Array(MAX_CONTRIBUTORS).fill(0).map((_, i) => (
						<Avatar 
							key={i}
							sx={{
								width: AVATAR_SIZE,
								height: AVATAR_SIZE
							}} 
						/>
					))
				}
			</AvatarGroup>
		</Box>
	);
}

export default Contributors;