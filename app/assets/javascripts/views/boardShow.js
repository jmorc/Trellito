TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
  
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList);
    
    var listsNewView = new TrelloClone.Views.ListsNew({ model: this.model });
    this.addSubview(".lists-new", listsNewView);
    
    this.model.lists().each(this.addList.bind(this));
  },
  
  addList: function(list) {
    var listShow = new TrelloClone.Views.ListShow({ model: list });
    this.addSubview(".lists", listShow);
  },
  
  removeList: function(list) {
    var subview = _.find(this.subviews(".lists"), 
      function (subview) {
        return subview.model === list;
      }
    );
    
    this.removeSubview(".lists", subview);
  },
  
  render: function(){
    var view = this;
    var renderedContent = this.template({
      board: this.model
    });
    
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.$('.lists').sortable();
    
    return this;
  },
});