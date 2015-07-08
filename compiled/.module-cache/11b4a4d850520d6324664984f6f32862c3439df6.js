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
  filter: function(){
    var updatedList = this.state.intialItems;
  }
});