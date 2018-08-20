$(function () {
    var myChart = echarts.init(document.getElementById('echarts-pictographBar'));
    // 颜色
    var darkBlue = '#e9727a';
    var lightBlue = '#627cb5';
    var red = '#3b5ba2';

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'line', 
            }
        },
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'高于2.5%',icon:'rect'},
                {name:'高于1%',icon:'rect'},
                {name:'低于1%',icon:'rect'},
            ]
        },
        grid:{
            left:'10%',
            right:"10%"
        },
        xAxis: [{
                type: 'category',
                data: ['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06','2018/07'],
                axisTick: {
                    show:false
                },
                axisLabel: {
                    color: '#000',
                    fontSize: 12,
                    interval:0,
                },
                splitLine: {
                    show: false
                },
                gridIndex: 0,
                

            },
          
        ],

        grid: [{
                top: '10%',
                bottom: 0,
                left: '2%',
                containLabel: true
            }
           
        ],
        yAxis: [{
            max: 3.5,
            min: 0,
            // axisLine: {
            //     lineStyle: {
            //         color: '#4bbbf8',
            //         shadowColor: 'rgba(75, 211, 255, 0.5)',
            //         shadowBlur: 5
            //     }
            // },
            axisLabel: {
                color: '#000',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            gridIndex: 0,
        },
       
    ],
        series: [{
                name: '数量',
                type: 'pictorialBar',
                // barCategoryGap: '-20%',
                symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
                xAxisIndex: 0,
                yAxisIndex: 0,
                label: {
                    show: false,
                    position: 'top',
                    color: '#1798ff',
                    fontSize: 14
                },
                itemStyle:{
                    normal:{
                        opacity: 0.8,
                        color: function (params) {
                            console.log(params)
                            if (params.dataIndex == 0) {
                                return darkBlue
                            } else if (params.dataIndex == 1) {
                                return lightBlue
                            } else if (params.dataIndex == 2) {
                                return red
                            }else if (params.dataIndex == 3) {
                                return darkBlue
                            } else if (params.dataIndex == 4) {
                                return lightBlue
                            } else if (params.dataIndex == 5) {
                                return red
                            }else if(params.dataIndex == 6){
                                return darkBlue
                            }
                            // return params.dataIndex % 2 ? darkBlue : lightBlue;
                        },
                        label:{
                            show:true,
                            fontSize:12,
                            position:'top',
                            offset:[0,-20],
                            textStyle:{
                                color:'#555',
                        
                            },
                            formatter: '{c}',
                            rich: {
                                a:{
                                    fontSize:12,
                                    color:'#555',
                                    textAlign:'center'
                                },
                                b:{
                                    fontSize:12,
                                    color:'#555'
                                }
                            }
                        }
                    }
                },
                
                data: [2.8,1.9,1.1,3.2,1.7,0.9,1.2]
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-100%',
                symbolPosition: 'end',
                symbolOffset: [0, '-120%'],
                data: [{
                    value: 2.8,
                    symbol: 'image://../imgs/triangle.png',
                    symbolSize: [14, 12]
                }, {
                    value: 1.9,
                    symbol: 'image://../imgs/triangle-blue.png',
                    symbolSize: [14, 12]
                }, {
                    value: 1.1,
                    symbol: 'image://../imgs/triangle-light.png',
                    symbolSize: [14, 12]
                }, {
                    value: 3.2,
                    symbol: 'image://../imgs/triangle.png',
                    symbolSize: [14, 12]
                },{
                    value: 1.7,
                    symbol: 'image://../imgs/triangle-blue.png',
                    symbolSize: [14, 12]
                },{
                    value: 0.9,
                    symbol: 'image://../imgs/triangle-light.png',
                    symbolSize: [14, 12]
                },{
                    value: 1.2,
                    symbol: 'image://../imgs/triangle.png',
                    symbolSize: [14, 12]
                }]
            }
           
        ]
    };

    myChart.setOption(option);
})