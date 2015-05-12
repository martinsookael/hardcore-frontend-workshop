"use strict";

$(document).ready(function() {

  // connect-livereload via Gulp autorefreshes the site.
  //$("body").append('<script src="http://localhost:35729/livereload.js?snipver=1"></script>');

  // hide loadin + show app
  $("#loading").out()
  $("#app").in("fadeIn")

  function clearApp(){
    menu.out()

    favouriteOne.out()
    favouriteTwo.out()
    favouriteThree.out()

    e404.out()

    $('html,body').scrollTop(0)
  }

  // VIEWS
  // Front page view
  var indexView = function () {
    clearApp()
    window.location = "#/menu"
  }

  // VIEWS
  // Front page view
  var menuView = function () {
    clearApp();
    menu.in();
    menuController();
  }

  var favouriteOneView = function () {
    clearApp();
    favouriteOne.in();
    favouriteOneController();
  }

  var favouriteTwoView = function () {
    clearApp();
    favouriteTwo.in();
    favouriteTwoController();
  }

  var favouriteThreeView = function () {
    clearApp();
    favouriteThree.in();
    favouriteThreeController();
  }


  // MODEL
  // Set up routes
  crossroads.addRoute('/', indexView);
  crossroads.addRoute('/menu', menuView);
  crossroads.addRoute('/1', favouriteOneView);
  crossroads.addRoute('/2', favouriteTwoView);
  crossroads.addRoute('/3', favouriteThreeView);

  // that's a 404 if the route structure is not matched
  crossroads.bypassed.add(function(request){
    clearApp()
    e404.in()
  })

  // start routing
  route(crossroads);

  function menuController() {

  }

  function favouriteOneController() {

  }

  function favouriteTwoController() {

  }


  function favouriteThreeController() {

  }


});
