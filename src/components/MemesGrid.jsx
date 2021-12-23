import React from "react";
import Alert from "react-bootstrap/Alert";
import Masonry from "react-masonry-css";
import { BeatLoader } from "react-spinners";
import Card from "react-bootstrap/Card";

const mansoryBreakpoints = {
	default: 4,
	576: 2,
	768: 3,
	992: 4,
};
const MemesGrid = ({ query }) => {
	console.log(`query`, query);
	if (query.isError) {
		return <Alert variant="warning">{query.error}</Alert>;
	}

	if (query.isLoading) {
		return <BeatLoader color="#888" />;
	}
	return (
		query.data && (
			<Masonry
				breakpointCols={mansoryBreakpoints}
				className="memes-masonry"
				columnClassName="memes-masonry-column"
			>
				{query.data.map((meme) => (
					<Card key={meme.name}>
						<Card.Header> {meme.name}</Card.Header>
						<Card.Img src={meme.url} title={meme._id} />
						<Card.Footer>{meme.owner}</Card.Footer>
					</Card>
				))}
			</Masonry>
		)
	);
};

export default MemesGrid;
