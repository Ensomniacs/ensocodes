$( "#CircleForm" ).validate({
});
    function displayResult(){
        if ($( "#CricleForm" ).valid()) {

            document.getElementById("diameter").innerHTML = "";
            document.getElementById("circumfrence").innerHTML = "";
            document.getElementById("area").innerHTML = "";

            // variables
            var radius;
            var diameter; 
            var diameterfp;
            var circumfrence;
            var circumfrencefp; 
            var area;
            var areafp;
            var result;

            // read radius as a string
            radius = document.getElementById("radius").value;

            //pars float calulations
            diameterfp = parseFloat ( diameter );
            circumfrencefp = parseFloat ( circumfrence);
            areafp = parseFloat ( area );

            // calculations
            diameter = calcDiameter(radius);
            circumfrence = calcCircumfrence(radius);
            area = calcArea(radius);

            //display results as string
            document.getElementById("diameter").innerHTML = diameter.toString();
            document.getElementById("circumfrence").innerHTML = circumfrence.toStrince();
            document.getElementById("area").innerHTML = area.toString();
        }
    }

    function calcDiameter(radius) {
        return 2 * radius;
    }
    function calcCircumfrence(radius) {
        return 2 * Math.Pi * radius;
    }
    function calcArea (radius) {
        return Math.Pi * radius * radius;
    }

    function clearForm() {
        document.getElementById("radius").value = "";
        document.getElementById("radiusError").innterHTML = "";
        document.getElementById("diameter").innerHTML = "";
        document.getElementById("circumfrence").innerHTML = "";
        document.getElementById("area").innerHTML = "";
    }

