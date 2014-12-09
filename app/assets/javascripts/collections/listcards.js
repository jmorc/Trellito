TrelloClone.Collections.ListCards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,
  
  initialize: function(model, options) {
    this.list = options.list;
  },
  comparator: 'ord',
})
