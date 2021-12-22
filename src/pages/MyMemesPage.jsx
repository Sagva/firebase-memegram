import React from "react";
import { Container } from "react-bootstrap";
import ImageGrid from "../components/ImageGrid";
import useOwnMemes from "../hooks/useMemes";
import { SRLWrapper } from "simple-react-lightbox";

const MyMemesPage = () => {
	const ownMemesQuery = useOwnMemes();

	return (
		<Container className="py-3">
			<h1>My Memes</h1>
			<SRLWrapper>
				<ImageGrid query={ownMemesQuery} showDeleteButton={true} />
			</SRLWrapper>
		</Container>
	);
};

export default MyMemesPage;
