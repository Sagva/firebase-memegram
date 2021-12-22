import React from "react";
import Container from "react-bootstrap/Container";
import ImageGrid from "../components/ImageGrid";
import useMemes from "../hooks/useMemes";
import { SRLWrapper } from "simple-react-lightbox";

const HomePage = () => {
	const memesQuery = useMemes();

	return (
		<Container className="py-3">
			<h1>Memes</h1>
			<SRLWrapper>
				<ImageGrid query={memesQuery} />
			</SRLWrapper>
		</Container>
	);
};

export default HomePage;
