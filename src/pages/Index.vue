<template>
  <div>
    <SedHeader/>
    <ViewSwitcher @viewType="switchView"/>
    <Header/>
    <Responsible :view-type="viewType"/>
    <Summary :view-type="viewType"/>
<!--    <LineChart class="highcharts-layout-fix" :data="linechartData" @period-changed="onPeriodChanged"/>-->
    <indicator-list :view-type="viewType"/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Responsible from "@/components/Responsible.vue";
import Summary from "@/components/Summary.vue";
import {defineComponent} from 'vue'
import LineChart from "@/components/LineChart.vue";
import ComponentsStyles from '@/styles/linechart.styl'
import IndicatorList from "@/components/IndicatorList.vue";
import SedHeader from "@/components/SedHeader.vue";
import ViewSwitcher from "@/components/ViewSwitcher.vue";

export default defineComponent({
  name: "Index",
  components: {
    ViewSwitcher,
    SedHeader,
    IndicatorList,
    Header,
    Responsible,
    Summary,
    LineChart
  },
  data () {
    return {
      viewType: 'simpleMail',
      linechartData: {
        "units": "млрд.руб",
        "periods": [
          {
            "id": 2022,
            "label": "2022",
            "type": "monthly",
            "line": "2023-10-25",
            "data": [
              {
                "data": [],
                "color": "#92A6B9",
                "type": "area",
                "zIndex": 1,
                "stroke": true,
                "dashStyle": "custom"
              },
              {
                "data": [
                  {
                    "x": 1640984400000,
                    "y": 702.67,
                    "date": "2022-01-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1643662800000,
                    "y": 1405.33,
                    "date": "2022-02-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1646082000000,
                    "y": 2108,
                    "date": "2022-03-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1648760400000,
                    "y": 2810.67,
                    "date": "2022-04-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1651352400000,
                    "y": 3513.33,
                    "date": "2022-05-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1654030800000,
                    "y": 4216,
                    "date": "2022-06-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1656622800000,
                    "y": 4918.67,
                    "date": "2022-07-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1659301200000,
                    "y": 5621.33,
                    "date": "2022-08-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1661979600000,
                    "y": 6324,
                    "date": "2022-09-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1664571600000,
                    "y": 9100,
                    "date": "2022-10-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1667250000000,
                    "y": 8531,
                    "date": "2022-11-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1669842000000,
                    "y": 8432,
                    "date": "2022-12-01",
                    "dataLabels": {}
                  }
                ],
                "color": "#585F70",
                "type": "area",
                "zIndex": 1
              },
              {
                "data": [
                  {
                    "x": 1640984400000,
                    "y": null,
                    "date": "2022-01-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1643662800000,
                    "y": null,
                    "date": "2022-02-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1646082000000,
                    "y": null,
                    "date": "2022-03-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1648760400000,
                    "y": null,
                    "date": "2022-04-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1651352400000,
                    "y": null,
                    "date": "2022-05-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1654030800000,
                    "y": null,
                    "date": "2022-06-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1656622800000,
                    "y": null,
                    "date": "2022-07-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1659301200000,
                    "y": null,
                    "date": "2022-08-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1661979600000,
                    "y": null,
                    "date": "2022-09-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1664571600000,
                    "y": 9144,
                    "date": "2022-10-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1667250000000,
                    "y": 9120,
                    "date": "2022-11-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1669842000000,
                    "y": 9143,
                    "date": "2022-12-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  }
                ],
                "color": "#22db67",
                "stroke": true,
                "type": "area",
                "zIndex": 2
              }
            ]
          },
          {
            "id": "currentPeriod",
            "label": "Текущий период",
            "type": "monthly",
            "line": "2023-10-25",
            "data": [
              {
                "data": [],
                "color": "#92A6B9",
                "type": "area",
                "zIndex": 1,
                "stroke": true,
                "dashStyle": "custom"
              },
              {
                "data": [
                  {
                    "x": 1664571600000,
                    "y": 9100,
                    "date": "2022-10-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1667250000000,
                    "y": 8531,
                    "date": "2022-11-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1669842000000,
                    "y": 8432,
                    "date": "2022-12-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1672520400000,
                    "y": 8992,
                    "date": "2023-01-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1675198800000,
                    "y": 9531,
                    "date": "2023-02-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1677618000000,
                    "y": 8907,
                    "date": "2023-03-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1680296400000,
                    "y": 10518,
                    "date": "2023-04-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1682888400000,
                    "y": 11338,
                    "date": "2023-05-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1685566800000,
                    "y": 10863,
                    "date": "2023-06-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1688158800000,
                    "y": 10724,
                    "date": "2023-07-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1690837200000,
                    "y": 9100,
                    "date": "2023-08-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1693515600000,
                    "y": 8933,
                    "date": "2023-09-01",
                    "dataLabels": {}
                  }
                ],
                "color": "#585F70",
                "type": "area",
                "zIndex": 1
              },
              {
                "data": [
                  {
                    "x": 1664571600000,
                    "y": 9144,
                    "date": "2022-10-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1667250000000,
                    "y": 9120,
                    "date": "2022-11-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1669842000000,
                    "y": 9143,
                    "date": "2022-12-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1672520400000,
                    "y": 8997,
                    "date": "2023-01-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1675198800000,
                    "y": 9539,
                    "date": "2023-02-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1677618000000,
                    "y": 8807,
                    "date": "2023-03-01",
                    "dataLabels": {
                      "color": "#22db67"
                    },
                    "marker": {
                      "lineColor": "#22db67"
                    },
                    "zones": "#22db67",
                    "comment": null
                  },
                  {
                    "x": 1680296400000,
                    "y": 10418,
                    "date": "2023-04-01",
                    "dataLabels": {
                      "color": "#22db67"
                    },
                    "marker": {
                      "lineColor": "#22db67"
                    },
                    "zones": "#22db67",
                    "comment": null
                  },
                  {
                    "x": 1682888400000,
                    "y": 11344,
                    "date": "2023-05-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1685566800000,
                    "y": 11710,
                    "date": "2023-06-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1688158800000,
                    "y": 13760,
                    "date": "2023-07-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1690837200000,
                    "y": null,
                    "date": "2023-08-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1693515600000,
                    "y": null,
                    "date": "2023-09-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  }
                ],
                "color": "#22db67",
                "stroke": true,
                "type": "area",
                "zIndex": 2
              }
            ]
          },
          {
            "id": 2023,
            "label": "2023",
            "type": "monthly",
            "line": "2023-10-25",
            "data": [
              {
                "data": [],
                "color": "#92A6B9",
                "type": "area",
                "zIndex": 1,
                "stroke": true,
                "dashStyle": "custom"
              },
              {
                "data": [
                  {
                    "x": 1672520400000,
                    "y": 8992,
                    "date": "2023-01-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1675198800000,
                    "y": 9531,
                    "date": "2023-02-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1677618000000,
                    "y": 8907,
                    "date": "2023-03-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1680296400000,
                    "y": 10518,
                    "date": "2023-04-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1682888400000,
                    "y": 11338,
                    "date": "2023-05-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1685566800000,
                    "y": 10863,
                    "date": "2023-06-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1688158800000,
                    "y": 10724,
                    "date": "2023-07-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1690837200000,
                    "y": 9100,
                    "date": "2023-08-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1693515600000,
                    "y": 8933,
                    "date": "2023-09-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1696107600000,
                    "y": 8988.67,
                    "date": "2023-10-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1698786000000,
                    "y": 9044.33,
                    "date": "2023-11-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1701378000000,
                    "y": 9100,
                    "date": "2023-12-01",
                    "dataLabels": {}
                  }
                ],
                "color": "#585F70",
                "type": "area",
                "zIndex": 1
              },
              {
                "data": [
                  {
                    "x": 1672520400000,
                    "y": 8997,
                    "date": "2023-01-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1675198800000,
                    "y": 9539,
                    "date": "2023-02-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1677618000000,
                    "y": 8807,
                    "date": "2023-03-01",
                    "dataLabels": {
                      "color": "#22db67"
                    },
                    "marker": {
                      "lineColor": "#22db67"
                    },
                    "zones": "#22db67",
                    "comment": null
                  },
                  {
                    "x": 1680296400000,
                    "y": 10418,
                    "date": "2023-04-01",
                    "dataLabels": {
                      "color": "#22db67"
                    },
                    "marker": {
                      "lineColor": "#22db67"
                    },
                    "zones": "#22db67",
                    "comment": null
                  },
                  {
                    "x": 1682888400000,
                    "y": 11344,
                    "date": "2023-05-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1685566800000,
                    "y": 11710,
                    "date": "2023-06-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1688158800000,
                    "y": 13760,
                    "date": "2023-07-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1690837200000,
                    "y": null,
                    "date": "2023-08-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1693515600000,
                    "y": null,
                    "date": "2023-09-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1696107600000,
                    "y": null,
                    "date": "2023-10-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1698786000000,
                    "y": null,
                    "date": "2023-11-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1701378000000,
                    "y": null,
                    "date": "2023-12-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  }
                ],
                "color": "#22db67",
                "stroke": true,
                "type": "area",
                "zIndex": 2
              }
            ]
          },
          {
            "id": "allTime",
            "label": "За все время",
            "type": "yearly",
            "line": "2023-10-25",
            "data": [
              {
                "data": [],
                "color": "#92A6B9",
                "type": "area",
                "zIndex": 1,
                "stroke": true,
                "dashStyle": "custom"
              },
              {
                "data": [
                  {
                    "x": 1669842000000,
                    "y": 8432,
                    "date": "2022-12-01",
                    "dataLabels": {}
                  },
                  {
                    "x": 1701378000000,
                    "y": 9100,
                    "date": "2023-12-01",
                    "dataLabels": {}
                  }
                ],
                "color": "#585F70",
                "type": "area",
                "zIndex": 1
              },
              {
                "data": [
                  {
                    "x": 1669842000000,
                    "y": 9143,
                    "date": "2022-12-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  },
                  {
                    "x": 1701378000000,
                    "y": null,
                    "date": "2023-12-01",
                    "dataLabels": {
                      "color": "#FF526C"
                    },
                    "marker": {
                      "lineColor": "#FF526C"
                    },
                    "zones": "#FF526C",
                    "comment": null
                  }
                ],
                "color": "#22db67",
                "stroke": true,
                "type": "area",
                "zIndex": 2
              }
            ]
          }
        ],
        "data": [
          {
            "data": [],
            "color": "#92A6B9",
            "dashStyle": "custom",
            "stroke": true,
            "type": "area",
            "zIndex": 1
          },
          {
            "data": [
              {
                "x": 1640984400000,
                "y": 702.67,
                "date": "2022-01-01",
                "dataLabels": {}
              },
              {
                "x": 1643662800000,
                "y": 1405.33,
                "date": "2022-02-01",
                "dataLabels": {}
              },
              {
                "x": 1646082000000,
                "y": 2108,
                "date": "2022-03-01",
                "dataLabels": {}
              },
              {
                "x": 1648760400000,
                "y": 2810.67,
                "date": "2022-04-01",
                "dataLabels": {}
              },
              {
                "x": 1651352400000,
                "y": 3513.33,
                "date": "2022-05-01",
                "dataLabels": {}
              },
              {
                "x": 1654030800000,
                "y": 4216,
                "date": "2022-06-01",
                "dataLabels": {}
              },
              {
                "x": 1656622800000,
                "y": 4918.67,
                "date": "2022-07-01",
                "dataLabels": {}
              },
              {
                "x": 1659301200000,
                "y": 5621.33,
                "date": "2022-08-01",
                "dataLabels": {}
              },
              {
                "x": 1661979600000,
                "y": 6324,
                "date": "2022-09-01",
                "dataLabels": {}
              },
              {
                "x": 1664571600000,
                "y": 9100,
                "date": "2022-10-01",
                "dataLabels": {}
              },
              {
                "x": 1667250000000,
                "y": 8531,
                "date": "2022-11-01",
                "dataLabels": {}
              },
              {
                "x": 1669842000000,
                "y": 8432,
                "date": "2022-12-01",
                "dataLabels": {}
              },
              {
                "x": 1672520400000,
                "y": 8992,
                "date": "2023-01-01",
                "dataLabels": {}
              },
              {
                "x": 1675198800000,
                "y": 9531,
                "date": "2023-02-01",
                "dataLabels": {}
              },
              {
                "x": 1677618000000,
                "y": 8907,
                "date": "2023-03-01",
                "dataLabels": {}
              },
              {
                "x": 1680296400000,
                "y": 10518,
                "date": "2023-04-01",
                "dataLabels": {}
              },
              {
                "x": 1682888400000,
                "y": 11338,
                "date": "2023-05-01",
                "dataLabels": {}
              },
              {
                "x": 1685566800000,
                "y": 10863,
                "date": "2023-06-01",
                "dataLabels": {}
              },
              {
                "x": 1688158800000,
                "y": 10724,
                "date": "2023-07-01",
                "dataLabels": {}
              },
              {
                "x": 1690837200000,
                "y": 9100,
                "date": "2023-08-01",
                "dataLabels": {}
              },
              {
                "x": 1693515600000,
                "y": 8933,
                "date": "2023-09-01",
                "dataLabels": {}
              },
              {
                "x": 1696107600000,
                "y": 8988.67,
                "date": "2023-10-01",
                "dataLabels": {}
              },
              {
                "x": 1698786000000,
                "y": 9044.33,
                "date": "2023-11-01",
                "dataLabels": {}
              },
              {
                "x": 1701378000000,
                "y": 9100,
                "date": "2023-12-01",
                "dataLabels": {}
              }
            ],
            "color": "#585F70",
            "type": "area",
            "zIndex": 1
          },
          {
            "data": [
              {
                "x": 1640984400000,
                "y": null,
                "date": "2022-01-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1643662800000,
                "y": null,
                "date": "2022-02-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1646082000000,
                "y": null,
                "date": "2022-03-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1648760400000,
                "y": null,
                "date": "2022-04-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1651352400000,
                "y": null,
                "date": "2022-05-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1654030800000,
                "y": null,
                "date": "2022-06-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1656622800000,
                "y": null,
                "date": "2022-07-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1659301200000,
                "y": null,
                "date": "2022-08-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1661979600000,
                "y": null,
                "date": "2022-09-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1664571600000,
                "y": 9144,
                "date": "2022-10-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1667250000000,
                "y": 9120,
                "date": "2022-11-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1669842000000,
                "y": 9143,
                "date": "2022-12-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1672520400000,
                "y": 8997,
                "date": "2023-01-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1675198800000,
                "y": 9539,
                "date": "2023-02-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1677618000000,
                "y": 8807,
                "date": "2023-03-01",
                "dataLabels": {
                  "color": "#22db67"
                },
                "marker": {
                  "lineColor": "#22db67"
                },
                "zones": "#22db67",
                "comment": null
              },
              {
                "x": 1680296400000,
                "y": 10418,
                "date": "2023-04-01",
                "dataLabels": {
                  "color": "#22db67"
                },
                "marker": {
                  "lineColor": "#22db67"
                },
                "zones": "#22db67",
                "comment": null
              },
              {
                "x": 1682888400000,
                "y": 11344,
                "date": "2023-05-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1685566800000,
                "y": 11710,
                "date": "2023-06-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1688158800000,
                "y": 13760,
                "date": "2023-07-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1690837200000,
                "y": null,
                "date": "2023-08-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1693515600000,
                "y": null,
                "date": "2023-09-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1696107600000,
                "y": null,
                "date": "2023-10-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1698786000000,
                "y": null,
                "date": "2023-11-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              },
              {
                "x": 1701378000000,
                "y": null,
                "date": "2023-12-01",
                "dataLabels": {
                  "color": "#FF526C"
                },
                "marker": {
                  "lineColor": "#FF526C"
                },
                "zones": "#FF526C",
                "comment": null
              }
            ],
            "color": "#22db67",
            "stroke": true,
            "type": "area",
            "zIndex": 2
          }
        ]
      }
    }
  },
  methods: {
    onPeriodChanged(period) {
      this.period = isNaN(+period) ? period : +period;
    },
    switchView (value) {
      this.viewType = value
    }
  }
})
</script>

<style scoped lang="sass">
.indicators__info_banner
  align-items: center
  display: flex
  gap: 16px
  padding: 12px 16px
  border-radius: 12px
  background: rgba(24, 162, 242, 0.12)

.info__text
  color: #2C2D2E
  font-family: SF Pro Text, sans-serif
  font-size: 15px
  font-style: normal
  font-weight: normal
  line-height: 20px
  letter-spacing: -0.24px

.indicators
  margin: 0 80px

.category__header
  color: #000
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro Display, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: bold
  line-height: 30px
  letter-spacing: 0.36px
  padding: 32px 0 16px

.indicators__list_header
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  gap: 24px
  padding: 8px 0

.indicators__list_header > div
  font-feature-settings: 'ss03' on, 'clig' off, 'liga' off
  font-family: SF Pro Text Regular, sans-serif
  font-size: 15px
  font-style: normal
  font-weight: 400
  line-height: 22px
  letter-spacing: -0.456px

.p-bottom-24
  padding-bottom: 24px

.indicators__list_line_type_1
  border: 1.5px solid rgba(0, 0, 0, 0.80)
  margin: 0

.indicators__list_line_type_2
  border: 1px solid rgba(0, 0, 0, 0.80)
  margin: 0

.indicator__item
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: 24px
  align-items: center
  padding: 16px 0
  border-bottom: 1px solid rgba(0, 0, 0, 0.40)

.indicator__button
  padding: 12px 16px
  color: #FFFFFF
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.12)
  margin-left: auto
  border-radius: 4px

.button__green
  background: linear-gradient(180deg, #1DBF53 0%, #009E35 100%)

.button__green:hover
  background: linear-gradient(180deg, #1DBF53 0%, #009E35 20%)

.button__red
  background: linear-gradient(180deg, #FF4A4A 0%, #EA0000 100%)

.button__red:hover
  background: linear-gradient(180deg, #FF4A4A 0%, #EA0000 20%)

.indicators__list_wrapper
  display: flex
  flex-direction: column
  flex-wrap: wrap

.indicator__title
  color: #000
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro,sans-serif
  font-size: 17px
  font-style: normal
  font-weight: 590
  line-height: 22px
  letter-spacing: -0.442px

.indicator__unit
  color: #92A6B9
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro,sans-serif
  font-size: 13px
  font-style: normal
  font-weight: normal
  line-height: 20px
  letter-spacing: -0.078px

.indicator__value
  color: #000
  font-feature-settings: 'ss03' on, 'clig' off, 'liga' off
  font-family: SF Pro Text Bold, sans-serif
  font-size: 23px
  font-style: normal
  font-weight: bold
  line-height: 28px
  letter-spacing: -0.456px

.indicator__button_text
  font-family: SF Pro Text Regular, sans-serif
  font-size: 15px
  font-style: normal
  font-weight: 500
  line-height: 20px

.text-center
  text-align: center

.text-bold
  font-weight: bold

.info
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-end
  padding-bottom: 80px
  padding-right: 80px
  &__text
    color: #2C2D2E
    font-family: SF Pro Text, sans-serif
    font-size: 15px
    font-style: normal
    font-weight: normal
    line-height: 20px
    letter-spacing: -0.24px

.indicators__info_banner
  align-items: center
  display: flex
  gap: 16px
  padding: 12px 16px
  border-radius: 12px
  background: rgba(24, 162, 242, 0.12)

.indicators
  margin: 0 80px
  &__list_header
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    gap: 24px
    padding: 8px 0
    > div
      font-feature-settings: 'ss03' on, 'clig' off, 'liga' off
      font-family: SF Pro Text Regular, sans-serif
      font-size: 15px
      font-style: normal
      font-weight: 400
      line-height: 22px
      letter-spacing: -0.456px


  &__list_line_type_1
    border: 1.5px solid rgba(0, 0, 0, 0.80)
    margin: 0

  &__list_line_type_2
    border: 1px solid rgba(0, 0, 0, 0.80)
    margin: 0

  &__list_wrapper
    display: flex
    flex-direction: column
    flex-wrap: wrap


.category__header
  color: #000000
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro Display, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: bold
  line-height: 30px
  letter-spacing: 0.36px
  padding: 32px 0 16px

.p-bottom-24
  padding-bottom: 24px
</style>