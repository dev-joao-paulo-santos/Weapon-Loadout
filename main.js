
const b1 = document.getElementById("g1"), b2 = document.getElementById("g2"), b3 = document.getElementById("g3"), b4 = document.getElementById("g4"), b5 = document.getElementById("g5"), b6 = document.getElementById("g6"), b7 = document.getElementById("g7")

b1.addEventListener('click', () => {

    var ctx = document.getElementById("chart1").getContext("2d")

   var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Precisão", "Dano", "Alcance", "Estabilidade", "Mira"],
        
        datasets: [{
            data: [3.5, 3, 4.5, 6, 4],
            borderWidth: .5,
            //borderColor: "#ff0000",
            backgroundColor: ["#98FB98", "#00FF7F", "#00FA9A", "#00FF00", "#008000" ]
        }]
    },
    options: {
            legend:{
                display: false
            },
       // maintainAspectRatio:false,
        width: 400,
        height: 200,
        responsive: true,
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 25,
                    fontStyle: 900, // Altera a espessura da fonte
                    fontColor: '#000000',
                   // fontFamily: 'Roboto'
                }
            }],
            yAxes: [{
               display: true,
               ticks: {
                beginAtZero: true,
                suggestedMax: 10,
                fontSize: 18,
                fontColor: '#000000',
                fontStyle: 900
               }
                
            }]
            
        }
    }})

      

})



b2.addEventListener('click', () => {

    var ctx = document.getElementById("chart1").getContext("2d")

   var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Precisão", "Dano", "Alcance", "Estabilidade", "Mira"],
        
        datasets: [{
            data: [7, 5, 6, 6.5, 5],
            borderWidth: .5,
            //borderColor: "#ff0000",
            backgroundColor: ["#98FB98", "#00FF7F", "#00FA9A", "#00FF00", "#008000" ]
        }]
    },
    options: {
        legend:{
            display: false
        },
       // maintainAspectRatio:false,
        width: 400,
        height: 200,
        responsive: true,
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 25,
                    fontStyle: 900, // Altera a espessura da fonte
                    fontColor: '#000000',
                   // fontFamily: 'Roboto'
                }
            }],
            yAxes: [{
               display: true,
               ticks: {
                beginAtZero: true,
                suggestedMax: 10,
                fontSize: 18,
                fontColor: '#000000',
                fontStyle: 900
               }
                
            }]
            
        }
    }})

      

})


b3.addEventListener('click', () => {

    var ctx = document.getElementById("chart1").getContext("2d")

   var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Precisão", "Dano", "Alcance", "Estabilidade", "Mira"],
        
        datasets: [{
            data: [2, 7.6, 2.5, 3, 1],
            borderWidth: .5,
            //borderColor: "#ff0000",
            backgroundColor: ["#98FB98", "#00FF7F", "#00FA9A", "#00FF00", "#008000" ]
        }]
    },
    options: {
        legend:{
            display: false
        },
       // maintainAspectRatio:false,
        width: 400,
        height: 200,
        responsive: true,
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 25,
                    fontStyle: 900, // Altera a espessura da fonte
                    fontColor: '#000000',
                   // fontFamily: 'Roboto'
                }
            }],
            yAxes: [{
               display: true,
               ticks: {
                beginAtZero: true,
                suggestedMax: 10,
                fontSize: 18,
                fontColor: '#000000',
                fontStyle: 900
               }
                
            }]
            
        }
    }})

      

})



b4.addEventListener('click', () => {

    var ctx = document.getElementById("chart1").getContext("2d")

   var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Precisão", "Dano", "Alcance", "Estabilidade", "Mira"],
        
        datasets: [{
            data: [10, 9, 10, 8, 9.5],
            borderWidth: .5,
            //borderColor: "#ff0000",
            backgroundColor: ["#98FB98", "#00FF7F", "#00FA9A", "#00FF00", "#008000" ]
        }]
    },
    options: {
        legend:{
            display: false
        },
       // maintainAspectRatio:false,
        width: 400,
        height: 200,
        responsive: true,
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 25,
                    fontStyle: 900, // Altera a espessura da fonte
                    fontColor: '#000000',
                   // fontFamily: 'Roboto'
                }
            }],
            yAxes: [{
               display: true,
               ticks: {
                beginAtZero: true,
                suggestedMax: 10,
                fontSize: 18,
                fontColor: '#000000',
                fontStyle: 900
               }
                
            }]
            
        }
    }})

      

})

b5.addEventListener('click', () => {

    var ctx = document.getElementById("chart1").getContext("2d")

   var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Precisão", "Dano", "Alcance", "Estabilidade", "Mira"],
        
        datasets: [{
            data: [5, 7, 7.7, 4, 6],
            borderWidth: .5,
            //borderColor: "#ff0000",
            backgroundColor: ["#98FB98", "#00FF7F", "#00FA9A", "#00FF00", "#008000" ]
        }]
    },
    options: {
        legend:{
            display: false
        },
       // maintainAspectRatio:false,
        width: 400,
        height: 200,
        responsive: true,
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 25,
                    fontStyle: 900, // Altera a espessura da fonte
                    fontColor: '#000000',
                   // fontFamily: 'Roboto'
                }
            }],
            yAxes: [{
               display: true,
               ticks: {
                beginAtZero: true,
                suggestedMax: 10,
                fontSize: 18,
                fontColor: '#000000',
                fontStyle: 900
               }
                
            }]
            
        }
    }})

      

})


b6.addEventListener('click', () => {

    var ctx = document.getElementById("chart1").getContext("2d")

   var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Precisão", "Dano", "Alcance", "Estabilidade", "Mira"],
        
        datasets: [{
            data: [4, 10, 9, 1, 2.5],
            borderWidth: .5,
            //borderColor: "#ff0000",
            backgroundColor: ["#98FB98", "#00FF7F", "#00FA9A", "#00FF00", "#008000" ]
        }]
    },
    options: {
        legend:{
            display: false
        },
       // maintainAspectRatio:false,
        width: 400,
        height: 200,
        responsive: true,
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 25,
                    fontStyle: 900, // Altera a espessura da fonte
                    fontColor: '#000000',
                   // fontFamily: 'Roboto'
                }
            }],
            yAxes: [{
               display: true,
               ticks: {
                beginAtZero: true,
                suggestedMax: 10,
                fontSize: 18,
                fontColor: '#000000',
                fontStyle: 900
               }
                
            }]
            
        }
    }})

      

})


b7.addEventListener('click', () => {

    var ctx = document.getElementById("chart1").getContext("2d")

   var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Precisão", "Dano", "Alcance", "Estabilidade", "Mira"],
        
        datasets: [{
            data: [6.5, 5.4, 7, 8, 7],
            borderWidth: .5,
            //borderColor: "#ff0000",
            backgroundColor: ["#98FB98", "#00FF7F", "#00FA9A", "#00FF00", "#008000" ]
        }]
    },
    options: {
        legend:{
            display: false
        },
       // maintainAspectRatio:false,
        width: 400,
        height: 200,
        responsive: true,
        scales: {
            xAxes:[{
                ticks: {
                    fontSize: 25,
                    fontStyle: 900, // Altera a espessura da fonte
                    fontColor: '#000000',
                   // fontFamily: 'Roboto'
                }
            }],
            yAxes: [{
               display: true,
               ticks: {
                beginAtZero: true,
                suggestedMax: 10,
                fontSize: 18,
                fontColor: '#000000',
                fontStyle: 900
               }
                
            }]
            
        }
    }})

      

})




