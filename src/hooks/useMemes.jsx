import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";

const useMemes = () => {
	// create ref to collection 'memes'
	const memesRef = collection(db, "memes");

	const memesQuery = useFirestoreQueryData(
		["memes"],
		memesRef,
		{
			idField: "_id",
			subscribe: true,
		},
		{
			refetchOnMount: "always",
		}
	);

	return memesQuery;
};

export default useMemes;
