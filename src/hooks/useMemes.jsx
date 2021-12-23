import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";
import { useAuthContext } from "../contexts/AuthContext";
import { db } from "../firebase";

const useMemes = (params = {}) => {
	const { currentUser } = useAuthContext();

	// create ref to collection 'memes'
	const memesRef = params.fethOnlyOwn
		? query(
				collection(db, "memes"),
				where("owner", "==", currentUser.uid),
				orderBy("created", "desc")
		  )
		: query(collection(db, "memes"), orderBy("created", "desc"));

	const queryKey = params.fethOnlyOwn ? ["ownMemes"] : ["memes"];

	const memesQuery = useFirestoreQueryData(
		queryKey, // query key
		memesRef, //query
		{
			// options object
			idField: "_id",
			// subscribe: true,
		}
	);

	return memesQuery;
};

export default useMemes;
