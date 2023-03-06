const data = [
      { mes: "Enero", total: 10 },
      { mes: "Febrero", total: 20 },
      { mes: "Marzo", total: 14 },
      { mes: "Abril", total: 21 },
    ];

function crearChart(){

   const canvas = document.getElementById('myChart');
   new Chart(canvas,
  
   {
     type: 'bar',
     data: {
       labels: data.map(row => row.mes),
       datasets: [
         {
           label: 'Valores del mes',
           data: data.map(row => row.total)
         }
       ]
     }
   });

}
crearChart();