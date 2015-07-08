var Counter = React.createClass({
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
      <div className="my-component">
        <h2> count: {this.state.count} </h2>
        <button onClick={this.incCount}>click to inc</button>
      </div>
    );
  }
});

React.render(<Counter/>, document.getElementById('counter'));