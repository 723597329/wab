<!doctype html>
<?php
echo 1;
echo $_POST['name'];
echo $_POST['title'];
echo $_POST['description'];
file_put_contents('data/'.$_POST['title'],$_POST['description']);
header('Location: /hellophp/hellophp.php?id='.$_POST['title']);
?>