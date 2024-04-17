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
    // Get JSON content
    $data = json_decode(file_get_contents('php://input'), true);

    $fullName = $conn->real_escape_string($data['fullName']);
    $email = $conn->real_escape_string($data['email']);
    $reason = $conn->real_escape_string($data['reason']);
    $message = $conn->real_escape_string($data['message']);

    // Insert data into MySQL database
    $sql = "INSERT INTO contacts (fullName, email, reason, message) VALUES ('$fullName', '$email', '$reason', '$message')";

    if ($conn->query($sql) === TRUE) {
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
            $mail->addAddress('zertahq@gmail.com', 'Admin ZertaWeb');     // Add a recipient

            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'New Contact Form Submission';
            $mail->Body    = "Name: $fullName <br> Email: $email <br> Reason: $reason <br> Message: $message";

            $mail->send();
            // echo 'Message has been sent';
            $response = ['success' => true, 'message' => 'Message sent successfully'];

        } catch (Exception $e) {
            // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            $response = ['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"];
        }
    } else {
        // echo "Error: " . $sql . "<br>" . $conn->error;
        $response = ['success' => false, 'message' => 'Failed to store message in database'];
    }

}else{
    $response = ['success' => false, 'message' => 'Invalid request method'];
}

// Set the appropriate content type header
header('Content-Type: application/json');
// Output the JSON response
echo json_encode($response);

$conn->close();
