import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   return <h1>Hello World!</h1>;
// };

class App extends React.Component{
    render(){
        return <h1>Hello World!</h1>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
