const coordenadasTuri = [
  [-79.00497563553414, -2.8977830454888376],
  [-79.00557916866279, -2.9010800799521284],
  [-79.0063167061761, -2.9031289188421208],
  [-79.00726307959013, -2.9066881128681326],
  [-79.00909142889023, -2.9133916684737886],
  [-79.00967402154828, -2.9156509372297186],
  [-79.00912241786212, -2.9170931530081305],
  [-79.01000870244098, -2.9195009683328026],
  [-79.00985995537702, -2.92102983554849],
  [-79.0100210980267, -2.9222430242175683]
];
const coordenadasVado = [
  [-79.00470438496065, -2.897847605818362],
  [-79.0051438368476, -2.898585806933554],
  [-79.00527187012354, -2.899287360837621],
  [-79.00543450698743, -2.900051120998626],
  [-79.00554523846915, -2.9009012787599295],
  [-79.00578023738711, -2.9014930327207558],
  [-79.00642396754834, -2.901134077420251]
];
const coordenadasAer = [
  [-79.0042838089119, -2.897996598786287],
  [-79.003114364378, -2.8982885859843095],
  [-79.00293289884688, -2.897367315775831],
  [-79.00276655544334, -2.8963352908814546],
  [-79.00083092310174, -2.89684375204187],
  [-78.99946489090394, -2.8972162878034764],
  [-78.9978216197031, -2.897634131819418],
  [-78.99657656453122, -2.8977247485731294],
  [-78.99651607601487, -2.8956254585553785],
  [-78.9946006065123, -2.8942813067744653],
  [-78.9920550483599, -2.892519307651922],
  [-78.99055291701113, -2.891603067017558],
  [-78.98870801743868, -2.89031932204223],
  [-78.98764946850713, -2.889523902871114]
]

mapboxgl.accessToken = 'pk.eyJ1IjoibWFudGVjb24xOTk5IiwiYSI6ImNsNnBibWNvbjBidXkzY29kOGRyNXN6cTcifQ.UQiX3OhODzDVNPHOpA7KDA';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-79.0044484380816, -2.8973942130934858],
  zoom: 14,
});

var marker = new mapboxgl.Marker()
.setLngLat(coordenadasTuri[0])
.addTo(map);

let counter = 0;
function move() {
  var seleccion = document.getElementById('lista').value;
  console.log(seleccion);
  if (seleccion == 'Turi'){
    if (counter < coordenadasTuri.length){
      setTimeout(() => {
        marker.setLngLat(coordenadasTuri[counter])
        counter++
        move()
      },1000)
    }
  }
  else if (seleccion == 'Vado'){
    if (counter < coordenadasVado.length){
      setTimeout(() => {
        marker.setLngLat(coordenadasVado[counter])
        counter++
        move()
      },1000)
    }
  }
  else if(seleccion == 'Aeropuerto'){
    if (counter < coordenadasAer.length){
      setTimeout(() => {
        marker.setLngLat(coordenadasAer[counter])
        counter++
        move()
      },1000)
  }
}
}