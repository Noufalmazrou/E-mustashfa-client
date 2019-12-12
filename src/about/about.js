import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleCelledInternally = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='http://ordibeheshtshifa.com/wp-content/uploads/2018/09/doctor-img2.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://image.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg' />
      </Grid.Column>
    </Grid.Row>

    We will help to find health, to everyone.
The optimum ratio of price and quality responsible and conscientious approach
On the basis of the medical center “Nordis” can be given a thorough examination of the body 
and get the advice of highly qualified specialists in various fields of medicine. According to studies, 
our doctors will make an individual program of prevention and treatment of identified diseases, directed to a surgical treatment if necessary. 
In today’s operational department conducted a wide range of operations under local and general anesthesia.

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://www.publicdomainpictures.net/pictures/210000/nahled/doctor-1490804718D0I.jpg' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://www.publicdomainpictures.net/pictures/210000/nahled/doctor-1490804731WQI.jpg' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://resize.hswstatic.com/w_907/gif/becoming-doctor.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCelledInternally