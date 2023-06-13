import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { gerarValoresAleatorios } from "./ValoresAleatórios";

export default function ChartsCurrent() {
    const resultado = gerarValoresAleatorios();
    var newResult = resultado[resultado.length - 1];


    const options: ApexOptions = {
        chart: {
        fontFamily: 'Inter',
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Registro diário de Temperatura',
        align: 'center',
        style: {
          fontSize: "20px",
          fontFamily: 'Oswald, sans serif',
        }
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },

      xaxis:{
        labels:{
          datetimeFormatter: {
            hour: 'HH:mm'
          }
        }
      },
      yaxis: {
        decimalsInFloat: 1,
        tooltip: {
          enabled: true,
        }
        
      
      }
      };

      const series = [{ 
        data: [{
          x: newResult.x, 
          y: newResult.y
        }]
      }]

    return(
      <ReactApexChart options={options} series={series} type="line" height={500} width={1200} /> 
    )
}




