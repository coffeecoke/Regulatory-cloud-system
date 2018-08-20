$(function () {
    var myChart = echarts.init(document.getElementById('echarts-bar'));
var option = {
    
    grid:{
        top:'10%',
        left:'2%',
        right:'5%',
        bottom:0,
        containLabel:true
    },
    legend: {
        show: true,
        left: 'right',
        itemWidth:10,
        itemHeight:10,
        data: [
            {name:'投资人',icon:'rect'},
            {name:'借贷人',icon:'rect'},
        ]
    },
    xAxis: {
        type: 'category',
        data:['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06','2018/07'],
        boundaryGap:true,
        axisLabel: {
            textStyle: {
                color: '#ccc',
                interval:0,
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        max: 50,
        min: 0,
        axisLine: {
            show: true
        },
        axisTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        
        {
            type: 'bar',
            name:"投资人",
            barWidth:10,
            itemStyle: {
                normal: {
                    color:'#96b8e7',
                    barBorderRadius:[50,50,0,0]
                },
            },
            data: [10,20,30,40,50,35,10]
        } ,
        {
            type: 'bar',
            name:"借贷人",
            barWidth:10,
            itemStyle: {
                normal: {
                    color:'#3b5ba2',
                    barBorderRadius:[50,50,0,0]
                },
            },
            data: [5,20,12,25,30,35,40]
        }
    ]
};

myChart.setOption(option);
});

$(function () {
    var myChart2 = echarts.init(document.getElementById('echarts-bar2'));
var option2 = {
    
    grid:{
        top:'10%',
        left:'2%',
        right:'5%',
        bottom:0,
        containLabel:true
    },
    legend: {
        show: true,
        left: 'right',
        itemWidth:10,
        itemHeight:10,
        data: [
            {name:'正常指标',icon:'rect'},
            {name:'预警指标',icon:'rect'},
            {name:'风险指标',icon:'rect'},
        ]
    },
    xAxis: {
        type: 'category',
        data:['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06','2018/07'],
        boundaryGap:true,
        axisLabel: {
            textStyle: {
                color: '#ccc',
                interval:0,
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        max: 50,
        min: 0,
        axisLine: {
            show: true
        },
        axisTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        
        {
            type: 'bar',
            name:"正常指标",
            barWidth:10,
            itemStyle: {
                normal: {
                    color:'#627cb5',
                    barBorderRadius:[50,50,0,0]
                },
            },
            data: [10,20,30,40,20,35,10]
        } ,
        {
            type: 'bar',
            name:"预警指标",
            barWidth:10,
            itemStyle: {
                normal: {
                    color:'#f7d757',
                    barBorderRadius:[50,50,0,0]
                },
            },
            data: [5,20,12,25,30,35,40]
        },
        {
            type: 'bar',
            name:"风险指标",
            barWidth:10,
            itemStyle: {
                normal: {
                    color:'#e5666f',
                    barBorderRadius:[50,50,0,0]
                },
            },
            data: [30,30,20,15,10,40,20]
        }
    ]
};

myChart2.setOption(option2);
})