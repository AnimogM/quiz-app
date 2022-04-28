import { useGlobalContext } from "../context";

const Form = () => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();
  return (
    <div className="justify-center flex items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 "
      >
        <h2 className="text-3xl font-medium">Setup Quiz</h2>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="amount">
            Number of Questions
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.amount}
            onChange={handleChange}
            min={5}
            max={50}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="category">
            Select Category
          </label>
          <select
            id="category"
            name="category"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.category}
            onChange={handleChange}
           
          >
            <option value="sports">sports</option>
            <option value="politics">politics</option>
            <option value="history">history</option>
            <option value="science">science</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="difficulty">
            Select Difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.difficulty}
            onChange={handleChange}
           
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 font-medium" htmlFor="type">
            Select Type
          </label>
          <select
            id="type"
            name="type"
            className="bg-gray-200 p-2 rounded-md outline-0 focus:bg-gray-300"
            value={quiz.type}
            onChange={handleChange}
           
          >
            <option value="multiple">multiple choice</option>
            <option value="boolean">true or false</option>
           
          </select>
        </div>
        {error && (
          <p className="text-red-600">
            Can't Generate Questions, Please Try Different Options
          </p>
        )}
        <button
          type="submit"
          className="bg-yellow-600 rounde-md w-full p-2 text-white hover:bg-yellow-500"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Form;
