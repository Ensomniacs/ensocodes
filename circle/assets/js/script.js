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
            var circumfrence;
            var circumfrencefp; 
            var area;
            var areafp;

            // diameter
            document.getElementById("diameter").innerHTML = "";
            diameterfp = parseFloat ( diameter );
            diameter = calcDiameter(radius);
            document.getElementById("diameter").innerHTML = diameter.toString();

            document.getElementById("circumfrence").innerHTML = "";
            circumfrencefp = parseFloat ( circumfrence);
            circumfrence = calcCircumfrence(radius);
            document.getElementById("circumfrence").innerHTML = circumfrence.toStrince();

            document.getElementById("area").innerHTML = "";
            areafp = parsFloat ( area );
            area = calcArea(radius);
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

