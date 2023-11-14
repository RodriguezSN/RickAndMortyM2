import Card from "./Card";

export default function Cards({ characters }) {
	return (
		<div>
			<div>
				{characters.map((character, index) => (
					<Card
						key={index}
						id={character.id}
						name={character.name}
						status={character.status}
						species={character.species}
						gender={character.gender}
						origin={character.origin.name}
						image={character.image}
						onClose={() => window.alert("Emulamos que se cierra la card")}
					/>
				))}
			</div>
		</div>
	);
}
