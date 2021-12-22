import React from "react";
import { Container } from "react-bootstrap";
import ImageGrid from "../components/ImageGrid";
import useOwnMemes from "../hooks/useMemes";

const MyMemesPage = () => {
	const ownMemesQuery = useOwnMemes();
	console.log(`ownMemesQuery`, ownMemesQuery);
	return (
		<Container className="py-3">
			<h1>My Memes</h1>
			<ImageGrid query={ownMemesQuery} />
		</Container>
	);
};

export default MyMemesPage;
