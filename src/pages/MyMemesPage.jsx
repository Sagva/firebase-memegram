import React from "react";
import { Container } from "react-bootstrap";
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
			<SRLWrapper>
				<MemesGrid query={memesQuery} />
			</SRLWrapper>
		</Container>
	);
};

export default MyMemesPage;
