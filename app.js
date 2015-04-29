console.log("HELLO");

$(document).ready(function() {



    var data = {
        "id": 74139,
        "name": "SeatGeek",
        "angellist_url": "https://angel.co/seatgeek",
        "product_desc": "SeatGeek is a ticket search engine. We help users find games & shows they'll love and compare ticket inventory from hundreds of sites at once.",
        "thumb_url": "https://d1qb2nb5cznatu.cloudfront.net/startups/i/74139-75f197c37c953a29a5634c66c8c72545-thumb_jpg.jpg?buster=1360947378",
        "company_url": "http://seatgeek.com",
        "locations": [{
            "id": 1664,
            "tag_type": "LocationTag",
            "name": "new york, ny",
            "display_name": "New York City",
            "angellist_url": "https://angel.co/new-york-ny-1"
        }],
        "funding": [{
            "date": '2009-05-22',
            "label": "Seed",
            "value": 20000,
        }, {
            "date": '2010-07-21',
            "label": "Series A",
            "value": 1000000,
        }, {
            "date": '2012-08-29',
            "label": "Series A",
            "value": 1650000,
        }, {
            "date": '2014-08-28',
            "label": "Series A",
            "value": 1650000,
        }, {
            "date": '2014-08-28',
            "label": "Series B",
            "value": 35000000,
        }, {
            "date": '2015-04-02',
            "label": "Series C",
            "value": 62000000,
        }]
    };



    function drawLineChart(data) {

        var lineChartContainerElement = document.getElementById('lineChartContainer');	//container that will hold SVG
        var width = lineChartContainerElement.clientWidth;		//1600 pixels wide
        var height = width * 0.4;						//640 pixels tall
        var margin = {
        	top: 30,
        	right: 20,
        	left: 50,
        	bottom: 20
        };
        
        var svg = d3.select(lineChartContainerElement).select('svg')	//selects svg element under lineChartContainer
        											  .attr('width', width)
        											  .attr('height', height);


        var xScale = d3.scale.linear().range([margin.left, width-margin.right]).domain([2000, 2016]);	//creates x scale lienarly, graphable range is within margins, domain for values is initially hardcoded between 2000-2016 (years)
        var xAxis = d3.svg.axis().scale(xScale);

        var yScale = d3.scale.linear().range([height - margin.top, margin.bottom]).domain([0, 100000000]);
        var yAxis = d3.svg.axis().scale(xScale);







    }

    drawLineChart(data);

})
