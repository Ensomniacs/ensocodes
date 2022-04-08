async function GetData() {
    var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055680,07055780&period=P7D&parameterCd=00065&siteStatus=active";
    var msgObject = await fetch(myURL);
    var msgJSONText = await msgObject.text();
    var msg = JSON.parse(msgJSONText);
  
       var dates = [];
       var values = [];

/* Site 1 */
/* fLen contains the length of the array (number of values) */
var fLen = msg.value.timeSeries[0].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[0].values[0].value[i].value
	dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[0].sourceInfo.siteName
var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[0].variable.variableDescription

var ctx0 = document.getElementById("chartjs-0");
var myChart = new Chart(ctx0, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{"label":sitecode,
        "data": values,
        "fill":false,
        "borderColor":"#79BED9",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text:   sitename ,
                fontSize : 18
            },
            legend: {
                display: false
             },
             tooltip: {
                 display: false
             },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                            displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
        labelString: siteDescription         
    }
    }]
        }
        }
    }
);

var fLen = msg.value.timeSeries[1].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[1].values[0].value[i].value
	dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[1].sourceInfo.siteName
var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[1].variable.variableDescription

var ctx1 = document.getElementById("chartjs-1");
var myChart = new Chart(ctx1, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{
        "label": sitename + " " + sitecode,
        "data": values,
        "fill":false,
        "borderColor":"#79BED9",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: sitename ,
                fontSize : 18
            },
            legend: {
                display: false
             },
             tooltip: {
                 display: false
             },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                            displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: siteDescription        
    }
    }]
        }
        }
    }
);


var fLen = msg.value.timeSeries[2].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[2].values[0].value[i].value
	dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[2].sourceInfo.siteName
var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[2].variable.variableDescription

var ctx2 = document.getElementById("chartjs-2");
var myChart = new Chart(ctx2, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{
        "label": sitename + " " + sitecode,
        "data": values,
        "fill":false,
        "borderColor":"#79BED9",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: sitename ,
                fontSize : 18
            },
            legend: {
                display: false
             },
             tooltip: {
                 display: false
             },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                            displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: siteDescription        
    }
    }]
        }
        }
    }
);

var fLen = msg.value.timeSeries[3].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[3].values[0].value[i].value
	dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[3].sourceInfo.siteName
var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[3].variable.variableDescription

var ctx1 = document.getElementById("chartjs-3");
var myChart = new Chart(ctx1, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{
        "label": sitename + " " + sitecode,
        "data": values,
        "fill":false,
        "borderColor":"#79BED9",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: sitename ,
                fontSize : 18
            },
            legend: {
                display: false
             },
             tooltip: {
                 display: false
             },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                            displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: siteDescription        
    }
    }]
        }
        }
    }
);


}