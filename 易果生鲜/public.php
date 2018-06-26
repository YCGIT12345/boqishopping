<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/24
 * Time: 16:09
 */

header("content-type:text/html;charset=utf8");

$db_hostname = "localhost";
$db_username = "root";

$db_password = "root";

$db_name = "db_1802";
$conn = new mysqli($db_hostname,$db_username,$db_password,$db_name);

if($conn->connect_error){
    die("连接失败".$conn->connect_error);
}
$conn->query("set names utf8");