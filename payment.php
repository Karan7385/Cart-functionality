<?php
session_start();
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = []; // Initialize cart if not set
}
$cart = $_SESSION['cart'];
$totalAmount = 0;

if (empty($cart)) {
    echo "<p class='text-center text-red-500'>Your cart is empty. <a href='index.html' class='text-blue-500 underline'>Go back to shopping</a>.</p>";
    exit; // Exit early if the cart is empty
}

foreach ($cart as $item) {
    $totalAmount += $item['price'] * $item['quantity'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Page</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-center mb-4">Checkout</h1>
        <p class="text-lg text-center mb-6">Total Amount: $<?php echo number_format($totalAmount, 2); ?></p>

        <!-- Payment gateway integration form -->
        <form action="process_payment.php" method="POST">
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="radio" name="payment_option" value="credit_card" required class="form-radio text-indigo-600">
                    <span class="ml-2 text-gray-700">Credit Card</span>
                </label>
            </div>
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="radio" name="payment_option" value="paypal" required class="form-radio text-indigo-600">
                    <span class="ml-2 text-gray-700">PayPal</span>
                </label>
            </div>
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="radio" name="payment_option" value="bank_transfer" required class="form-radio text-indigo-600">
                    <span class="ml-2 text-gray-700">Bank Transfer</span>
                </label>
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition duration-300">Proceed to Payment</button>
        </form>
    </div>
</body>
</html>
