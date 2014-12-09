TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  
  render: function(){
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  },
  
  events: {
    "click .delete-card": "destroyCard"
  },
  
  destroyCard: function(event){
    event.preventDefault();
    // var $target = $(event.currentTarget);
 //    var id = $target.attr("data-id");
 //    var card =
   this.model.destroy();
  }
  
});