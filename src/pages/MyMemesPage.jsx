import React from "react";
import { Container } from "react-bootstrap";
import useMemes from "../hooks/useMemes";
import MemesGrid from "../components/MemesGrid";

const MyMemesPage = () => {
	const memesQuery = useMemes({
		fetchOnlyCurrentUser: true,
	});

	return (
		<Container className="py-3 heigh100">
			<h1>My Memes</h1>

			<MemesGrid query={memesQuery} />
		</Container>
	);
};

export default MyMemesPage;
