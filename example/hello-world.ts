var Singleton = (function() {

  var Singleton = function() {
    this.type = "0";
  }
  var instance = null;

  var createInstance = function() {
    instance = new Singleton();
    return instance;
  }

  return {
    getInstance : function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };

})();

​
function Client() {}

Client.prototype.test = function() {

  var s1 = Singleton.getInstance();
  var s2 = Singleton.getInstance();

  if(s1 === s1) {
    console.log("Both variables contain the same instance.");
  }else{
      console.log("Variables contain different instances.");
  }
}

new Client().test();
