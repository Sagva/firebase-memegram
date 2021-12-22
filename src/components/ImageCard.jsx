import React, { useEffect, useState } from "react";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useDeleteImage from "../hooks/useDeleteImage";

const ImageCard = ({ image, showDeleteButton }) => {
	
	const deleteImageMutation = useDeleteImage(image);
	return (
		<Card className="mb-5 memeCard">
			{showDeleteButton && (
				<Card.Header>
					<div className="d-flex justify-content-end">
						<Button
							variant="danger"
							size="sm"
							disabled={deleteImageMutation.isMutating}
							onClick={deleteImageMutation.mutate}
						>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
					</div>
				</Card.Header>
			)}
			<a href={image.url} target="_blank">
				<Card.Img variant="top" src={image.url} />
			</a>
		</Card>
	);
};

export default ImageCard;
