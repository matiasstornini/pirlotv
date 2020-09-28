<form action="https://pag-pirlotv1.blogspot.com/2020/07/get-calendario.html" method="post">
	<input type="hidden" name="var1" value="<?php include 'esp2.php'; ?>" />
	<!-- <input type="hidden" name="var2" value="valor1" /> -->
	<input type="text" value="" />
	<input type="submit" value="Enviar" />
</form>

	<script>
		var ARCH = "<?php include 'esp2.php';echo'<p></p>';/*include 'premier2.php';*/ ?>"
		window.location.href = "?var1="+ARCH;
	</script>