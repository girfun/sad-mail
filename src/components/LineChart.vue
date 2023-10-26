<template>
  <div>
    <div v-if="comment" class="line-chart-comment-wrapper">
      <div class="line-chart-comment">
        <div class="line-chart-comment__icon">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNTA5NzcgMjIuMjA5QzYuOTU4OTggMjIuMjA5IDcuMzIwMzEgMjIuMDIzNCA3Ljg2NzE5IDIxLjUzNTJMMTEuNTg3OSAxOC4yNDQxSDE3LjYwMzVDMjAuNTkxOCAxOC4yNTM5IDIyLjQxOCAxNi4zOTg0IDIyLjQxOCAxMy40Mzk1VjUuNjQ2NDhDMjIuNDE4IDIuNjg3NSAyMC41OTE4IDAuODQxNzk3IDE3LjYwMzUgMC44NDE3OTdINS4zODY3MkMyLjQwODIgMC44NDE3OTcgMC41ODIwMzEgMi42Nzc3MyAwLjU4MjAzMSA1LjY0NjQ4VjEzLjQzOTVDMC41ODIwMzEgMTYuNDA4MiAyLjUzNTE2IDE4LjI0NDEgNS4yMDExNyAxOC4yNDQxSDUuNDY0ODRWMjEuMDQ2OUM1LjQ2NDg0IDIxLjc1OTggNS44NTU0NyAyMi4yMDkgNi41MDk3NyAyMi4yMDlaTTYuMDMxMjUgNi45MzU1NUM1LjYxMTMzIDYuOTM1NTUgNS4yNjk1MyA2LjU2NDQ1IDUuMjY5NTMgNi4xMzQ3N0M1LjI2OTUzIDUuNzI0NjEgNS42MTEzMyA1LjM1MzUyIDYuMDMxMjUgNS4zNTM1MkgxNi45NTlDMTcuMzg4NyA1LjM1MzUyIDE3Ljc0MDIgNS43MTQ4NCAxNy43NDAyIDYuMTM0NzdDMTcuNzQwMiA2LjU2NDQ1IDE3LjM4ODcgNi45MzU1NSAxNi45NTkgNi45MzU1NUg2LjAzMTI1Wk02LjAzMTI1IDEwLjQyMTlDNS42MTEzMyAxMC40MjE5IDUuMjY5NTMgMTAuMDUwOCA1LjI2OTUzIDkuNjIxMDlDNS4yNjk1MyA5LjIwMTE3IDUuNjExMzMgOC44Mzk4NCA2LjAzMTI1IDguODM5ODRIMTYuOTU5QzE3LjM4ODcgOC44Mzk4NCAxNy43NDAyIDkuMjAxMTcgMTcuNzQwMiA5LjYyMTA5QzE3Ljc0MDIgMTAuMDUwOCAxNy4zODg3IDEwLjQyMTkgMTYuOTU5IDEwLjQyMTlINi4wMzEyNVpNNi4wMzEyNSAxMy45MDgyQzUuNjExMzMgMTMuOTA4MiA1LjI2OTUzIDEzLjUzNzEgNS4yNjk1MyAxMy4xMTcyQzUuMjY5NTMgMTIuNjg3NSA1LjYxMTMzIDEyLjMyNjIgNi4wMzEyNSAxMi4zMjYySDEzLjE3OTdDMTMuNjA5NCAxMi4zMjYyIDEzLjk2MDkgMTIuNjc3NyAxMy45NjA5IDEzLjExNzJDMTMuOTYwOSAxMy41MzcxIDEzLjYwOTQgMTMuOTA4MiAxMy4xNzk3IDEzLjkwODJINi4wMzEyNVoiIGZpbGw9IiNGRjUyNkMiLz4KPC9zdmc+Cg==" alt="">
        </div>
        <div>
          <div class="line-chart-comment__title">
            {{ commentLabel }}:
          </div>
          <span v-html="comment"></span>
        </div>
      </div>
    </div>
    <div :style="{'overflow': currentChartDateType === YEARLY ? 'scroll' : 'hidden'}">
      <div
          class="chart-wrapper"
          ref="chart-wrapper"
          :style="wrapperStyles"
          :class="forPlotLineLabelClasses"
      >
        <vue-highcharts
            v-if="showChart"
            :highcharts="highchartsInstance"
            :options="options"
            ref="chart"
        />
      </div>
    </div>
    <div class="periods-wrapper">
      <div class="periods">
        <div
            v-for="(period, i) in periods"
            :key="i"
            class="period"
            :class="{'period_active': period.id == activePeriod}"
            @click="activePeriod = period.id"
        >
          {{period.label}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from "highcharts"
import VueHighcharts from 'vue3-highcharts'
import { each, flatMap, uniq, cloneDeep } from 'lodash'
import stockInit from "highcharts/modules/stock";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import moment from '@/helpers/moment';

Highcharts.wrap(Highcharts.SVGElement.prototype, 'dashstyleSetter', function (proceed) {
  let value = arguments[1];
  let i;

  value = value && value.toLowerCase();
  if (value) {
    value = value
        .replace('shortdashdotdot', '3,1,1,1,1,1,')
        .replace('shortdashdot', '3,1,1,1')
        .replace('shortdot', '1,1,')
        .replace('shortdash', '3,1,')
        .replace('longdash', '8,3,')
        .replace(/dot/g, '1,3,')
        .replace('dash', '4,3,')
        .replace('custom', '1,1') // customized
        .replace(/,$/, '')
        .split(','); // ending comma

    i = value.length;
    while (i--) {
      value[i] = parseInt(value[i]) * 1;
    }
    value = value.join(',')
        .replace('NaN', 'none'); // #3226
    this.element.setAttribute('stroke-dasharray', value);
  }
});

stockInit(Highcharts);

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
const MONTHLY = 'monthly';
const YEARLY = 'yearly';
const CURRENT_PERIOD = 'currentPeriod';

export default {
  name: "LineChart",

  components: {
    VueHighcharts,
    vSelect
  },

  props: {
    data: {
      type: [Object, Array],
      required: true
    },
  },

  data:() => ({
    showChart: false,
    activePeriod: null,
    periods: [],
    options: {
      chart: {
        marginTop: '10',
        marginLeft: '30',
        marginRight: '30',
        style: {
          fontFamily: 'Gotham Pro, Helvetica, Arial, sans-serif'
        },
        zoomType: 'y',
        pinchType: 'y',
        panning: {
          enabled: true,
          type: 'xy'
        },
        resetZoomButton: {
          theme: {
            zIndex: 999999,
            fill: '#0084ff',
            stroke: '#0084ff',
            r: 8,
            style: {
              color: '#FFFFFF'
            }
          }
        }
      },

      tooltip: {
        enabled: false,
        followTouchMove: false
      },

      title: {
        text: ''
      },

      credits: {
        enabled: false
      },

      xAxis: {
        tickInterval: 30 * 24 * 3600 * 1000,
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%B',
        },
        max: 0,
        tickAmount: 12,
        labels: {
          align: 'center',
          rotation: 270,
          allowOverlap: true,
          style: {
            color: '#2e374d',
            fontSize: '11px',
            fontWeight: 'normal',
            fontStyle: 'normal'
          },
          y: 10
        },
        gridLineWidth: 1,
        tickLength: 0,
        lineWidth: 0,
        lineColor: '#8D96AD',

        plotLines: [
          {
            color: 'rgb(137, 197, 251)',
            value: null,
            width: 2,
            zIndex: 999,
            label: {
              align: 'center',
              text: '',
              rotation: 0,
              y: -25,
              x: -13,
              style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: -.4,
                backgroundColor: '#0084FF',
                padding: '4px 7px',
                borderRadius: '12px',
                opacity: '.6'
              }
            }
          }
        ]

      },

      yAxis: {
        title: {
          useHTML: true,
          text: '',
          align: 'high',
          rotation: 0,
          offset: 0,
          style: {
            fontSize: '7px',
            color: 'rgba(46, 55, 77, 0.5)'
          },
          textAlign: 'high'
        },
        gridLineWidth: 1,
        labels: {
          enabled: false
        },
        min: null,
      },

      legend: {
        enabled: false
      },

      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, new Highcharts.getOptions().colors[0]],
              [1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },

          marker: {
            radius: 5,
            enabled: true,
            symbol: 'circle',
          },

          dataLabels: {
            overflow: 'allow',
            crop: false,
            zIndex: 99,
            padding: 13
          }
        },

        series: {
          dataLabels: {
            enabled: true,
            useHTML: true,
            style: {
              fontSize: '7px',
              textOutline: 0,
              fontWeight: 'bold'
            },
            formatter: function () {
              if (this.color === '#92A6B9') {
                return `<div class="undefined-value">
                                            <div class="undefined-icon">
                                                ?
                                            </div>
                                            <div class="undefined-popup">
                                                    Фактическое значение в отчетном месяце не введено.
                                            </div>
                                        </div>`;
              }
              return this.y;
            }
          },
          states: {
            inactive: {
              opacity: 1
            }
          },
        }
      },

      series: [

      ],

      responsive: {
        rules: [{
          condition: {
            minWidth: 700
          },
          chartOptions: {
            xAxis: {
              labels: {
                rotation: 0,
                style: {
                  fontSize: '6px',
                  letterSpacing: '-0.65px',
                  color: '#6F849E',
                  fontWeight: '200'
                },
              }
            }
          }
        },
          {
            condition: {
              minWidth: 1000
            },
            chartOptions: {
              chart: {
                marginLeft: 55,
                height: 250,
                marginTop: 50
              },
              xAxis: {
                labels: {
                  rotation: 0,
                  align: 'center',
                  style: {
                    fontSize: '7px',
                    fontWeight: 'normal',
                    color: '#4A5A75',
                    textAlign: 'center'
                  },
                  y: 25
                }
              },
              plotOptions: {
                series: {
                  dataLabels: {
                    style: {
                      fontSize: '7px'
                    }
                  }
                }
              }
            }
          }]
      }
    },
    wrapperHeight: null,
    forPlotLineLabelClasses: [],
    comment: null,
    commentLabel: 'Комментарий к последнему отчетному месяцу',
    currentChartDateType: null,
    YEARLY
  }),

  created() {
    Highcharts.setOptions({
      lang: {
        months: months,
        weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        shortMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        resetZoom: 'Сбросить увеличение'
      },
      // yAxis: {
      //     max: this.largestYValue
      // }
    })

    this.periods = this.getPeriods();

    const currentYear = moment().format('YYYY');
    const currentPeriod = this.periods.find(item => item.id === CURRENT_PERIOD)

    if (void 0 !== currentPeriod) {
      this.activePeriod = currentPeriod.id;
    } else {
      this.activePeriod = this.periods.findIndex(item => +item.id === +currentYear) === -1 ? this.periods[this.periods.length - 2].id : currentYear;
    }
  },

  mounted() {
    setTimeout(() => {
      this.wrapperHeight = this.$refs['chart-wrapper'].offsetHeight + 30;
      this.setLabelClasses();
      this.addEvents();
    }, 500)
  },

  computed: {
    highchartsInstance() {
      return Highcharts;
    },

    largestYValue() {
      let data = this.data.data.flatMap(i => i.data).sort((a, b) => a.y - b.y)
      let largest = data.reverse()[0].y

      return (largest) < 1 ? (largest + 0.1) : null
    },

    wrapperStyles() {
      const styles = {
        height: `${this.wrapperHeight}px`,
        width: 'auto'
      };

      if (this.$refs['chart-wrapper']) {
        const width = this.$refs['chart-wrapper'].offsetWidth;
        // только года
        const yearsCount = this.data.periods.filter(item => typeof item.id !== 'string').length;
        styles.width = this.currentChartDateType === YEARLY ? `${width * yearsCount}px` : 'auto'
      }
      return styles;
    },

    selectOptions() {
      return this.periods.map(period => ({
        title: period,
        value: period
      }));
    }
  },

  methods: {
    setData() {
      this.showChart = false

      this.$nextTick(() => {
        this.setOptions();
        this.findAndSetComment();
        this.showChart = true;
      });
    },

    setOptions() {
      this.options.series = [];

      let data = cloneDeep(this.data.periods);
      const activeData = data.find(item => item.id == this.activePeriod);
      data = activeData;
      const type = data.type;

      switch(type) {
        case YEARLY:
          this.options.chart.zoomType = undefined;
          this.options.chart.pinchType = undefined;
          this.options.xAxis.labels.formatter = function () {
            const date = new Date(this.value);

            return +moment(this.value).format('M') === 1 || this.isFirst || this.isLast ? `<b>${months[date.getMonth()]} \`${date.getFullYear().toString().substr(-2)}</b> ` : `${months[date.getMonth()]} `;
          }
          data = this.data;
          break;
        default:
          this.options.chart.zoomType = 'y';
          this.options.chart.pinchType = 'y';
          this.options.xAxis.labels.formatter = function () {
            const date = new Date(this.value);

            return `${months[date.getMonth()]} \`${date.getFullYear().toString().substr(-2)} `
          }
      }

      if (data.line) {
        const date = data.line.toString().split('-');
        this.options.xAxis.plotLines[0].value = Date.UTC(date[0], date[1] - 1, date[2]);
        this.options.xAxis.plotLines[0].label.text = '<div>' + date.reverse().join('.') + '</div>'
        this.options.xAxis.plotLines[0].label.useHTML = true;
      } else {
        this.options.xAxis.plotLines[0].value = null;
      }

      data = data.data;

      data = data.map(item => (
          {
            color: item.color,
            stroke: item.stroke,
            title: item.title,
            zIndex: item.zIndex,
            type: item.type,
            dashStyle: item.dashStyle,
            data: item.data
          }
      ));

      each(data, (d, index) => {
        let zones = [];

        each(d.data, (item, i) => {
          if (index === 2) {
            let comment, commentLabel;

            if (item.comment) {
              comment = item.comment;

              if (index + 1 === data.length && i + 1 === d.data.length) {
                commentLabel = 'Комментарий к последнему отчетному месяцу';
              } else {
                commentLabel = 'Комментарий к отчетному месяцу';
              }
            } else {
              comment = '';
              commentLabel = '';
            }

            item.events = {
              click: () => {
                this.comment = comment;
                this.commentLabel = commentLabel;
              }
            };
          }

          if (!item.zones) {
            return;
          }

          zones.push({
            value: index === 1 ? moment(item.x).endOf('month').subtract(1, 'days').valueOf() : moment(item.x).endOf('month').subtract(4, 'days').valueOf(),
            color: item.zones,
            fillColor: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                [0, new Highcharts.Color(item.zones).setOpacity(0.22).get('rgba')],
                [1, new Highcharts.Color(item.zones).setOpacity(0).get('rgba')]
              ]
            }
          });
        });

        let fillColor = {
          stops: [
            [0, new Highcharts.Color(d.color).setOpacity(0.22).get('rgba')],
            [0, new Highcharts.Color(d.color).setOpacity(0).get('rgba')]
          ]
        };

        if (d.color !== '#585F70') {
          fillColor = {
            stops: [
              [0, new Highcharts.Color(d.color).setOpacity(0.22).get('rgba')],
              [1, new Highcharts.Color(d.color).setOpacity(0).get('rgba')]
            ]
          };
        }

        d.data = d.data.filter(item => item.state === 'active' || item.state === void 0);
        this.options.series.push({
          type: d.type,
          fillColor: fillColor,
          color: d.color,
          name: d.title,
          zIndex: d.zIndex,
          data:  d.data,
          states: index !== 2 ? {
            hover: {
              enabled: false
            }
          } : {},
          dataLabels: {
            style: {
              color: d.color,
            },
            z: 6 + index,
            labelrank: index
          },
          marker: {
            enabled: d.marker,
            fillColor: d.stroke ? '#FFFFFF' : d.color,
            lineColor: d.stroke ? d.color  : '#FFFFFF',
            lineWidth: d.stroke ? 3 : 0
          },
          zones: zones,
          zoneAxis: 'x',
          dashStyle: d.dashStyle ? d.dashStyle : 'Solid'
        })
      })

      this.options.yAxis.title.text = this.data.units ? `<div style="margin-top: -7px;">${this.data.units}</div>` : `<div style="margin-top: -7px;">%</div>`;
      this.options.yAxis.min = this.findMinimum(data);
      const yMax = this.findMax(data, 'y');
      if (this.options.yAxis.min === 0 && yMax === 0) {
        this.options.yAxis.max = 15;
      } else {
        this.options.yAxis.max = yMax + (((yMax - this.options.yAxis.min) / 100) * 5);
      }

      if (!activeData.maxX) {
        // суммирование пары дней для того, чтобы последняя точка отображалась на графике
        this.options.xAxis.max = this.findMax(data, 'x').valueOf() + 2 * 24 * 3600 * 1000;
      } else {
        this.options.xAxis.max = activeData.maxX
      }

      if (type === MONTHLY) {
        let xMin = activeData.minX ? activeData.minX : this.findMin(data, 'x');
        this.options.xAxis.min = xMin.valueOf();
      } else {
        this.options.xAxis.min = null
      }
    },

    findMinimum(data) {
      return Math.min.apply(Math, flatMap(data, item => flatMap(item.data, item => item.y)).filter(item => item !== null));
    },

    findMax(data, field) {
      return Math.max.apply(Math, flatMap(data, item => flatMap(item.data, item => item[field])));
    },

    findMin(data, field) {
      return Math.min.apply(Math, flatMap(data, item => flatMap(item.data, item => item[field])));
    },

    getPeriods() {
      return this.data.periods.map(item => ({
        label: item.label,
        id: item.id
      }));
    },

    isMobile() {
      return window.innerWidth < 600;
    },

    setLabelClasses() {
      setTimeout(() => {
        this.forPlotLineLabelClasses = [];
        if (void 0 === this.$refs.chart) {
          return;
        }
        const xAxis = this.$refs.chart.chart.xAxis[0];
        const lineMoment = moment(this.data.line);
        if (lineMoment.valueOf() < xAxis.min || lineMoment.valueOf() > xAxis.max) {
          return;
        }

        if (moment(this.data.line).subtract(2, 'months').valueOf() <= xAxis.min) {
          this.forPlotLineLabelClasses.push('plot-line-min');
        }

        if (moment(this.data.line).add(2, 'months').valueOf() >= xAxis.max) {
          this.forPlotLineLabelClasses.push('plot-line-max');
        }
      }, 100);
    },

    onSelectInput(value) {
      this.activePeriod = value.value;
    },

    findAndSetComment() {
      if (void 0 === this.options.series[2]) {
        return;
      }

      const lastMonth = this.options.series[2].data[this.options.series[2].data.length - 1];
      this.comment = void 0 === lastMonth || null === lastMonth.comment || null === lastMonth.y ? null : lastMonth.comment;
      this.commentLabel = 'Комментарий к последнему отчетному месяцу';
    },

    addEvents() {
      document.addEventListener('click', e => {
        const anotherList = document.getElementsByClassName('undefined-popup');
        for (let element of anotherList) {
          element.style.display = 'none';
        }

        if (e.target.className === 'undefined-value' || e.target.className === 'undefined-icon') {
          let list;

          if (e.target.className === 'undefined-value') {
            list = e.target.getElementsByClassName('undefined-popup');
          } else {
            list = e.target.parentNode.getElementsByClassName('undefined-popup');
          }

          if (list && list[0]) {
            list[0].style.display = 'block';
          }
        }
      })
    },

    setCurrentChartDateType() {
      const data = this.data.periods.find(item => item.id == this.activePeriod);
      this.currentChartDateType = data.type;
    }
  },

  watch: {
    data() {
      this.setData();
    },

    activePeriod() {
      const periodId = this.data.periods.find(item => item.id == this.activePeriod).id;
      this.$emit('period-changed', periodId);
      this.setData();
      this.setLabelClasses();
      this.setCurrentChartDateType();
    }
  }
}
</script>

