<?php
session_start();
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data) && !empty($data)) {
    // Store cart data in session
    $_SESSION['cart'] = $data;

    // Generate order ID and return success response
    $orderId = uniqid();
    echo json_encode(['success' => true, 'orderId' => $orderId]);
} else {
    echo json_encode(['success' => false, 'message' => 'No items in cart.']);
}
?>
