(function() {
  window.SpinGoWidgets = [];
  window.SpinGoWidgetBaseConfig = {
    "authToken": "c3daa235d52307509da19198a61cccac67c1e1e6575392a9f659f6b6fa802cd5",
    "calendarUrl": "http://www.ticketsarasota.com/calendar/",
    "calendarId": 587,
    "calendarApiHost": "calendarapi.spingo.com",
    "loggingApiHost": "loggingapi.spingo.com",
    "mainColor": "#CC6411",
    "featuredColor": "#D6823F"
  };
  window.SpinGoWidgetUrl = '//d16twqtnxc0kgx.cloudfront.net/apps/list-widget/v1.3.13/list-widget.js'

  window.SpinGoWidget = (function() {
    function SpinGoWidget(config) {
      this.config = config;
      this.defaults = SpinGoWidgetBaseConfig;
      SpinGoWidgets.push(this);
    }
    return SpinGoWidget;
  })();


  if (typeof define === 'function' && define.amd) {
    define(function() {
      require([SpinGoWidgetUrl], function() {});
      return window.SpinGoWidget;
    });
  } else {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", SpinGoWidgetUrl);
    head.appendChild(script);
  }
}())
