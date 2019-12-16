import React, { Component } from 'react'
import firebase from 'firebase/app';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMIAN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGE,
    appId: process.env.APPID,
    measurementId: process.env.MEASURMENTID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default class Upload extends Component {
    files = (e)=>{
        var fileList = e.target.files;
        var fileName = fileList[0].name
        console.log(fileList[0].name);
        var storage = firebase.storage('gs://hakunamata-52f67.appspot.com').ref(fileName).put();

    }
    render() {
        return (
            <div>
                
                <input type="file" name="files" id="" onChange={this.files}/>
            </div>
        )
    }
}
