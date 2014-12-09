TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,
  
  initialize: function(model, options) {
    this.board = options.board;
  },
  
  comparator: 'ord'
  
})