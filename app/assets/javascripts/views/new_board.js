TrelloClone.Views.NewBoard = Backbone.View.extend({
  template: JST['boards/new'],
  
  events: {
    'submit form': 'submit' 
  },
  
  render: function() {
    var newForm = this.template();
    this.$el.html(newForm);
    return this
  },
  
  submit: function(event) {
    var view = this;
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newBoard = new TrelloClone.Models.Board(params);
    
    newBoard.save({}, {
      success: function(){
        var boardShowUrl = "boards/" + newBoard.id;
        Backbone.history.navigate(boardShowUrl, { trigger: true });
        return newBoard;
      }
    });
  }
});