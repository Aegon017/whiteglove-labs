<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

header("Content-Type: application/json");

foreach (['name', 'email', 'message'] as $field) {
    if (empty($_POST[$field])) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Missing required field: $field"]);
        exit;
    }
}

$name    = htmlspecialchars($_POST["name"]);
$email   = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST["message"]);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $_ENV["SMTP_HOST"];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV["SMTP_USERNAME"];
    $mail->Password   = $_ENV["SMTP_PASSWORD"];
    $mail->SMTPSecure = $_ENV["SMTP_ENCRYPTION"];
    $mail->Port       = (int)$_ENV["SMTP_PORT"];

    $mail->setFrom($_ENV["SMTP_FROM_EMAIL"], $_ENV["SMTP_FROM_NAME"]);
    $mail->addAddress($_ENV["SMTP_TO_EMAIL"]);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission from $name";
    $mail->Body    = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong></p>
        <p>{$message}</p>
    ";
    $mail->AltBody = "New Contact Form Submission\nName: $name\nEmail: $email\nMessage: $message";

    $mail->send();

    http_response_code(200);
    echo json_encode([
        "status"  => "success",
        "message" => "Thank you! Your message has been sent."
    ]);

} catch (Exception $e) {
    error_log("Mailer Error: " . $mail->ErrorInfo);

    http_response_code(500);
    echo json_encode([
        "status"  => "error",
        "message" => "Sorry, there was an error sending your message."
    ]);
}