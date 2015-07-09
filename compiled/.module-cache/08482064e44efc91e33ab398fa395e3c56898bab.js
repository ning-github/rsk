var FilteredList = React.createClass({displayName: "FilteredList",
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
      React.createElement("div", null, 
        React.createElement("input", {placeHolder: "Search", onChange: this.filterThroughList}), 
        "// TODO: display an inventory list under the search bar", 
        React.createElement(List, {items: this.state.myItems})
      )
    );
  }
});

var List = React.createClass({displayName: "List",
  render: function(){
    return (
      React.createElement("ul", null, 
        
          this.props.items.forEach(function(eachItem){
            return (
              React.createElement("li", null, " ", eachItem, " ")
            );
          })
        
      )
    );
  }
});

React.render(
  React.createElement(FilteredList, null), document.getElementById('filtered')
);