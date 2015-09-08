<?php
    require 'TempService.php';

    $temp = $_GET['temp'];
    $result = 0.0;

    if(is_numeric($temp)){
        $result = TempService::getCalc($temp);
    }
    
    echo $result;
?>