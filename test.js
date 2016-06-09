b = jQuery.getJSON("https://data.cdc.gov/resource/kgax-qmh9.json?$where=location_1%20IS%20NOT%20NULL", function (data,suc) {console.out(data); })

    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: [42.25866170200046, 40.12438327324],
        lon: [-71.05673887699965, -74.3242872437],
        hoverinfo: 'text',
        text: ["Boston, MA", "New York City, NY"],
        marker: {
            size: [25, 60],
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        title: '2014 Deaths in 122 US Cities',
        showlegend: false,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
    };

$(document).ready(function(){
    Plotly.plot("maparea", data, layout, {showLink: false});

});