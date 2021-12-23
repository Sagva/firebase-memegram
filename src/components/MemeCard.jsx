import React, { useEffect, useState } from "react";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuthContext } from "../contexts/AuthContext";
import useDeleteMeme from "../hooks/useDeleteImage";

const MemeCard = ({ meme, refetchQuery }) => {
	const { currentUser } = useAuthContext();

	const deleteMeme = useDeleteMeme(meme);

	const handleDeleteMemeClick = async () => {
		// run mutation and wait for it to be completed
		await deleteMeme.mutate();

		// invalidate query
		refetchQuery();
	};

	return (
		<Card
			className={`meme-card ${deleteMeme.isMutating ? "mutating" : ""}`}
		>
			<Card.Header>
				{/* <span className="image-filename" title={meme.name}>
					{meme.name}
				</span> */}
				<div className="card-actions">
					{meme.owner === currentUser.uid && (
						<Button
							variant="danger"
							size="sm"
							disabled={deleteMeme.isMutating}
							onClick={handleDeleteMemeClick}
						>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
					)}
				</div>
			</Card.Header>

			<a href={meme.url} target="_blank">
				<Card.Img variant="top" src={meme.url} />
			</a>

			<Card.Body></Card.Body>
		</Card>
	);
};

export default MemeCard;
