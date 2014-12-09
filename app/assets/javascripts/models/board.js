TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: '/api/boards',
  
  lists: function(){
    this._lists = this._lists ||
          new TrelloClone.Collections.BoardLists([], { board: this });
    return this._lists;
  },
  
  parse: function (jsonResp) {
    // check if jsonResp has a 'lists' property
    if (jsonResp.lists) {
      this.lists().set(jsonResp.lists, { parse: true });
      delete jsonResp.lists;
    }
    // call set on this.lists() with jsonResp.lists
    // delete jsonResp.lists
    return jsonResp;
  }
});