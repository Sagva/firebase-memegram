import React from "react";
import { Container } from "react-bootstrap";
import ImageGrid from "../components/ImageGrid";
import { SRLWrapper } from "simple-react-lightbox";
import useMemes from "../hooks/useMemes";
import MemesGrid from "../components/MemesGrid";

const MyMemesPage = () => {
	const memesQuery = useMemes({
		fetchOnlyCurrentUser: true,
	});

	return (
		<Container className="py-3">
			<h1>My Memes</h1>
			<MemesGrid query={memesQuery} />
			{/* <SRLWrapper>
				<ImageGrid query={memesQuery} showDeleteButton={true} />
			</SRLWrapper> */}
		</Container>
	);
};

export default MyMemesPage;
