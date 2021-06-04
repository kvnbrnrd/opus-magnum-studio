<?php 
if(isset($_POST['submit'])){
    $to = "kevin.bernard@zoho.com"; // opusmagnumstudios@gmail.com
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>
