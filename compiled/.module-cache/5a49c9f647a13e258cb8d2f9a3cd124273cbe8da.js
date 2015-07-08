var Counter = React.createClass({displayName: "Counter",
  getInitialState: function(){
    return {
      count: 0
    }
  },
  incCount: function(){
    this.setState({
      count: this.state.count + 1
    })
  },
  render: function(){
    return (
      React.createElement("div", null, " count: ", this.state.count, " "),
      React.createElement("button", {onclick: this.incCount}, "click to inc")
    )
  }
});

React.render(React.createElement(Counter, null), document.getElementById('counter'));