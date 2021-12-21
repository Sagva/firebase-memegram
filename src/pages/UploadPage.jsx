import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Alert from "react-bootstrap/Alert";
import ProgressBar from "react-bootstrap/ProgressBar";
const UploadPage = () => {
	const onDrop = useCallback((acceptedFiles) => {
		console.log(`Get me files`, acceptedFiles);

		if (!acceptedFiles.length) {
			return;
		}

		//trigger upload of the first file
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
		<div>
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
					<p>Drop a funny meme here</p>
				)}
			</div>
		</div>
	);
};

export default UploadPage;
