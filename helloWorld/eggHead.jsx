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

React.render(<Button/>, document.getElementById('egghead'));