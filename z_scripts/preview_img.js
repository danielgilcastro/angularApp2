console.log("entrou o base.js")


/*   ultra simplificado

    <input type="file" id="select">
    <img id="preview" width="300px">
    
    <script>

    select.onchange= ()=>{
        preview.src =  window.URL.createObjectURL(select.files[0]);
    }
       
    </script>
*/



/**  SIMPLIFICADO - so jogar dentro do body -
 
    <input id="img_input" type="file" name="imagem" accept="image/*"><br>
    <img id="preview" src="" width="150px">

    <script>
        function readImage() {

            var file = new FileReader(); 
            file.readAsDataURL(img_input.files[0]);
            //file.readAsArrayBuffer(img_input.files[0]);
            
            file.onloadend = ()=>{
                preview.src = file.result
            }
            // file.onload = function(e) {
            //     document.getElementById("preview").src = e.target.result;
            //     console.log(e.target.result)
            // };
        }
        document.getElementById("img_input").onchange = readImage
    </script>
 */


/*    completo

    <form action="proc/base.php" enctype="multipart/form-data" method="POST">

        <div>
            <input id="img-input" type="file" name="imagem" accept="image/*">
        </div>

        <div id="img-container">
            <img id="preview" src="" width="150px">
        </div>

        <br><button type="submit">Enviar</button>


    </form>


function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}
//document.getElementById("img-input").addEventListener("change", readImage, false);
document.getElementById("img-input").onchange = readImage

*/