TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
  
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    
    var cardsNewView = new TrelloClone.Views.CardsNew({ model: this.model });
    this.addSubview(".cards-new", cardsNewView);
    this.model.cards().each(this.addCard.bind(this)); 
  },
  
  addCard: function(card) {
    var cardShow = new TrelloClone.Views.CardShow({ model: card });
    this.addSubview(".cards", cardShow);
  },
  
  removeCard: function(card) {
    var subview = _.find(this.subviews(".cards"), 
      function (subview) {
        return subview.model === card;
      }
    );
    
    this.removeSubview(".cards", subview);
  },
  
  render: function(){
    var view = this;
    var renderedContent = this.template({
      list: this.model
    });
    
    this.$el.html(renderedContent);
    this.attachSubviews();
   
    
    return this;
  },
  
  
  
});
