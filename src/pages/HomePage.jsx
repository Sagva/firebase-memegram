import React from "react";
import Container from "react-bootstrap/Container";
import useMemes from "../hooks/useMemes";
import { SRLWrapper } from "simple-react-lightbox";
import MemesGrid from "../components/MemesGrid";

const HomePage = () => {
	const memesQuery = useMemes();

	return (
		<Container className="py-3">
			<h1>Memes</h1>
			<SRLWrapper>
				<MemesGrid query={memesQuery} />
			</SRLWrapper>
		</Container>
	);
};

export default HomePage;
