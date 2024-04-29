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
$username = "zertang_web"; // Change this to your database username
$password = "zertang_web"; // Change this to your database password
$dbname = "zertang_web"; // Change this to your database name

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

    $email = $conn->real_escape_string($data['email']);

    // Insert data into MySQL database
    $sql = "INSERT INTO subscribers (email) VALUES ('$email')";

    if ($conn->query($sql) === TRUE) {
        // Send email
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->isSMTP();
            $mail->Host = '	mail.zerta.ng';  // Specify your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'support@zerta.ng'; // SMTP username
            $mail->Password = 'Nigeria@1019';   // SMTP password
            $mail->SMTPSecure = 'ssl';            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 465;                    // TCP port to connect to

            //Recipients
            $mail->setFrom('zertahq@gmail.com', 'ZertaWeb');
            $mail->addAddress($email);     // Add a recipient

            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Subscription Confirmation';
            $mail->Body    = "Thank you for subscribing to our newsletter!";

            $mail->send();
            $response = ['success' => true, 'message' => 'Subscribed successfully'];
        } catch (Exception $e) {
            $response = ['success' => false, 'message' => "Failed to send confirmation email. Mailer Error: {$mail->ErrorInfo}"];
        }
    } else {
        $response = ['success' => false, 'message' => 'Failed to subscribe'];
    }

    echo json_encode($response);
}

$conn->close();
?>
