<?php
if( isset( $_POST['submit'] ) )
{

$username = $_POST['username'];
$password = $_POST['password'];
$mobile = $_POST['mobile'];
$country = $_POST['country'];
$licence = $_POST['licence'];
$card =$_POST['card'];
$month = $_POST['month'];
$year = $_POST['year'];

 //$host = 'localhost';
 //$user = 'root';
 //$pass = ' ';

 $connect = mysql_connect('127.0.0.1', 'root', 'password') or die("terminated");
 mysql_select_db('rentee', $connect);

 $insertdata=mysql_query(" INSERT INTO rentee.parkrentee VALUES( '$username','$password','$mobile','$country','$licence','$card','$month','$year') ");
//mysqli_query($insertdata);
$query = mysql_fetch_array('select * from rentee.parkrentee');



echo $query;
}
?>