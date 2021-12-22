import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";
import { useAuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";

const useOwnMemes = () => {
	const { currentUser } = useAuthContext();
	console.log(`currentUser`, currentUser);

	// create ref to collection 'memes'
	const ownMemesRef = query(
		collection(db, "memes"),
		where("owner", "==", currentUser.uid),
		orderBy("created")
	);

	console.log(`ownMemesRef`, ownMemesRef);
	
	const ownMemesQuery = useFirestoreQueryData(
		["memes"],
		ownMemesRef,
		{
			idField: "_id",
			subscribe: true,
		},
		{
			refetchOnMount: "always",
		}
	);

	return ownMemesQuery;
};

export default useOwnMemes;
