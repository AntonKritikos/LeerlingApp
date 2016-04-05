<?php

$mysqli = new mysqli('localhost', 'root', '', 'pro');
$result = $mysqli->query("SELECT * FROM `table 2`");
$students = array();
while ($test = $result->fetch_assoc()) {
  $students[] = $test;
}
// var_dump ($students);
echo json_encode($students);
?>
