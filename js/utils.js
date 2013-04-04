(function(){
  var utils = window.utils = window.utils || {};

  if (jQuery.browser.msie) XMLHttpRequest = XDomainRequest;

  utils.dom = jQuery;
  utils.getScript = jQuery.getScript;
  utils.domready = jQuery;
  utils.support = jQuery.support;
  utils.compile = Handlebars.compile;

  utils.filter = function(set, fn){
    var filtered = [];
    for (var i = 0, l = set.length; i < l; ++i){
      if (fn(set[i])) filtered.push(set[i]);
    }
    return filtered;
  };

  utils.ajax = function(method, url, data, callback){
    switch (method){
      case "get":     method = "GET";     break;
      case "post":    method = "POST";    break;
      case "del":     method = "DELETE";  break;
      case "put":     method = "PUT";     break;
      case "patch":   method = "PUT";     break;
    }

    if (typeof data === "function"){
      callback = data;
      data = {};
    }

    if (method === "GET"){
      url += utils.queryParams(data);
      data = null;
    }

    var ajax = {
      type: method
    , url: url
    , xhrFields: { withCredentials: true }
    , crossDomain: true
    , success: function(results){
        results = results || {};
        callback && callback(results.error, results.data, results.meta);
      }
    , error: function(error, results, res, r){
        callback && callback(error.responseText ? JSON.parse(error.responseText).error : error);
      }
    };

    if (data) ajax.data = data;

    $.ajax(ajax);
  };

  if (jQuery.browser.msie){
    utils.ajax = function(method, url, data, callback){
      // XDomainRequest uses lowercase method names
      switch (method){
        case "GET":     method = "get";     break;
        case "POST":    method = "post";    break;
        case "DELETE":  method = "del";     break;
        case "PUT":     method = "put";     break;
        case "PUT":     method = "patch";   break;
      }

      if (typeof data === "function"){
        callback = data;
        data = {};
      }

      if (method === "get"){
        url += utils.queryParams(data);
        data = null;
      }

      var req = new XDomainRequest();
      req.open(method, url);
      req.contentType = 'application/json';

      req.onload = function(e){
        if (req.responseText){
          var res = JSON.parse(req.responseText);
          callback(res.error, res.data, res.meta);
        }
      };
      req.send(data && method != "get" ? JSON.stringify(data) : null);
    }
  }

  utils.get = function(url, params, callback){
    utils.ajax('get', url, params, callback);
    return utils
  };

  utils.post = function(url, data, callback){
    utils.ajax('post', url, data, callback);
    return utils
  };

  utils.put = function(url, data, callback){
    utils.ajax('put', url, data, callback);
    return utils
  };

   utils.patch = function(url, data, callback){
    utils.ajax('patch', url, data, callback);
    return utils
  };

  utils.del = function(url, data, callback){
    utils.ajax('delete', url, data, callback);
    return utils
  };

  utils.queryParams = function(data){
    if (typeof data !== "object") return "";
    var params = "?";
    for (var key in data){
      params += key + "=" + data[key] + "&";
    }
    return params.substring(0, params.length - 1);
  };


  utils.noop = function(){};
})();