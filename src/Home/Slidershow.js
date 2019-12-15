import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image, Button } from  'semantic-ui-react'
import D1 from '../img/D1.png'
import H1 from '../img/H1.jpg'
import H2 from '../img/H2.jpg'
import H3 from '../img/H3.jpg'
import '../App.css'


const  Slidershow  = () => {
	
	let  elements  = [
		{
			render:()=>{
				return <Button  fluid> <img src ={H2} /></Button>
			}
		},
		
		{
			
			render:()=>{
				return <Button  fluid > <img src ={H1}/></Button>
			}
        },
        
        {
			render:()=>{
				return <Button  fluid > <img src ={H3} style ={{}}/></Button>
			}
        },
   
        
	]
	return (
		<div>
			<Carousel
				elements  =  {  elements  }
				duration  ={5000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
		</div>
    )

}



export  default  Slidershow;