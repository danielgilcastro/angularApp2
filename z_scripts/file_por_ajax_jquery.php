<?PHP
// header('Location:html/sis_log_home.php');
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <title>index sis log</title>
</head>

<body>
    

    <input type="file" id="file" name="file"  multiple="multiple" />
    <button id="upload">Upload</button>

    <script>
//no php
//move_uploaded_file($_FILES['file']['tmp_name'],'../../../media/'.$_FILES['file']['name']);



        file.onchange = ()=>{

            var file_data = file.files[0];
                var form_data = new FormData();
                form_data.append('file', file_data);

                $.ajax({
                    url: 'proc/foto.php', // point to server-side controller method
                    dataType: 'text', // what to expect back from the server
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    type: 'post',
                    success: function(response) {
                        console.log(response); // display success response from the server
                    },
                    error: function(response) {
                        console.log(response); // display error response from the server
                    }
                });
        }

    </script>
</body>

</html>



<!--  o originaldo site
    <html>
        <head>
            <meta charset="UTF-8">
            <title>AJAX image upload with, jQuery</title>
            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script type="text/javascript">
                $(document).ready(function (e) {
                    $('#upload').on('click', function () {
                        var file_data = $('#file').prop('files')[0];
                        var form_data = new FormData();
                        form_data.append('file', file_data);
                        $.ajax({
                            url: 'http://localhost/ci/index.php/welcome/upload', // point to server-side controller method
                            dataType: 'text', // what to expect back from the server
                            cache: false,
                            contentType: false,
                            processData: false,
                            data: form_data,
                            type: 'post',
                            success: function (response) {
                                $('#msg').html(response); // display success response from the server
                            },
                            error: function (response) {
                                $('#msg').html(response); // display error response from the server
                            }
                        });
                    });
                });
            </script>
        </head>
        <body>
            <p id="msg"></p>

            <input type="file" id="file" name="file" multiple />
            <button id="upload">Upload</button>
        </body>
    </html> 
-->