<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Here you would process the payment
    $paymentOption = $_POST['payment_option'];

    // Simulate payment processing
    // This is where you would add your payment gateway logic

    // Redirect to success page after processing payment
    header("Location: payment_success.php");
    exit();
}
?>
