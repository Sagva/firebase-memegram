import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

const useMemes = () => {
	// create ref to collection 'memes'
	const memesRef = query(collection(db, "memes"), orderBy("created", "desc"));

	const memesQuery = useFirestoreQueryData(
		["memes"], // query key
		memesRef,  //query
		{          // options object
			idField: "_id",
			// subscribe: true,
		},
		
	);

	return memesQuery;
};

export default useMemes;
