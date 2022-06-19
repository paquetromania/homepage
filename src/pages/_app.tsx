import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "../lib/theme";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import TopBar from "../components/TopBar";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const router = useRouter();

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
				<meta name="theme-color" content="#8267be" />
				<meta name="description" content="Aducem comunitatea mai aproape" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/manifest.json"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8267be"/>
				<meta name="msapplication-TileColor" content="#8267be"/>
				<title>Paquet</title>
			</Head>
			<ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
				<CssBaseline enableColorScheme/>
				<NextNProgress
					color={lightTheme.palette.primary.main}
					height={2}
					options={{
						showSpinner: false
					}}
				/>	
				<ParallaxProvider>
					{router.pathname !== "/" && <TopBar />}
					<Component {...pageProps} />
					<Footer />
				</ParallaxProvider>
			</ThemeProvider>
		</>

	);
}

export default MyApp;
