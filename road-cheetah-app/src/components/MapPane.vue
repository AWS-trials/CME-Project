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
            const route = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/routes?routeId=' + routeId).then(function (response) {
                console.log(response.data);
                return response.data
            });
            return route
        }
        const addRouteToMap = (map) => {
            routes = getRoute(routeId)
            let coordinates
            // for a_route in routes:
            for(var i=0;i<length( routes.Legs);i++){
                coordinates = routes.Legs[i].Geometry.LineString
                map.on('load', function () {
                            map.addSource('route_sample', {
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
                                'id': 'route_sample',
                                'type': 'line',
                                'source': 'route_sample',
                                'layout': {
                                    'line-join': 'round',
                                    'line-cap': 'round'
                                },
                                'paint': {
                                    'line-color': '#FF0000',
                                    'line-width': 10,
                                    'line-opacity': 0.5
                                }
                            });
                        });
            }   
            
        }
        onMounted(()=>{
            const map = mapCreate()
            const route = getRoute('22fec574-2fc3-44ff-9d83-8622fafbd0ca')
            
            //testing
            axios.get('http://webcode.me').then(resp => {

            console.log(resp.data);
            });
            // void addRouteToMap(map)
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