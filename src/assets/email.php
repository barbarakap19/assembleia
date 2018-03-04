<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
	$from_email = $request->email;
	$message = $request->message;
    $from_name = $request->name;
    $data_envio = date('d/m/Y');
    $hora_envio = date('H:i:s');

	$contact = "<p><strong>Name:</strong> $from_name</p>
							<p><strong>Email:</strong> $from_email</p>";
	$content = "<strong>Menssagem: </strong><p>$message</p>";

	$website = 'Pedido de Oração';
	$email_subject = "$website:  $from_name";

	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= "Este e-mail foi enviado em <strong>$data_envio</strong> às <strong>$$hora_envio</strong>";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $to_email";

	mail("contato@adprimeirodedezembro2.com.br",$email_subject,$email_body,$headers);

	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
