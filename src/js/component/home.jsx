import React from "react";
//include images into your bundle
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div>
		<NavBar />
			<div className="container">

				<Jumbotron />
				<div className="row">
					<div className="row row-cols-1 row-cols-md-4 row-cols-sm-6 mb-3">
						<Cards cardsTitle="Card Tittle"cardsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis earum delectus ipsam aliquid esse libero. Repellat, earum officiis quos molestiae nihil praesentium recusandae ipsam ratione, error a, tempore nostrum."/>
						<Cards cardsTitle="Card Tittle"cardsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis earum delectus ipsam aliquid esse libero. Repellat, earum officiis quos molestiae nihil praesentium recusandae ipsam ratione, error a, tempore nostrum."/>
						<Cards cardsTitle="Card Tittle"cardsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis earum delectus ipsam aliquid esse libero. Repellat, earum officiis quos molestiae nihil praesentium recusandae ipsam ratione, error a, tempore nostrum."/>
						<Cards cardsTitle="Card Tittle"cardsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis earum delectus ipsam aliquid esse libero. Repellat, earum officiis quos molestiae nihil praesentium recusandae ipsam ratione, error a, tempore nostrum."/>

					</div>


				</div>

			</div>
		<Footer/>
		</div>

			);
};

			export default Home;
