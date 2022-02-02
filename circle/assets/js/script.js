$( "#CircleForm" ).validate({
});
    function displayResult(){
        if ($( "#CricleForm" ).valid()) {

            document.getElementById("diameter").innerHTML = "";
            document.getElementById("circumfrence").innerHTML = "";
            document.getElementById("area").innerHTML = "";

            var radius, diameter, circumfrence, area;

            diameter = 2 * radius;
            circumfrence = 2 * Math.Pi * radius;
            area = Math.Pi * (radius * radius);

            //display the diameter
            document.getElementById("diameter").innerHTML = diameter.toString();

            //display the circumfrence
            document.getElementById("circumfrence").innerHTML = circumfrence.toStrince();

            //display the area
            document.getElementById("area").innerHTML = area.toString();
        }
    }

    function clearForm() {
        document.getElementById("radius").value = "";
        document.getElementById("radiusError").innterHTML = "";
        document.getElementById("diameter").innerHTML = "";
        document.getElementById("circumfrence").innerHTML = "";
        document.getElementById("area").innerHTML = "";
    }