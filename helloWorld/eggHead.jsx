var Button = React.createClass({
  getInitialState: function(){
    return {val:0};
  },
  // increment state val count
  update: function(){
    this.setState({val: this.state.val + 1});
  },
  // render
  render: function(){
    console.log(this.state.val);
    return (
      <button onClick={this.update}>{this.state.val}</button>
    )
  }

});

var App = React.createClass({
  mount: function(){
    // render the Button component from earlier
    React.render(<Button />, document.getElementById('inc')); 
  },
  unmount: function(){
    // unmount
    React.unmountComponentAtNode(document.getElementById('inc'));
  },
  render: function(){
    return (   
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id='inc'></div>
      </div>
    )
  }
});

// React.render(<Button/>, document.getElementById('egghead'));
React.render(<App />, document.getElementById('egghead'));