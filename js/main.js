/* Add Ui jquery 1.12 [Progresbar] */
// <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
// <script>
$(function () {
    var total = $('span.tot').text().split("$");
    var progreso = (parseFloat(total[1]) / parseFloat(120.000)) * parseFloat(120.000);
    //Validamos si ya supero los 120 y dependiendo de eso arrojamos un mensaje en pantalla
    if (parseInt(progreso) <= 120) {
        $('.texto-envio').text('El costo de envío deberá ser pagado a la transportadora.').css({ 'color': '#ff0080' });
    } else {
        $('.texto-envio').text('El costo de envío es gratis.').css({ 'color': '#1dd21d' });
    }
    $("#progressbar, #progressbar_footer").progressbar({
        value: progreso
    });
});
// </script>