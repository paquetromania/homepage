import { Container, Stack, Stepper, Step, StepLabel, StepContent, Chip, Link, Typography, Box, Avatar } from "@mui/material";
import Header from "../components/Header";
import gemoji from "gemoji-parser";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


const GITHUB_API_URL = "https://api.github.com/repos/paquetromania/paquet";

type Issue = {
	id: number,
	html_url: string,
	state: "open" | "closed",
	title: string,
	number: number,
	labels: [
		{
			name: string,
			color: string
		}
	] | []
}

type RoadProps = {
	openIssues: Issue[],
	closedIssuesCount: number,
	error: boolean
}

function Road({ openIssues, closedIssuesCount, error }: RoadProps) {

	return (
		<Container>
			<Stack>
				<Header>
					Drumul nostru
				</Header>
				<Typography>
					Acesta este drumul nostru inspre a dezvolta aplicatia.
					Aici poti vedea cum dezvoltam noi aplicatia Paquet.
					Toate problemele si sugestiile sunt luate de pe{" "}
					<Link href='https://github.com/paquetromania/paquet/issues' target='_blank' rel='noopener noreferrer'>GitHub</Link>.
				</Typography>
				<Stepper
					orientation='vertical'
				>
					<Step>
						<StepLabel
							StepIconComponent={() => (
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										alignContent: "center",
										backgroundColor: "primary.main",
										minWidth: 26,
										height: 26,
										fontSize: 12,
										borderRadius: 13,
										padding: 1,
										color: "white"
									}}
								>
									+{closedIssuesCount}
								</Box>
							)}
						>
							Alte {closedIssuesCount} {closedIssuesCount >= 20 ? "de": ""} probleme si sugestii au fost rezolvate 
						</StepLabel>
						<StepContent>
							<Link
								href='https://github.com/paquetromania/paquet/issues?q=is%3Aissue+is%3Aclosed'
								target='_blank'
								rel='noopener noreferrer'
							>
								Vezi toate problemele rezolvate pe GitHub{" "}
								<OpenInNewIcon
									fontSize='inherit'
								/>
							</Link>
						</StepContent>
					</Step>
					{openIssues.map((issue: Issue) => (
						<Step 
							key={issue.id}
							expanded
						>
							<StepLabel
								StepIconComponent={() => (
									<Box
										sx={{
											backgroundColor: theme => theme.palette.mode === "dark" ? theme.palette.grey[800] : "background.paper",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											alignContent: "center",
											borderRadius: 13,
											minWidth: 26,
											height: 26,
											fontSize: 12,
											padding: 1
										}}
									>
										#{issue.number}
									</Box>
								)}
							>
								{issue.title}
							</StepLabel>
							<StepContent>
								{issue.labels.map((label: { name: string, color: string }) => (
									<Chip
										key={label.name}
										label={gemoji(label.name)}
										variant='filled'
										size='small'
										sx={{
											backgroundColor: `#${label.color}`,
											marginRight: 1,
											color: theme => theme.palette.getContrastText(`#${label.color}`)
										}}
									/>
								))}
								<br />
								<Link
									href={issue.html_url}
									target='_blank'
									rel='noopener noreferrer'
								>
									Vezi pe GitHub{" "}
									<OpenInNewIcon
										fontSize='inherit'
									/>
								</Link>
							</StepContent>
						</Step>
					))}
				</Stepper>
			</Stack>
		</Container>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${GITHUB_API_URL}/issues?state=all`);
	const data = await res.json();

	if (res.ok) {
		return {
			props: {
				openIssues: data.filter((issue: Issue) => issue.state === "open"),
				closedIssuesCount: data.filter((issue: Issue) => issue.state === "closed").length,
				error: false
			}
		};
	} else {
		return {
			props: {
				openIssues: [],
				closedIssuesCount: 0,
				error: true
			}
		};
	}

}

export default Road;