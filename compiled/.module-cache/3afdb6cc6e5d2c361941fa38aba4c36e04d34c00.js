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
      return item.toLowerCase().search(

      )
    });
  }
});