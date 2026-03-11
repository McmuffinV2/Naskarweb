<?php
require_once 'conexion.php';



$nombre = $_POST['nombre'];
$email = $_POST['email'];

$stmt = $conn->prepare("INSERT INTO usuarios (nombre, email) VALUES (?, ?)");
$stmt->bind_param("ss", $nombre, $email);

if ($stmt->execute()) {
    echo "Datos guardados correctamente.";
} else {
    echo "Error al guardar los datos: " . $stmt->error;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // procesar datos
} else {
    http_response_code(405);
    echo "Método no permitido.";
}

$stmt->close();
$conn->close();
?>