// import { wrapper } from "../store/store";
import Head from "next/head";
import "../styles/bootstrap.min.css";
import "../styles/custom.css";
import Layout from "../hoc/layout";
const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>S M RIASAT ALI</title>
				<meta
					name="description"
					content="Portfolio website of S M RIASAT ALI."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default App;
