$(function () {
    var myChart1 = echarts.init(document.getElementById('echarts-radar'));
 var option1 = {
    radar: [
        {
            indicator: [
                { text: '信用风险' },
                { text: '经营风险' },
                { text: '管理风险' },
                { text: '合规风险' },
            ],
            center: ['45%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter:'{value}',
                textStyle: {
                    color:'#000'
                }
            },
            splitArea: {
                areaStyle: {
                    color:'#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#afc1fc',
                    type:'dashed'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#657eb6',"#b4cced","#dce3f7","#dce3f7"]
                }
            }
        },
        
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: [
                
                {
                    value: [60, 0, 30, 0],
                    name: '图二',
                    symbolSize:0,
                    areaStyle: {
                        normal: {
                            color: '#4e69a3',
                            opacity:1,
                            shadowColor:"#4e69a3",
                            shadowBlur:100
                        }
                    },
                    lineStyle:{
                        color:"#4e69a3"
                    }
                }
            ]
        },
       
    ]
}

myChart1.setOption(option1);
})