TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',
  
  cards: function(){
    this._cards = this._cards ||
          new TrelloClone.Collections.ListCards([], { board: this });
    return this._cards;
  },
  
  parse: function (jsonResp) {
    // check if jsonResp has a 'lists' property
    if (jsonResp.cards) {
      this.cards().set(jsonResp.cards, { parse: true });
      delete jsonResp.cards;
    }
    // call set on this.lists() with jsonResp.lists
    // delete jsonResp.lists
    return jsonResp;
  }
})