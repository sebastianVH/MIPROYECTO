<?php
/*@author Sebastian Yacono*/ 

try {
    $gdb = new PDO("mysql:dbname=miproyecto;host=127.0.0.1","root","");
} catch (PDOException $e) {
    echo 'Fallo la conexion' . $e->getMessage();
}


?>