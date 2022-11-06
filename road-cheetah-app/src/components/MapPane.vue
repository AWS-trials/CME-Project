<template>
    <div class='mapPane'>
        <div id='map'></div>
    </div>
</template>

<script>
import { createMap, drawPoints } from 'maplibre-gl-js-amplify';
import { onMounted } from 'vue'
import axios from 'axios'
let map;
export default {
    name: 'MapPane',
    data() {
        return {
        }
    },
    setup(){
        const mapCreate =  async()=> {
            const map = await createMap({
                container: 'map',
                center: [103.851959, 1.290270],
                zoom: 15,
                bearing: 64.8,
                pitch: 60,
                hash: true,
            });
            return map
        }
        const getRoute = async (routeId) => {
            // const route = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/route?routeId=' + routeId).then(function (response) {
            //     console.log(response.data);
            //     return response.data
            // });
            const route = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/route?routeId=' + routeId)
            return route
        }
        const addRouteToMap = async (map, routeId) => {
            await getRoute(routeId).then((response)=>{
                const data = response.data
                return data
            }).then((data)=>{
                let coordinates
                let end_coordinates
                let markers = []
                console.log(data)
                // for a_route in routes:
                console.log('length',data.route_legs.length)
                
                    map.on('load', function () {
                        for(var i=0;i< data.route_legs.length;i++){
                            coordinates = data.route_legs[i].Geometry.LineString
                            end_coordinates = data.route_legs[i].EndPosition
                                map.addSource('route' + i, {
                                    'type': 'geojson',
                                    'data': {
                                        'type': 'Feature',
                                        'properties': {},
                                        'geometry': {
                                            'type': 'LineString',
                                            'coordinates': coordinates
                                        }
                                    }
                                });
                                map.addLayer({
                                    'id': 'id' + i,
                                    'type': 'line',
                                    'source': 'route' + i,
                                    'layout': {
                                        'line-join': 'round',
                                        'line-cap': 'round'
                                    },
                                    'paint': {
                                        'line-color': '#1338BE',
                                        'line-width': 10,
                                        'line-opacity': 0.5
                                    }
                                });

                                
                                markers.push({
                                    coordinates: end_coordinates,
                                    title: data.Orders[i],
                                    address: data.Locations[i+1],
                                    })
                            }  
                        markers.unshift({
                                    coordinates: data.route_legs[0].StartPosition,
                                    title: 'Departure',
                                    address: data.Locations[0],
                                    }),
                        drawPoints("points",
                                markers,
                                map,
                                {
                                    showCluster: true,
                                    unclusteredOptions: {
                                    showMarkerPopup: true,
                                    },
                                    clusterOptions: {
                                    showCount: true,
                                    },
                                });
                    });
                

            })
               
            
        }
        onMounted(async ()=>{
            map = await mapCreate()
            // const route = getRoute('0b07d7cb-f077-4af3-b169-1c1d6954341f')
            void addRouteToMap(map,'0b07d7cb-f077-4af3-b169-1c1d6954341f' )
        })
        return{

        }
        
    },
    created: async function () {
        // this.mapCreate();

    },
    methods: {
        // mapCreate: async function() {
        //     const map = await createMap({
        //         container: 'map',
        //         center: [103.851959, 1.290270],
        //         zoom: 15,
        //         bearing: 64.8,
        //         pitch: 60,
        //         hash: true,
        //     });
        
            // map.on('load', function () {
            //     drawPoints('pointsSource',
            //         [
            //             {
            //                 coordinates: [139.7646, 35.6827],
            //                 title: 'Point01',
            //                 address: 'Main Points',
            //             },
            //             {
            //                 coordinates: [139.7720, 35.6768],
            //                 title: 'Point02',
            //             },
            //             {
            //                 coordinates: [139.7607, 35.6759],
            //             },
            //         ],
            //         map,
            //         {
            //             showCluster: true,
            //             unclusteredOptions: {
            //                 showMarkerPopup: true,
            //                 defaultColor: '#005773'
            //             },
            //             clusterOptions: {
            //                 showCount: true,
            //                 fillColor: '#005773'
            //             },
            //         }
            //     );
            // });
        // }
    }
}
</script>

<style scoped>
    #map {
        z-index: 0;
        height: 600px;
    }
</style>