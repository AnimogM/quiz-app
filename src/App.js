import Card from "./Card";
import allGiftCards from "./data";

const App = () => {
	return (
		<>
			<header>
				<h1>Gift Cards</h1>
			</header>

			<main>
				<section className="card-container">
					{allGiftCards.map((card) => {
						return <Card key={card.id} {...card} />;
					})}
				</section>
			</main>
		</>
	);
};

export default App;
