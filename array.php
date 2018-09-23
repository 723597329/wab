<!doctype html>
<html>
	<head>
	</head>
	<body>
		<h1>array</h1>
		<?php
		$coworkers=array('agoing','leezche','duru','taeho');
		echo $coworkers[1].'<br>';
		echo $coworkers[3].'<br>';
		//배열의 개수를 구하는 함수 count
		echo count($coworkers);
		array_push($coworkers,'graphittie');
		var_dump($coworkers);
		?>
	</body>
</html>