var FilteredList = React.createClass({
  getInitialState:  function(){
    return {
      initialItems: [
        'Apples',
        'Brocolli',
        'Chicken',
        'Duck',
        'Eggs',
        'Fish',
        'Granola',
        'Hash Browns'
      ],
      myItems: []
    };
  },
  filterThroughList: function(){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(eachItem){
      // all this does is check if the letter you enter is in the list
      return eachItem.toLowerCase().search(event.target.value.toLowerCase())!== -1;
    });
    this.setState({myItems: updatedList});
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems});
  },
  render: function(){
    return (
      <div>
        <input onChange={this.filterThroughList}/>

      </div>
    );
  }
});

