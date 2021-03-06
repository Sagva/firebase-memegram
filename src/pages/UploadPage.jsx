import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Alert from "react-bootstrap/Alert";
import ProgressBar from "react-bootstrap/ProgressBar";
import useUploadMemes from "../hooks/useUploadMemes";
const UploadPage = () => {
	const uploadMeme = useUploadMemes();
	const onDrop = useCallback((acceptedFiles) => {
		console.log(`Get me files`, acceptedFiles);

		if (!acceptedFiles.length) {
			return;
		}

		//trigger upload of the first file
		uploadMeme.mutate(acceptedFiles[0]);
	}, []);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		accept: "image/gif, image/png, image/jpeg, image/webp",
		maxFiles: 1,
		onDrop,
	});
	return (
		<div className="heigh100vh">
			<h1>Upload a New Meme</h1>
			{/* Dropzone */}
			<div
				{...getRootProps()}
				id="dropzone-wrapper"
				className={`${isDragAccept ? "drag-accept" : ""} ${
					isDragReject ? "drag-reject" : ""
				}`}
			>
				<input type="text" {...getInputProps()} />
				{isDragActive ? (
					isDragAccept ? (
						<p>Drop the meme here</p>
					) : (
						<p>That's no meme that we want here</p>
					)
				) : (
					<p className="my-2">Drop a funny meme here</p>
				)}
				{uploadMeme.progress !== null && (
					<ProgressBar
						now={uploadMeme.progress}
						label={`${uploadMeme.progress}%`}
						className="my-3"
						animated
						striped
						variant="success"
					/>
				)}

				{uploadMeme.error && (
					<Alert variant="dangerous">Errror {uploadMeme.error}</Alert>
				)}
				{uploadMeme.isSuccess && (
					<Alert variant="success">That was a funny meme 🤩!</Alert>
				)}
			</div>
		</div>
	);
};

export default UploadPage;
