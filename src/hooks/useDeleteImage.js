import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "../firebase";

const useDeleteMeme = (meme) => {
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState(null);
	const [isMutating, setIsMutating] = useState(false);

	const mutate = async () => {
		setError(null);
		setIsError(false);
		setIsMutating(true);

		// run mutation that will delete meme from storage and db
		try {
			// get ref to meme in storage
			const storageRef = ref(storage, meme.path);

			// delete meme from storage
			await deleteObject(storageRef);

			// get ref to meme in db
			const dbRef = doc(db, "memes", meme._id);

			// delete meme from db
			await deleteDoc(dbRef);
		} catch (e) {
			setIsError(true);
			setError(e.message);
		} finally {
			setIsMutating(false);
		}
	};

	return {
		error,
		isError,
		isMutating,
		mutate,
	};
};

export default useDeleteMeme;