<style lang="stylus">
primary-color = #010717
blue = rgba(0, 132, 255, .6)
custom-gray = rgba(137, 147, 172, .6)
main-indents = 0 15px
mobile-media-query = "only screen and (max-width: 768px)"


.scroll-lock-by-gantt
  overflow hidden !important

.chart-wrapper
  position relative
  padding 0 20px

.chart-nav-button
  position absolute
  top 0
  bottom 0
  margin auto
  width 40px
  height 20px
  z-index 999
  background-image url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy4zNDUuMjQ0TC4zNDkgNi4yNDFhMSAxIDAgMDAxLjMwMiAxLjUxOEM0LjgyOSA0Ljk0NSA2LjYxIDMuNDE3IDcgMy4xNzRjLjU4Mi0uMzYzIDEtLjY0IDIgMCAuNjY3LjQyNyAyLjQ1IDEuOTU1IDUuMzUgNC41ODVhMSAxIDAgMTAxLjMtMS41MThMOC42NTYuMjQ0YS45OTYuOTk2IDAgMDAtMS4zMSAweiIgZmlsbD0iIzAwODRGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+")
  background-repeat no-repeat
  background-size contain
  &__previous
    left -35px
    transform rotate(-90deg)
  &__next
    right -35px
    -webkit-transform rotate(90deg)
    transform rotate(90deg)

