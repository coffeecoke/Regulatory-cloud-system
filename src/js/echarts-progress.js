$(function () {
    var myChart1= echarts.init(document.getElementById('echarts-progress'));
   
//亮色图片

var baifenbi = [0.444, 0.555, 0.777, 0.888, 0.922];
var grayBar = [1, 1, 1, 1, 1];
var paiming = [5, 4, 3, 2, 1];
var zongjine = [30000000, 40000000, 50000000, 60000000, 70000000];
var fenpeijine = [300000, 400000, 500000, 600000, 700000];
var city = [ '恩科e贷   ', '冀金宝      ', '宜民贷      ', '冠腾贷   ', '信投在线'];
 var option1 = {
    
    color: ['#f27f87'], //进度条颜色
    /* grid: {
         left: '-10%',  //如果离左边太远就用这个......
         //right: '14%',
         bottom: '5%',
         top: '5%',
         containLabel: true
     },*/
    xAxis: [{
            show: false,
        },
        //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        axisLabel: {
            show: false, //让Y轴数据不显示
        },
        itemStyle: {

        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },
        data: city,
    },
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度 
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: '#e5e5e5'
                },
            },
            z:1,
            data: grayBar,
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20, //统计条弧度
                },
            },
            max: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#transparent', //百分比颜色
                    },
                    position: 'inside',
                    //百分比格式
                    
                }
            },
            labelLine: {
                show: false,
            },
            z:2,
            data: baifenbi,
        },
        //数据条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: 'rgba(22,203,115,0.05)'
                },
            },
            z:100,
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: [0, '-100%'],
                    distance:100,
                    rich: { //富文本
                        black: { //自定义颜色
                            color: '#000',
                        },
                        
                        green: {
                            color: '#70DDA7',
                            padding:[0,700,0,0]
                        },
                        yellow: {
                            color: '#FEC735',
                        },
                        pos:{
                            align:'right'
                        }
                    },
                    formatter: function(data) {
                        // return '<span style="padding:10px 10px;">'+"增速"+'</span>'
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        return paiming[data.dataIndex] == 1 ? '{black|' + city[data.dataIndex]+ '}                                                  {black|存在风险点:}' + '{black|' + fenpeijine[data.dataIndex] / 10000 + '个}' : '{black|' + city[data.dataIndex] + '}                                                {black|存在风险点:}' + '{black|' + fenpeijine[data.dataIndex] / 10000 + '个}';
                        // = 1 ? '{start1|}{yellow|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|    总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}' : ' {start2|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}';                        
                    },
                }
            },
            data: zongjine
        }

    ]
};
myChart1.setOption(option1);
})