import React from "react";
import Container from "react-bootstrap/Container";
import ImageGrid from "../components/ImageGrid";
import useMemes from "../hooks/useMemes";
import { SRLWrapper } from "simple-react-lightbox";
import MemesGrid from "../components/MemesGrid";

const HomePage = () => {
	const memesQuery = useMemes();

	return (
		<Container className="py-3">
			<h1>Memes</h1>

			<MemesGrid query={memesQuery} />

			{/* <SRLWrapper>
				<ImageGrid query={memesQuery} showDeleteButton={false} />
			</SRLWrapper> */}
		</Container>
	);
};

export default HomePage;
