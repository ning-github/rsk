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
    // initialize the component:
    //    when the filtered list is first rendered,
    //      all myItems choices displayed are from all intialItems
    this.setState({myItems: this.state.initialItems});
  },
  render: function(){
    return (
      <div>
        <input placeholder = "Search" onChange={this.filterThroughList}/>
        // TODO: display an inventory list under the search bar
        <List items={this.state.myItems}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
        {
          this.props.items.map(function(eachItem){
            return (
              <li key={eachItem}> {eachItem} </li>
            );
          })
        }
      </ul>
    );
  }
});

React.render(
  <FilteredList />, document.getElementById('filtered-list')
);