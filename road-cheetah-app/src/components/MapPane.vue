<template>
    <div class='mapPane'>
        <div id='map'></div>
    </div>
</template>

<script>
import { createMap, drawPoints } from 'maplibre-gl-js-amplify';
import { onMounted } from 'vue'
import axios from 'axios'

export default {
    name: 'MapPane',
    data() {
        return {
        }
    },
    setup(){
        const getRoute = async (routeId) => {
            const route = await axios.get('https://3mb16n3708.execute-api.ap-southeast-1.amazonaws.com/dev/routes?routeId=' + routeId).then(function (response) {
                console.log(response.data);
                return response.data
            });
            return route
        }
        const getGoogle = async () => {
            const route = await axios.get('https://www.google.com/')
            return route.data
        }
        onMounted(()=>{
            getRoute('22fec574-2fc3-44ff-9d83-8622fafbd0ca')
            axios.get('http://webcode.me').then(resp => {

            console.log(resp.data);
            });
        })
        return{
            getRoute
        }
        
    },
    created: async function () {
        this.mapCreate();

    },
    methods: {
        mapCreate: async function() {
            const map = await createMap({
                container: 'map',
                center: [103.851959, 1.290270],
                zoom: 15,
                bearing: 64.8,
                pitch: 60,
                hash: true,
            });
        
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
        }
    }
}
</script>

<style scoped>
    #map {
        z-index: 0;
        height: 600px;
    }
</style>