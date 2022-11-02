<template>
    <div class='mapPane'>
        <div id='map'></div>
    </div>
</template>

<script>
    import { createMap, drawPoints } from 'maplibre-gl-js-amplify';

    export default {
        name: 'MapPane',
        data() {
            return {
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