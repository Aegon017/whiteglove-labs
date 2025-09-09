<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php'; // Composer autoload

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"] ?? '');
    $email = htmlspecialchars($_POST["email"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    $mail = new PHPMailer(true);

    try {
        // SMTP settings from your .env
        $mail->isSMTP();
        $mail->Host       = "smtp.gmail.com";
        $mail->SMTPAuth   = true;
        $mail->Username   = "training@zoomgroup.com";
        $mail->Password   = "ilhraxnkuouiuipn"; // your Gmail app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
        $mail->Port       = 465;

        // From & To
        $mail->setFrom("training@zoomgroup.com", "Zoom Group Training");
        $mail->addAddress("kondangamalleswararao016@gmail.com"); // send to yourself

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission";
        $mail->Body    = "
            <strong>Name:</strong> {$name}<br>
            <strong>Email:</strong> {$email}<br><br>
            <strong>Message:</strong><br>
            {$message}
        ";

        $mail->send();
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
    }
}