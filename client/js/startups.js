angular.module('rocketships.startups', ['rocketships.angellist'])

.factory('Startups', function($http, Angellist) {


    var letsSee = Angellist.testFunction;
    letsSee();



    var findCompanyID = Angellist.findCompanyID;
    var fetchFromAngelList = Angellist.fetchFromAngelList;

    var tempID;


    var companies = {};

    // companies.Zenefits = {
    //     "id": 199399,
    //     "hidden": false,
    //     "community_profile": false,
    //     "name": "Zenefits",
    //     "angellist_url": "https://angel.co/zenefits",
    //     "logo_url": "https://d1qb2nb5cznatu.cloudfront.net/startups/i/199399-f0805524f531bdeaad1d691b650fc8e1-medium_jpg.jpg?buster=1401845982",
    //     "thumb_url": "https://d1qb2nb5cznatu.cloudfront.net/startups/i/199399-f0805524f531bdeaad1d691b650fc8e1-thumb_jpg.jpg?buster=1401845982",
    //     "quality": 10,
    //     "product_desc": "Zenefits is the fastest growing SaaS company ever!\n\nWe are a comprehensive, web-based, HRIS system that manages all HR, payroll, and benefits processes from a single online dashboard. Companies can choose from among Zenefits\u2019 solutions, including benefits administration, onboarding, core HR, employee scheduling, and more. All solutions are paid by the health insurance carrier, including the cost of developing, maintaining, and supporting the solution. Which means that our software is 100% FREE! \u00a0\n\nWe make our revenue from the channel itself, by becoming the insurance broker of record. It's a highly disruptive, industry-rattling model, and we're growing at a tremendous rate as a result (from 25 ee's to 600+ in just one year).",
    //     "high_concept": "Benefits, Payroll, HR. Outsource it all in seconds.",
    //     "follower_count": 424,
    //     "company_url": "http://www.zenefits.com",
    //     "created_at": "2013-04-24T06:49:21Z",
    //     "updated_at": "2015-01-09T01:16:05Z",
    //     "crunchbase_url": "http://www.crunchbase.com/organization/zenefits",
    //     "twitter_url": "http://twitter.com/@zenefits",
    //     "blog_url": "",
    //     "facebook_url": "https://www.facebook.com/Zenefits",
    //     "linkedin_url": "http://www.linkedin.com/company/zenefits",
    //     "video_url": "https://www.youtube.com/watch?v=E-0EpztLz0c",
    //     "markets": [{
    //         "id": 12,
    //         "tag_type": "MarketTag",
    //         "name": "enterprise software",
    //         "display_name": "Enterprise Software",
    //         "angellist_url": "https://angel.co/enterprise-software"
    //     }, {
    //         "id": 641,
    //         "tag_type": "MarketTag",
    //         "name": "human resources",
    //         "display_name": "Human Resources",
    //         "angellist_url": "https://angel.co/human-resources"
    //     }, {
    //         "id": 10783,
    //         "tag_type": "MarketTag",
    //         "name": "health and insurance",
    //         "display_name": "Health and Insurance",
    //         "angellist_url": "https://angel.co/health-and-insurance"
    //     }],
    //     "locations": [{
    //         "id": 1692,
    //         "tag_type": "LocationTag",
    //         "name": "san francisco",
    //         "display_name": "San Francisco",
    //         "angellist_url": "https://angel.co/san-francisco"
    //     }],
    //     "company_size": "501-1000",
    //     "company_type": [{
    //         "id": 94212,
    //         "tag_type": "CompanyTypeTag",
    //         "name": "startup",
    //         "display_name": "Startup",
    //         "angellist_url": "https://angel.co/startup"
    //     }],
    //     "status": null,
    //     "screenshots": [{
    //         "thumb": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/thumb/000/454/726/454726-275a8940ce6f8481818e343a5eaad69622277127.jpg?1420766185",
    //         "original": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/original/000/454/726/454726-e2f1db1814417bb0f28319e3df9bc84a89d90af8.png?1420766185"
    //     }, {
    //         "thumb": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/thumb/000/454/727/454727-c27758aac43aba8c6e530a056fc95d405082d033.jpg?1420766228",
    //         "original": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/original/000/454/727/454727-bfc97908245f385d457b62c2f35ab75230808c43.png?1420766228"
    //     }, {
    //         "thumb": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/thumb/000/454/728/454728-9ad557c99875cee2956d9cc87466f410791545f6.jpg?1420766255",
    //         "original": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/original/000/454/728/454728-3eb2964da6d09af5b728c0539cd24c83260bdda7.png?1420766255"
    //     }, {
    //         "thumb": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/thumb/000/454/729/454729-d51f85d769cef72f602412b2539007f1c19ab1d2.jpg?1420766275",
    //         "original": "https://d2gn4xht817m0g.cloudfront.net/p/product_screenshots/images/original/000/454/729/454729-173896d6ec117beba331e84f3c61d9ad470df304.jpg?1420766275"
    //     }],
    //     "funding": [{
    //         "date": '2013-04-12',
    //         "label": "Seed",
    //         "value": 180000
    //     }, {
    //         "date": '2013-08-12',
    //         "label": "Seed",
    //         "value": 2100000,
    //     }, {
    //         "date": '2014-01-22',
    //         "label": "Series A",
    //         "value": 15000000,
    //     }, {
    //         "date": '2015-06-03',
    //         "label": "Series B",
    //         "value": 66500000,
    //     }]
    // }

    companies.seatgeek = {
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
            "label": "Series B",
            "value": 35000000,
        }, {
            "date": '2015-04-02',
            "label": "Series C",
            "value": 62000000,
        }]
    };


    var data = {
        labels: [2009, 2010, 2012, 2014, 2015],
        datasets: [{
            label: "Seatgeek",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [companies.seatgeek.funding[0].value, companies.seatgeek.funding[1].value, companies.seatgeek.funding[2].value, companies.seatgeek.funding[3].value, companies.seatgeek.funding[4].value]
        }, ]
    };

    var speed = (companies["seatgeek"].funding[companies["seatgeek"].funding.length - 1].value - companies["seatgeek"].funding[0].value) / companies["seatgeek"].funding.length - 1;



    var options = {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };

    function addCompany(companyNameToAdd) {

        if(!companies[companyNameToAdd]){

        findCompanyID(companyNameToAdd).then(function(returnedCompanyID) {
            console.log("returnedCompanyID", returnedCompanyID[0].id);
            tempID = returnedCompanyID[0].id;
        }).then(function() {
            console.log("ID FOUND IN PREVIOUS PROMISE" + tempID);

            fetchFromAngelList(tempID).then(function(returnedCompanyData) {
                console.log("returned Company Data: ", returnedCompanyData);
                companies[companyNameToAdd] = returnedCompanyData;
                companies[companyNameToAdd]["funding"] = [];
                console.log(companies)
                var urlToHit = returnedCompanyData.angellist_url;

                getFunding(urlToHit, companyNameToAdd, function(){




                        
                        drawCompany(companyNameToAdd);
                });


            })
        })
        }
        else{
            drawCompany(companyNameToAdd);
        }

    }


    function getFunding(url, theCompanyName, callback) {
        console.log(url);
        $http({
                method: 'POST',
                url: '/addcompany',
                data: {
                    'url': url
                }
            })
            .then(function(resp) {
                console.log("resp", resp);

                var fundingAmounts = resp.data.amounts;
                var fundingDates = resp.data.dates;
                var formattedDates = [];

                fundingAmounts = fundingAmounts.filter(Boolean);
                // console.log(fundingAmounts[0])
                for (var i = 0; i < fundingAmounts.length; i++) {
                    fundingAmounts[i] = fundingAmounts[i].replace(/\D/g, '');
                }
                console.log("fundingAmounts", fundingAmounts);

                for (var i = 0; i < fundingDates.length; i++) {
                    if (fundingDates[i] === "," && fundingDates[i + 1] === " ") {
                        console.log("HAPPENS ONCE");
                        formattedDates.push(fundingDates.slice(i - 6, i + 6))
                    }
                }

                formattedDates = formattedDates.reverse();
                fundingAmounts = fundingAmounts.reverse();

                speed = (fundingAmounts[fundingAmounts.length -1] - fundingAmounts[0]) / fundingAmounts.length

                for(var j = 0; j < formattedDates.length; j++){
                    companies[theCompanyName]["funding"].push({
                        "date": formattedDates[j],
                        "value": fundingAmounts[j]
                    })
                }


                callback();


                







                return resp.data;
            });
    }


    var constantChart;


    function drawCompany(nameOfCompany) {
        // console.log(nameOfCompany)
        // console.log(companies[nameOfCompany]);

        var initialCanvas = document.getElementById("myChart");
        var context = initialCanvas.getContext("2d");
        context.clearRect(0, 0, 1200, 600);
        data.labels = [];
        data.datasets.label = nameOfCompany;
        data.datasets[0].data = [];

        // console.log("data.datasets.data[0] before: ", data.datasets.data[0])


        for (var i = 0; i < companies[nameOfCompany].funding.length; i++) {
            // console.log(companies[nameOfCompany].funding[i].date.slice(0,4));
            // console.log(companies[nameOfCompany].funding[i].value)

            data.labels.push(companies[nameOfCompany].funding[i].date);
            data.datasets[0].data.push(companies[nameOfCompany].funding[i].value)

        }


        // speed = (companies[nameOfCompany].funding[companies[nameOfCompany].funding.length - 1].value - companies[nameOfCompany].funding[0].value) / companies[nameOfCompany].funding.length - 1;
        console.log("NEW SPEED: " + speed);


        // if(createdForFirstTime){
            var ctx = $("#myChart").get(0).getContext("2d");
            var myLineChart = new Chart(ctx).Line(data, options);
            
        // } else{
        //         myLineChart.update();
        // }
        


    }

    function getSpeed(){
        return speed;
    }





    return {
        drawCompany: drawCompany,
        speed: speed,
        addCompany: addCompany,
        getSpeed: getSpeed
    }

})
