TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.boards = options.boards;
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    '': 'boardIndex',
    'boards/new': 'new',
    'boards/:id': 'show'
    
  },
  
  boardIndex: function() {
    this.boards.fetch();
    var boardIndexView = new TrelloClone.Views.BoardIndex({ boards: this.boards });
    this._swapView(boardIndexView);
  },
  
  show: function(id) {
    var board = this.boards.getOrFetch(id);
    var boardShowView = new TrelloClone.Views.BoardShow({ model: board });
    // board.fetch();
    this._swapView(boardShowView);
  },
  
  new: function(){
    var newBoard = new TrelloClone.Views.NewBoard();
    this._swapView(newBoard);
  }, 
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});