// var Counter = React.createClass({
//   incCount: function(){
//     this.setState({
//       count: this.state.count + 1
//     });
//   },
//   getInitialState: function(){
//     return {
//       count: 0
//     }
//   },
//   render: function(){
//     return (
//       <div className="my-component">
//         <h2> count: {this.state.count} </h2>
//         <button onclick={this.incCount}>click to inc</button>
//       </div>
//     );
//   }
// });

// React.render(<Counter/>, document.getElementById('counter'));


var Counter = React.createClass({displayName: "Counter",
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      React.createElement("div", {class: "my-component"}, 
        React.createElement("h1", null, "Count: ", this.state.count), 
        React.createElement("button", {type: "button", onClick: this.incrementCount}, "Increment")
      )
    );
  }
});

React.render(React.createElement(Counter, null), document.getElementById('counter'));