.chart-wrapper
  padding: 0 !important

.highcharts-credits
  display: none

.plot-line-marker
  position: absolute;
  left: -9px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 14px;
  background: #0084FF;

  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5)
    display none

.highcharts-plot-line-label
  &:before
    content ''
    position absolute
    left calc(50% - 2px)
    bottom -13px
    width 2px
    height 10px
    background-color #0084ff
  &:after
    content ''
    position absolute
    width 0
    height 0
    border-style solid
    border-width 7px 5px 0 5px
    border-color #0084ff transparent transparent transparent
    bottom -7px
    left -1px
    right 0
    margin auto

.periods-wrapper
  overflow scroll
  &::-webkit-scrollbar
    display none

.periods
  display flex
  align-items center
  margin 30px 0 15px 38px
  @media mobile-media-query
    margin 0 0 15px 38px
.period
  display flex
  align-items center
  justify-content center
  min-width 50px
  height 50px
  color #0084FF
  font-size 18px
  line-height 22px
  background-color rgba(0, 132, 255, 0.1)
  border-radius 8px
  margin 0 10px 0 0
  padding 0 10px
  box-sizing border-box
  @media mobile-media-query
    font-size 14px
    flex-shrink 0
    line-height 22px
    height 30px
    white-space nowrap
    margin 0 4px 0 0
  &_active
    background-color #0084FF
    color #fff

