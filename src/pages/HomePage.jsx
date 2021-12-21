import React from "react";
import Container from "react-bootstrap/Container";
import ImageGrid from "../components/ImageGrid";

import useMemes from "../hooks/useMemes";

const HomePage = () => {
	const memesQuery = useMemes();

	return (
		<Container className="py-3">
			<h1>Memes</h1>
			<ImageGrid query={memesQuery} />
		</Container>
	);
};

export default HomePage;
