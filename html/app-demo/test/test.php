<!DOCTYPE html>
<html>
<head>
	<title>test</title>
</head>
<body>
<div id="app">
  <h1>{{message}} {{text}}</h1>
</div>

<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script type="text/javascript">
var prueba = "texto de la variable";
var app = new Vue({
  el: '#app',
  data: {
    message: prueba,
    text: "222"
  }
})

</script>
</body>
</html>