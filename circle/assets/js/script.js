$( "#CircleForm" ).validate({
    });

    function displayResults(){
        if ($( "#CircleForm" ).valid()) {

            // read radius as a string
            radius = document.getElementById("radius").value;

            // variables
            var radius;
            var diameter; 
            var diameterfp;
            var circumference;
            var circumferencefp; 
            var area;
            var areafp;

            // diameter
            document.getElementById("diameter").innerHTML = "";
            diameter = calcDiameter(radius);
            diameterfp = parseFloat ( diameter );
            document.getElementById("diameter").innerHTML = diameterfp.toString();

            document.getElementById("circumference").innerHTML = "";
            circumference = calcCircumference(radius);
            circumferencefp = parseFloat ( circumference );
            document.getElementById("circumference").innerHTML = circumferencefp.toString();

            document.getElementById("area").innerHTML = "";
            area = calcArea(radius);
            areafp = parseFloat ( area );
            document.getElementById("area").innerHTML = areafp.toString();
        }
    }

    function calcDiameter(radius) {
        return 2 * radius;
    }
    function calcCircumference(radius) {
        return 2 * 3.14 * radius;
    }
    function calcArea (radius) {
        return 3.14 * radius * radius;
    }

    function clearForm() {
        document.getElementById("radius").value = "";
        document.getElementById("radiusError").innterHTML = "";
        document.getElementById("diameter").innerHTML = "";
        document.getElementById("circumfrence").innerHTML = "";
        document.getElementById("area").innerHTML = "";
    }