.select-wrapper
  width 100%
  padding 0 20px
  box-sizing border-box

  .v-select
    background-color #EEF2F7
    border-radius 5px
    .vs__selected
      font-family Gotham Pro, Helvetica, Arial, sans-serif
      font-size 16px
      line-height 24px
      letter-spacing -0.4375px
      color #0084FF
      font-weight 600
    .vs__open-indicator
      fill #0084FF
    .vs__dropdown-toggle
      border none

  .v-select:not(.vs--open)
    .vs__clear,
    .vs__search
      display none

    .vs__selected-options
      flex-grow 0
      flex-basis 0
      white-space nowrap

.select
  &_disabled
    pointer-events none
    touch-action none

    .vs__selected
      color rgba(46, 55, 77, 0.5) !important
    .vs__open-indicator
      fill rgba(46, 55, 77, 0.5) !important

.plot-line-max
  .highcharts-plot-line-label
    &:before
      left calc(100% - 26px)
    &:after
      left calc(100% - 49px)
    margin-left -25px !important
.plot-line-min
  .highcharts-plot-line-label
    &:before
      left 22px
    &:after
      left 18px
      right auto
    margin-left 25px !important

.line-chart-comment
  display inline-flex
  position relative
  padding 15px 20px
  background-color #FFF8DB
  font-size 16px
  line-height 22px
  color #4A536B
  font-weight 300
  border-radius 10px
  margin 10px 0 0
  box-sizing border-box
  max-width calc(100% - 15px)
  &__title
    font-size 18px
    line-height 22px
    letter-spacing -0.361px
    color #4A536B
    font-weight bold
  &__icon
    margin-right 10px
  &-wrapper
    margin 25px 0 15px

.undefined-value
  position relative
  font-size 16px
  width 20px
  height 45px
  top 25px
  z-index 9999999

.undefined-icon
  display flex
  justify-content center
  align-items center
  color #fff
  width 20px
  height 20px
  border-radius 50%
  background-color  #FF526C

.undefined-popup
  display none
  position absolute
  width 186px
  height 68px
  background #FFF
  box-shadow 0px 4px 32px rgba(0, 0, 0, 0.16), 0px 0px 4px rgba(0, 0, 0, 0.04)
  border-radius 10px
  padding 8px 12px
  font-size 14px
  font-weight normal
  line-height 18px
  letter-spacing -0.154px
  color #2E374D
  white-space normal
  transform translate(-13px, calc(-100% - 32px))
  z-index 999999999
  &:after
    content ''
    display block
    position absolute
    width 0
    height 0
    border-style solid
    border-width 8px 10px 0 10px
    border-color #ffffff transparent transparent transparent
    bottom -7px
</style>
