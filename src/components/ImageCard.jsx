import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ImageCard = ({ image }) => {
	return (
		<Card className="mb-5 memeCard">
			<a href={image.url} target="_blank">
				<Card.Img variant="top" src={image.url} />
			</a>
		</Card>
	);
};

export default ImageCard;
