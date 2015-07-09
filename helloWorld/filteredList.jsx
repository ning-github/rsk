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
    // initialize the component when the filtered list is first rendered
    this.setState({items: this.state.initialItems});
  },
  render: function(){
    return (
      <div>
        <input placeHolder = "Search" onChange={this.filterThroughList}/>
        // TODO: display an inventory list under the search bar
      </div>
    );
  }
});

var List = React.createClass({
  
});