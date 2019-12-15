
import React, { Component } from "react";
import { render } from "react-dom";

import ReactDropzone from "react-dropzone";
import request from "superagent";
export default class Upload extends Component {
    onDrop = (files) => {
        // POST to a test endpoint for demo purposes
        const req = request.post('http://localhost:4000/images');
    
        files.forEach(file => {
          req.attach(file.name, file);
        });
    
        req.end();
      }
    
    render() {
        return (
            <div>
               <ReactDropzone onDrop={this.onDrop} >
          Dnnm
        </ReactDropzone> 
            </div>
        )
    }
}
