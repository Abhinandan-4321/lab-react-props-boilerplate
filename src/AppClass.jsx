import { Component } from "react";
import "./App.css"
// import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  // code here
  render(){
    const imgData  = this.props.data;
    return (
      <>
      <h1>Kalvium Gallery AppClass.jsx</h1>
      <div className="row">
        {/* <h1>JSX Class Gallery</h1> */}
        {
          imgData.map((image) => {
            return (
              <div className="column" key={image.id}>
                <img src={image.img}/>
              </div>
            )
          })
        }
      </div>
        </>
    )
  }
}
