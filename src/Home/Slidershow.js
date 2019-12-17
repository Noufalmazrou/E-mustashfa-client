import React from 'react';
import Carousel from 'semantic-ui-carousel-react';
import { Image, Button } from 'semantic-ui-react'
import s2 from '../img/s2.jpg'
import sl8 from '../img/sl8.jpg'
import H2 from '../img/H2.jpg'
import ss from '../img/ss.png'
import s11 from '../img/s11.jpg'
import s9 from '../img/s9.jpg'
import s15 from '../img/s15.jpg'






import '../App.css'


const Slidershow = () => {

	let elements = [

		{
			render: () => {
				return <Button fluid > <img src={H2} /></Button>
			}
		},

		{
			render: () => {
				return <Button fluid > <img src={s2} /></Button>
			}
		},

		{
			render: () => {
				return <Button fluid > <img src={s15} /></Button>
			}
		},


		{
			render: () => {
				return <Button fluid > <img src={ss} /></Button>
			}
		},


		{
			render: () => {
				return <Button fluid > <img src={s9} /></Button>
			}
		},
	]
	return (
		<div>
			<Carousel className="slide"
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