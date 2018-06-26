<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/24
[}:"? * Time: 16:08
 */
include "public.php";
$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];


$sql = "insert into `user` (uname,upwd) values ('$uname','$upwd')";

$rows = mysqli_query($conn,$sql);//受影响的行数
//后端要返回给前端的是一个json对象
if($rows){
    echo json_encode(array(
        "status"=>1,
        "info"=>"成功"
    ));
}else{
    echo json_encode(array(
        "status"=>0,
        "info"=>"失败"
    ));
}
