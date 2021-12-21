import React from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BeatLoader from "react-spinners/BeatLoader";
import ImageCard from "./ImageCard";

const ImageGrid = ({ query }) => {
	if (query.isError) {
		return (
			<Alert variant="warning">
				<strong>Error!</strong> {query.error}
			</Alert>
		);
	}

	if (query.isLoading) {
		return <BeatLoader color={"#888"} />;
	}

	return (
		<Row xs={1}>
			{query.data &&
				query.data.map((image) => (
					<Col
						key={image._id}
						className="d-flex justify-content-center"
					>
						<ImageCard image={image} />
					</Col>
				))}
		</Row>
	);
};

export default ImageGrid;
