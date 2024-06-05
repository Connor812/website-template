<?php

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: POST"); // Allow POST requests
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow Content-Type and Authorization headers
header('Content-Type: application/json');

$requestBody = file_get_contents('php://input');
$data = json_decode($requestBody, true);

$username = $data['username'];
$email = $data['email'];
$password = $data['password'];

if (empty($username) || empty($email) || empty($password)) {
    echo json_encode(array(
        "status" => "error",
        "message" => "Please enter a username, email, and password"
    ));
    exit;
}

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

require_once '../connect/db.php';

$sql = "INSERT INTO `users` (`username`, `email`, `password`) VALUES (?,  ?, ?);";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(array(
        "status" => "error",
        "message" => "Prepare failed"
    ));
    exit;
}

// Bind parameters to the prepared statements
$stmt->bind_param("sss", $username, $email, $hashed_password);

// Execute the statement
if ($stmt->execute()) {
    // Insertion successful
    echo json_encode(array(
        "status" => "success",
        "message" => "User created successfully"
    ));
    $stmt->close();
    exit;
} else {
    // Insertion failed
    echo json_encode(array(
        "status" => "error",
        "message" => "User creation failed"
    ));
    $stmt->close();
    exit;
}
