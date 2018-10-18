<template>
  <div>
    <headerTop/>
    <div id="container"></div>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import BMap from 'BMap';

  export default {
    name: "index",
    components: {
      headerTop
    },
    methods: {
      changeTitle() {
        const title = "流动党员找组织"
        this.$store.commit('CHANGE-HEADERTEXT', title)
      },

      initMap() {
        var map = new window.BMap.Map("container");          // 创建地图实例
        let opts = {anchor: BMAP_ANCHOR_TOP_LEFT}
        let point = new BMap.Point(116.404, 39.915);  // 创建点坐标

        map.centerAndZoom(point, 5);

        map.addControl(new BMap.NavigationControl(opts));
        map.addControl(new BMap.MapTypeControl());
        map.addControl(new BMap.GeolocationControl());
        this.addPoint(map)
      },
      addPoint(map){
        let pointBeiJing = new BMap.Point(116.283970, 40.143828)
        let pointSchool = new BMap.Point(114.006457, 33.010643)
        let marker0 = new BMap.Marker(pointSchool);
        let marker1 = new BMap.Marker(pointBeiJing);
        map.addOverlay(marker0)
        map.addOverlay(marker1)
        function addLabel(marker0,marker1){
            let pointOne =marker0
            let pointTwo =marker1

        }
      },

    },
    created() {
      this.changeTitle()
    },
    mounted() {
      this.initMap()
    }

  }
</script>

<style scoped lang="scss">
  #container {
    margin-top: 45px;
    height: 620px;
    width: 100%;
    z-index: 555;
  }
</style>
