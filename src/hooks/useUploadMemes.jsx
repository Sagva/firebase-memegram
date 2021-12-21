import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import {db, storage} from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

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

        //create a referenc in storage to upload image to
        const storageRef = ref(storage, storageFullpath)

        // start upload image 
		const uploadTask = uploadBytesResumable(storageRef, image)

        // attach upload observer
        uploadTask.on('state_changed', (uploadTaskSnapshot) => {
            //update progress
            setUploadProgress(Math.round((uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 1000) / 10)
        }, (error) => {}, () => {})
	};
	return { error, isError, isMutating, isSuccess, progress, mutate };
};

export default useUploadMemes;
