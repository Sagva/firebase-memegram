import React from "react";
import Container from "react-bootstrap/Container";
import useMemes from "../hooks/useMemes";

import MemesGrid from "../components/MemesGrid";

const HomePage = () => {
	const memesQuery = useMemes();

	return (
		<Container className="py-3">
			<h1>All memes</h1>
			<MemesGrid query={memesQuery} />
		</Container>
	);
};

export default HomePage;
