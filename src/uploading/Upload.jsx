import React, { Component } from 'react'
import { storage } from './config'
import { Segment,Icon ,Button ,Header } from 'semantic-ui-react'

//you have to pass a function in props named getUrl to retrive the link 
export default class Upload extends Component {
  constructor() {
    super()
    this.state = {
      uploded_img: null,
      img_url: null
    }
    this.FileSelectedHandler = this.FileSelectedHandler.bind(this)
    this.fileUploadHandler = this.fileUploadHandler.bind(this)
  }

  fileUploadHandler() {
    console.log('hiiiiii');

    const { uploded_img } = this.state
    console.log(uploded_img)
    const UploadTask = storage.ref(`prodimg/${uploded_img.name}`).put(uploded_img)
    console.log(uploded_img.name);

    UploadTask.on('state_changed',
      (snapshot) => {
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage.ref('prodimg').child(uploded_img.name).getDownloadURL().then(url => {
          this.setState({
            img_url: url
          })

          this.props.getUrl(url)
        })
      })
  }
  FileSelectedHandler = event => {
    if (event.target.files[0]) {
      const img = event.target.files[0];
      this.setState({
        uploded_img: img
      })
      console.log(this.state.uploded_img);
      console.log(img);
    }
  }
  render() {
    return (
      <div>
        <Segment placeholder>
          <Header icon>
            <Icon name='pdf file outline' />
          </Header>
          <input className="uplading" type="file" name="files" id="" onChange={this.FileSelectedHandler} />
          <button  className="submit" onClick={() => this.fileUploadHandler()}>Submit</button>

        </Segment>

      </div>
    )
  }
}
