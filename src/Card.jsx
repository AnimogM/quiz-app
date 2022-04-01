import React from 'react'

const Card = ({title, currencies}) => {
    return (
		<div className="card">
			<h3>{title}</h3>
			<div>
				<p>Exchange Currencies: </p>
				<div className="curr">
					{currencies.map((curr) => {
						return <button>{curr}</button>;
					})}
				</div>
			</div>
		</div>
	);
}

export default Card