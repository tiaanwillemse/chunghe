
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/yahoo/yahoo-min.js" ></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/event/event-min.js" ></script> 
<script type="text/javascript">
    var YUE = YAHOO.util.Event;
    YUE.on(window, 'load', function(){
	document.body.innerHTML += '<p>window.onload fired</p>';
    })
    YUE.onDOMReady(function(){
	document.body.innerHTML += '<p>onDOMReady fired</p>';
    })
</script>

<img width="300" height="240" src="http://www.nasa.gov/images/content/84857main_EC04-0325-23_lg.jpg?<?=time()?>"/>


