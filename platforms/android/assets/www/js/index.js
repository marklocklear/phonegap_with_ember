App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Shot.find();
  }
});

App.Shot = Ember.Model.extend({
  name: Ember.attr(),
  avatar_url: Ember.attr()
});

App.Shot.adapter = Ember.RESTAdapter.create();

//get the users api_key from phones db here and assign to variable
var api_key = '12d2d06fb2f6a786ac75b32625cf83a1';

App.Shot.url = 'http://dcadev.herokuapp.com/api/v1/shots?api_key=' + api_key;

App.Shot.collectionKey = "shots";
