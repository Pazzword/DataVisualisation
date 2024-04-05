const totalViewsChart = document.getElementById('total-views-chart');
const revenueChart = document.getElementById('revenue-chart');
const growthChart = document.getElementById('growth-chart');
const subscriberCountChart = document.getElementById('subscribers-count');
const trafficSources = document.getElementById('traffic-sources');
growthRate = document.getElementById('growth-rate');


// Total Views Polar Chart//
fetch('/api/sub-views')
    .then(response => response.json())
    .then(data => {
        new Chart(totalViewsChart, {
            type: 'polarArea',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',  // Red
                        'rgba(54, 162, 235, 0.6)',  // Blue
                        'rgba(255, 206, 86, 0.6)',  // Yellow
                        'rgba(75, 192, 192, 0.6)',  // Green
                        'rgba(153, 102, 255, 0.6)', // Purple
                        'rgba(255, 159, 64, 0.6)'   // Orange
                    ],            
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });


// Revenue Radar Chart//
fetch('/api/revenue-views')
    .then(response => response.json())
    .then(data => {
        new Chart(revenueChart, {
            type: 'radar',
            data: {
                labels: ['January', 'February', 'March'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    });


// Revenue Radar Chart//
fetch('/api/growth-rate')
    .then(response => response.json())
    .then(data => {
        new Chart(growthRate, {
            type: 'doughnut',
            data: {
                labels: ['January', 'February', 'March'],
                datasets: [{
                    label: data.labels,
                    data: data.data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    });


// Subscribers Count Line Chart//
fetch('/api/total-views')
    .then(response => response.json())
    .then(data => {
        new Chart(subscriberCountChart, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Growth Revenue',
                    data: data.data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }
    );




// Traffic Sources Pie Chart//
new Chart(trafficSources, {
    type: 'pie',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Total Views',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',  // Red
                'rgba(54, 162, 235, 0.6)',  // Blue
                'rgba(255, 206, 86, 0.6)',  // Yellow
                'rgba(75, 192, 192, 0.6)',  // Green
                'rgba(153, 102, 255, 0.6)', // Purple
                'rgba(255, 159, 64, 0.6)'   // Orange
            ],            
            borderColor: 'rgba(0, 123, 255, 3)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


//Initialize DataTable//
const dataTable = new simpleDatatables.DataTable("#datatable", {
    searchable: true,
    fixedHeight: true,
    data:{
        headings: ['Movie Title', 'Director', 'Box Office Revenue', 'Release Date'],
    }
});

fetch('/api/datatable-api')
    .then(response => response.json())
    .then(data => {

    dataTable.rows().add([//Populated myself OR replace with ->data.data  from the fetch request
        ['The Lawnmower Man', 'Brett Leonard', '£32.1 million', 'March 6, 1992'],
        ['Inception', 'Christopher Nolan', '£836.8 million', 'July 16, 2010'],
        ['Swordfish', 'Dominic Sena', '£147.1 million', 'June 8, 2001'],
        ['Tenet', 'Christopher Nolan', '£363.1 million', 'August 26, 2020'],
        ['The Social Network', 'David Fincher', '£224.9 million', 'October 1, 2010'],
        ['The Imitation Game', 'Morten Tyldum', '£233.6 million', 'November 14, 2014'],
        ['WarGames', 'John Badham', '£79.6 million', 'June 3, 1983'],
        ['Hackers', 'Iain Softley', '£7.5 million', 'September 15, 1995'],
        ['Tron', 'Steven Lisberger', '£50 million', 'July 9, 1982'],
        ['Sneakers', 'Phil Alden Robinson', '£105.2 million', 'September 9, 1992'],
        ['Wargames', 'John Badham', '£79.6 million', 'June 3, 1983'],
        ['Hackers', 'Iain Softley', '£7.5 million', 'September 15, 1995'],
        ['The Net', 'Irwin Winkler', '£110.6 million', 'July 28, 1995'],
        ['The Social Network', 'David Fincher', '£224.9 million', 'October 1, 2010'],
        ['The Imitation Game', 'Morten Tyldum', '£233.6 million', 'November 14, 2014'],
        ['Tron', 'Steven Lisberger', '£50 million', 'July 9, 1982'],
        ['Tron: Legacy', 'Joseph Kosinski', '£400.1 million', 'December 17, 2010'],
        ['Antitrust', 'Peter Howitt', '£18.1 million', 'January 12, 2001'],
        ['WarGames', 'John Badham', '£79.6 million', 'June 3, 1983'],
        ['Johnny Mnemonic', 'Robert Longo', '£52.4 million', 'May 26, 1995'],
        ['Antitrust', 'Peter Howitt', '£18.1 million', 'January 12, 2001'],
        ['The Fifth Estate', 'Bill Condon', '£8.6 million', 'October 18, 2013'],
        ['Enemy of the State', 'Tony Scott', '£250.6 million', 'November 20, 1998'],
        ['Blackhat', 'Michael Mann', '£19.7 million', 'January 16, 2015'],
        ['The Core', 'Jon Amiel', '£74.1 million', 'March 28, 2003'],
        ['Ghost in the Shell', 'Rupert Sanders', '£169.8 million', 'March 31, 2017'],
        ['Live Free or Die Hard', 'Len Wiseman', '£388.1 million', 'June 27, 2007']
    ])});