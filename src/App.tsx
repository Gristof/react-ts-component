import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import "./App.css";
import { Card } from "./components/Card";

function App() {
	return (
		<>
			<section className="card-container">
				<Card
					title="My first React Card"
					subtitle="with Typescript"
					body="This is my first React and TypeScript component. I made this with help of Chris from Coding in Public."
					image={{ src: "https://placehold.co/600x400", alt: "Placeholder image" }}
					badge={{ text: "Awesome", filled: false }}
					indicator="Whoop"
					link={{
						text: "Go to destination",
						href: "#",
						variant: "primary",
						filled: true,
						icon: <ArrowLongRightIcon />,
					}}
				/>
			</section>
		</>
	);
}

export default App;
