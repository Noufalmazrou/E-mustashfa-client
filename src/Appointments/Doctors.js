import React from 'react'
import { Card, Icon ,Container } from 'semantic-ui-react'
import D1 from '../img/D1.png'
import Footer from '../Footer'
import Slidershow from '../Home/Slidershow'


const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardExampleCardProps = () => (
  <div>
<Slidershow/>

  <Card
    image={D1}
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />

<Card
    image={D1}
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
   <Card
    image={D1}
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
   <Card
    image={D1}
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
<Footer/>

</div>
 


)

export default CardExampleCardProps