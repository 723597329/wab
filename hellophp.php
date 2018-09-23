
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
<?php
file_put_contents('data/'.$_POST['title'],$POST['description']);
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
		<h2>
			<?php
			print_title();
			?>
		</h2>
		<p>
			<?php
			echo file_get_contents("data/".$_GET['id']);
			?>
		</p>
	</body>
</html>