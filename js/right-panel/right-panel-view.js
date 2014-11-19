var RightPanel = {
  el: $('#right-panel'),
  states: {
    chooseStockView: {
      el: $('#choose-stock-view'),
      link: $('.link-choose-stock-view')
    },
    expertsView: {
      el: $('#experts-view'),
      link: $('.link-experts-view')
    },
    newsView: {
      el: $('#news-view'),
      link: $('.link-news-view')
    },
    rightPanelCollapsed: {
      el: $('#right-panel-collapsed'),
      link: $('.link-right-panel-collapsed')
    }
  },
  init: function(){
    this.initLinks();
    this.goTo('chooseStockView');
  },
  initLinks: function(){
    var self = this;
    _.each(this.states, function(state, name){
      state.link.on('click', function(){
        self.goTo(name);
      });
    });
  },
  goTo: function(toState){
    _.each(this.states, function(state, stateName){
      if(stateName === toState) {
        state.link.addClass('active');
        state.el.show();
      } else {
        state.link.removeClass('active');
        state.el.hide();
      }
    });
  }
}