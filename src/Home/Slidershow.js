import React from 'react';
import Carousel from 'semantic-ui-carousel-react';
import { Image, Button } from 'semantic-ui-react'
import D77 from '../img/D77.jpg'
import H2 from '../img/H2.jpg'
import H7 from '../img/H7.jfif'
import '../App.css'


const Slidershow = () => {

	let elements = [
		{
			render: () => {
				return <Button fluid> <img src={H2} /></Button>
			}
		},

		{

			render: () => {
				return <Button fluid > <img src={D77} /></Button>
			}
		},

		{
			render: () => {
				return <Button fluid > <img src={H7} /></Button>
			}
		},


	]
	return (
		<div>
			<Carousel
				elements={elements}
				duration={5000}
				animation='slide left'
				showNextPrev={false}
				showIndicators={true}
			/>
		</div>
	)

}



export default Slidershow;