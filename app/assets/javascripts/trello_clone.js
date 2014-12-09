window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#main');
    var options = { $rootEl: $rootEl, boards: TrelloClone.Collections.boards }; 
    var router = new TrelloClone.Routers.Router(options);
    
    Backbone.history.start(); 
  }
};


