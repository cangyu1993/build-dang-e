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
        this.addLabel(map,pointBeiJing,pointSchool)
      },
      addLabel(map,pointBeiJing,pointSchool){
        let pointOne =pointBeiJing
        let pointTwo =pointSchool
        const titltOne = '信息工程学院学生流动党支部,支部书记：高洋 电话：13526395586'
        const titltTwo01 = '信息工程学院学生党支部,支部书记：杨鑫 电话：0396-2853187'
        const titltTwo02 = '信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032'
        let labelOne = new BMap.Label(titltOne,{position:pointOne, offset: new BMap.Size(5, -45)})
        let labelTwo01 = new BMap.Label(titltTwo01,{position:pointTwo,offset: new BMap.Size(5, -65)})
        let labelTwo02 = new BMap.Label(titltTwo02,{position:pointTwo,offset: new BMap.Size(5, -45)})
        map.addOverlay(labelOne)
        map.addOverlay(labelTwo01)
        map.addOverlay(labelTwo02)
      }

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
    position: relative;
    margin-top: 45px;
    height: 620px;
    width: 100%;
    z-index: 555;
  }
</style>
