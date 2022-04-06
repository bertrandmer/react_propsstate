import "./App.css";
import { Component } from "react";
 
class App extends Component {
  constructor(props) {
    super(props);

    // set default state
    
    const boxes= [];
    const numBoxes= 24;
    for(let i = 0;i< numBoxes;i++){
      boxes.push({
        id: i,
       color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})'
      })
    }
    this.state = { boxes };
    // bind methods to this
  }

  
  handleBoxClick(e) {
    const newBoxes = this.state.boxes.map((box) => {
      if (box.id == e.target.id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
      return box;
    })
  }
  getRandomColor(){
    const rgb = Math.round(Math.random() * 255);
    return rgb;
  }
  render() {
    const renderBoxes = this.state.boxes.map((box) =>(
      <Box
        key ={box.id}
        id ={box.id}
        color ={box.color}
        handleClick ={this.handleBoxClick}
        />
    )

    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
