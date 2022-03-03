//

// em js
string_filter.replace(/[^a-zA-Z0-9]/g, '');

// em php 
$user = strtolower(preg_replace('/[^a-zA-Z0-9]+/', '', $_POST['user']));