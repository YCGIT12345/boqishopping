<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/5/25
 * Time: 16:21
 */
include "public.php";

$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];

$sql="select * from `user` where uname='$uname'";

$res = mysqli_query($conn,$sql);


$n = mysqli_num_rows($res);

if(!$n){
    echo json_encode(array(
        "status"=>0,
        "info"=>"用户名不存在"
    ));
}else{
    $data = mysqli_fetch_assoc($res);

    if($data["upwd"] == $upwd){
        echo json_encode(array(
            "status"=>1,
            "info"=>"成功"
        ));
    }else{
        echo json_encode(array(
            "status"=>2,
            "info"=>"密码错误"
        ));
    }
}