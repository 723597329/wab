<!doctype html>
<?php
function print_title()
{
	if (isset($_GET['id']))
	{
		echo $_GET['id'];
	}
	else
	{
		echo web;
	}
}
?>
<html>
	<head>
		<style>
		</style>
		<title>
			<?php
			print_title();
			?>
		</title>
	</head>
	<body>
		<h1><a href="hellophp.php">web</a></h1>
		<ol>
		<?php
		echo '안녕하세요'.$_GET['name'];
		$i=2;
		$list=scandir('./data');
		while($i<count($list))
		{
			echo "<li><a href='hellophp.php?id=$list[$i]'>$list[$i]</a></li>\n";
			$i=$i+1;
		}
		?>
		</ol>
		<a href="create.php">create</a>
		<form action='create_prosess.php' method="post">
			<p><input type='text' name='title' placeholder='Title'></p>
			<p><textarea name='description' placeholder="본문을 써주세요"></textarea></P>
			<p><input type=submit></p>
		</form>
	</body>
</html>