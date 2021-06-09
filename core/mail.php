<?php
$name = $_POST['name'];
$email = $_POST['email'];
$org = $_POST['org'];
$select = $_POST['select'];
$enter = "<br>";

$header   = 'MIME-Version: 1.0' . "\r\n";
$header  .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$txt = '';

$arr = array(
    'Имя' => $name,
    'Тема обращения: ' => $select,
    'Email: ' => $email,
    'Обращение: ' => $org
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value.$enter;
};

$mails = mail($email, 'Сообщение от '.$name, $txt, $header);

if($mails){
    echo 1;
} else{
    echo 0;
}
?>