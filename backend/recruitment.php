<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow the Content-Type header in requests
header("Access-Control-Allow-Headers: Content-Type");

// MySQL database connection
$servername = "localhost"; // Change this if your database is hosted elsewhere
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$dbname = "zertaweb"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle incoming POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $conn->real_escape_string($_POST['fullName']);
    $email = $conn->real_escape_string($_POST['email']);
    $role = $conn->real_escape_string($_POST['role']);
    $experience = $conn->real_escape_string($_POST['experience']);
    $socialMedia = $conn->real_escape_string($_POST['link']);
    $hearAbout = $conn->real_escape_string($_POST['how']);
    $cv = file_get_contents($_FILES['cv']['tmp_name']);

    // Insert data into MySQL database
    $sql = "INSERT INTO applications (name, email, role, experience, social_media, hear_about, cv) VALUES ('$name', '$email', '$role', '$experience', '$socialMedia', '$hearAbout', ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("b", $cv);
    $stmt->execute();

    // Send email
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.harkone.com.ng';  // Specify your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'mail@harkone.com.ng'; // SMTP username
        $mail->Password = 'Whyarewefriends1';   // SMTP password
        $mail->SMTPSecure = 'ssl';            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                    // TCP port to connect to

        //Recipients
        $mail->setFrom("'$email'", "'$fullName'");
        $mail->addAddress('mail@harkone.com.ng', 'Admin ZertaWeb');     // Add a recipient

        //Attachments
        $mail->addAttachment($_FILES['cv']['tmp_name'], $_FILES['cv']['name']);    // Optional name

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'New Job Application';
        $mail->Body    = "Name: $name <br> Email: $email <br> Role: $role <br> Years of Experience: $experience <br> Social Media Handles: $socialMedia <br> How did you hear about this Job opening? $hearAbout";

        $mail->send();
        $response = ['success' => true, 'message' => 'Application submitted successfully'];
    } catch (Exception $e) {
        $response = ['success' => false, 'message' => "Application could not be submitted. Mailer Error: {$mail->ErrorInfo}"];
    }

}else{
    $response = ['success' => false, 'message' => 'Invalid request method'];
}

// Set the appropriate content type header
header('Content-Type: application/json');
// Output the JSON response
echo json_encode($response);

$conn->close();