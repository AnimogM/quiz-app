import axios from "axios";
import { useState, useContext, useEffect, createContext } from "react";

const API_ENDPOINT = "https://opentdb.com/api.php?";

const tempUrl =
	"https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [index, setIndex] = useState(0);
	const [questions, setQuestions] = useState([]);

	const fetchApi = async (url) => {
		setWaiting(false);
		setLoading(true);
		try {
			const response = await axios.get(url);
			if (response) {
				console.log(response)
				// setWaiting(true)
				// setLoading(false)
				// setError(true)
				const { results } = response.data;
				if (results.length > 0){
					setLoading(false)
					setQuestions(results)
					setError(false);
				}
			} else {
				setWaiting(true);
				setLoading(false);
				setError(true);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchApi(tempUrl);
	}, []);

	return (
		<AppContext.Provider value={{ waiting, loading, index, questions, error}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;

export const useGlobalContext = () => {
	return useContext(AppContext);
};
