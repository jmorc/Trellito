TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: '/api/boards',
  model: TrelloClone.Models.Board, 
  getOrFetch: function (id) {
    var board = this.get(id);
    if (!board) {
      var board = new TrelloClone.Models.Board({id: id});
      var that = this;
      board.fetch({ 
        success: function() {
          that.add(board);
        }
      });
    } else {
      board.fetch();
    }
    return board;
  },
  
})

TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();
// TrelloClone.Collections.boards.fetch();