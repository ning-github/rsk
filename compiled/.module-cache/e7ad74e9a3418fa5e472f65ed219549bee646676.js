var Counter = React.createClass({displayName: "Counter",
  incCount: function(){
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
      React.createElement("div", {className: "my-component"}, 
        React.createElement("h2", null, " count: ", this.state.count, " "), 
        React.createElement("button", {onclick: this.incCount}, "click to inc")
      )
    );
  }
});

React.render(React.createElement(Counter, null), document.getElementById('counter'));


// var Counter = React.createClass({
//   incrementCount: function(){
//     this.setState({
//       count: this.state.count + 1
//     });
//   },
//   getInitialState: function(){
//      return {
//        count: 0
//      }
//   },
//   render: function(){
//     return (
//       <div class="my-component">
//         <h1>Count: {this.state.count}</h1>
//         <button type="button" onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// });

// React.render(<Counter/>, document.getElementById('counter'));