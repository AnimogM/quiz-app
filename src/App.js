import { useGlobalContext } from "./context";
import Form from "./Components/Form";
import Loading from "./Components/Loading";
import Modal from "./Components/Modal";
const App = () => {
	const { waiting, loading, index, questions } = useGlobalContext();

	console.log(questions);

	if (waiting) return <Form />;
	if (loading) return <Loading />;
	else {
		const { incorrect_answers, correct_answer, question } =
			questions[index];
		const answers = [...incorrect_answers, correct_answer];
		return (
			<main className="min-h-screen flex items-center justify-center">
				{/* <Modal /> */}
				<div className="p-8 bg-white rounded-lg max-w-5xl w-3/4 min-h-[300px]">
					<h1 className="font-bold text-xl">Quiz App</h1>
					<p className="text-right font-medium text-green-600">
						Correct:{" "}
						<span>
							{0}/{index}
						</span>
					</p>
					<div className="mt-3">
						<p
							className="text-center"
							dangerouslySetInnerHTML={{ __html: question }}
						/>
						<div className="flex flex-col space-y-4 items-center">
							{answers.map((answer, index) => {
								return (
									<button
										key={index}
										className="bg-blue-400 text-white p-2"
										dangerouslySetInnerHTML={{
											__html: answer,
										}}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</main>
		);
	}
};

export default App;
