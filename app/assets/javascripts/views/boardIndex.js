TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],
  
  initialize: function() {
    this.collection = TrelloClone.Collections.boards;
    this.listenTo(this.collection, 'add sync', this.render);
  },
  
  events: {
    "click .deleteBoard": "deleteBoard"
  },
  
  render: function(){
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  },
  
  deleteBoard: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var id = $target.attr("data-id");
    var board = TrelloClone.Collections.boards.getOrFetch(id);
    board.destroy();
    this.render();
  }
  
});