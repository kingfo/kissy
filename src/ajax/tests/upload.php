<?php
header("Content-Type:text/html;");
//header("Expires:Mon, 20 Jun 2011 13:31:42 GMT");
sleep(1);
echo "{\"test\":" . json_encode($_POST["test"]) . ",\"test2\":" . json_encode($_POST["test2"]) . "}";
?>
