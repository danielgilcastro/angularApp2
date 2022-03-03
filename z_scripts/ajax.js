//                 GET
var ajax = new XMLHttpRequest();
ajax.open("GET", "xxxxxxxxx");
//ajax.responseType = "json";
ajax.send();
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        console.log(ajax.response);
    }
}

//                     POST
var ajax = new XMLHttpRequest();
ajax.open("POST", "xxxxxxxx");
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//ajax.responseType = "json";
ajax.send("");
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        console.log(ajax.response);
    }
}


//                  JAX LIST
var ajax = new XMLHttpRequest();
ajax.open("POST", "personagem_proc.php");
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
ajax.responseType = "json";

ajax.send("bt_tabela_de_personagens=bt_tabela_de_personagens");

ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var str = "";
        for (let index = 0; index < ajax.response.length; index++) {
            str += "" +
                "<tr>" +
                "<td id='" + ajax.response[index] + "'>" + ajax.response[index] + "</td>" +
                "</tr>";
        }
        tabela_personagem.innerHTML = str;

        var personagem = new Array();
        for (let index = 0; index < ajax.response.length; index++) {
            personagem[index] = document.getElementById(ajax.response[index])
            personagem[index].addEventListener('click', function() {
                console.log(personagem[index].id)
            })
        }

    }
}



//                  IMAGEM POR AJAX

document.getElementById("fotografia").onchange = function(e) {
    if (e.target.files != null && e.target.files.length != 0) {
        var arquivo = e.target.files[0];
        var fd = new FormData();
        fd.append("fotografia", arquivo);

        document.getElementById("foto1").removeAttribute("src");
    }

    document.getElementById("enviar").onclick = function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "recebe.php", true);
        xmlhttp.send(fd);

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status === 200) {
                window.alert(xmlhttp.responseText);

                document.getElementById("foto1").setAttribute("src", "foto1.jpg");
            }
        }
    }

};