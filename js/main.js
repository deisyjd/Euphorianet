/* Add Ui jquery 1.12 [Progresbar] */
// <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
// <script>
$(function () {
    var total = $('span.tot').text().split("$");
    var progreso = (parseFloat(total[1]) / parseFloat(120.000)) * parseFloat(120.000);
    if (parseInt(progreso) >= 100) {
        progreso = 100;
    }
    $("#progressbar").progressbar({
        value: progreso
    });
});
// </script>