import React from "react";
import Alert from "react-bootstrap/Alert";
import Masonry from "react-masonry-css";
import { BeatLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import MemeCard from "./MemeCard";
import { SRLWrapper } from "simple-react-lightbox";

const mansoryBreakpoints = {
	default: 4,
	576: 2,
	768: 3,
	992: 4,
};
const MemesGrid = ({ query }) => {
	if (query.isError) {
		return <Alert variant="warning">{query.error}</Alert>;
	}

	if (query.isLoading) {
		return <BeatLoader color="#888" />;
	}
	const refetchQuery = () => {
		query.refetch();
	};
	return (
		query.data && (
			<SRLWrapper>
				<Masonry
					breakpointCols={mansoryBreakpoints}
					className="memes-masonry"
					columnClassName="memes-masonry-column"
				>
					{query.data.map((meme) => (
						<MemeCard
							key={meme.name}
							meme={meme}
							refetchQuery={refetchQuery}
						/>
					))}
				</Masonry>
			</SRLWrapper>
		)
	);
};

export default MemesGrid;
