import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const useUploadMemes = () => {
	const [error, setError] = useState(null);
	const [isError, setIsError] = useState(null);
	const [isMutating, setIsMutating] = useState(null);
	const [isSuccess, setIsSuccess] = useState(null);
	const [progress, setProgress] = useState(null);

	const { currentUser } = useAuthContext();

	const mutate = async (image) => {
		//reset internal state
		setError(null);
		setIsError(null);
		setIsMutating(true);
		setIsSuccess(null);

		//break if there is no image
		if (!image instanceof File) {
			setError("That is no file");
			setIsError(true);
			setIsMutating(false);
			return;
		}

		//constract file name to save image as
		const storageFilename = Date.now() + "-" + image.name;

		//construct full path in storage to save image as
		const storageFullpath = `memes/${currentUser.uid}/${storageFilename}`;
		console.log(`storage_fullpath`, storageFullpath);

		try {
			//create a referenc in storage to upload image to
			const storageRef = ref(storage, storageFullpath);

			// start upload image
			const uploadTask = uploadBytesResumable(storageRef, image);

			// attach upload observer
			uploadTask.on("state_changed", (uploadTaskSnapshot) => {
				//update progress
				setProgress(
					Math.round(
						(uploadTaskSnapshot.bytesTransferred /
							uploadTaskSnapshot.totalBytes) *
							1000
					) / 10
				);
			});
			//when upload is completed
			await uploadTask.then();

			//get download url to uploaded image
			const url = await getDownloadURL(storageRef);

			//create reference to adb-collectiom 'memes'
			const collectionRef = collection(db, "memes");

			//create document in db for the uploaded image
			await addDoc(collectionRef, {
				name: image.name,
				path: storageRef.fullPath,
				size: image.size,
				type: image.type,
				owner: currentUser.uid,
				url,
				created: serverTimestamp(),
			});

			setIsMutating(false);
			setIsSuccess(true);
			setProgress(null); //progress bar disappear
		} catch (e) {
			// console.log(`Error`, e);
			setError(e.message);
			setIsError(true);
			setIsMutating(false);
			setIsSuccess(false);
		}
	};
	return { error, isError, isMutating, isSuccess, progress, mutate };
};

export default useUploadMemes;
