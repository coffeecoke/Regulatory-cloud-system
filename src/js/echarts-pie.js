

// 维修状态占比
$(function () {

    var myChart1 = echarts.init(document.getElementById('echarts-pie'));
     var colors = ['#6d88c8', '#e5666f', '#ee999f',"#f2bd1c",'#f7d757',"#3b5ba2"];
     function setborder(colors){
         var label={
             normal: {
                 formatter: '  {b|{c}}家\n{hr|}\n{b|{b}}',
                 borderWidth: 1,
                 borderRadius: 4,
                 rich: {
                     a: {
                         lineHeight: 22,
                         align: 'center'
                     },
                     hr: {
                         borderColor:colors,
                         width: '100%',
                         borderWidth: 0.5,
                         height: 0
                     },
                     b: {
                         fontSize: 12,
                         lineHeight: 14
                     }
                 }
             }
         }
         return label;
     }
     var data = [{
             value: 335,
             name: '90-100分',
             label:setborder(colors[0]),
             itemStyle:{
                 normal:{
                     color:colors[0]
                 }   
             }
         },
         {
             value: 310,
             name: '50分以下',
             label:setborder(colors[1]),
             itemStyle:{
                 normal:{
                     color:colors[1]
                 }
             }
         },
         {
             value: 234,
             name: '40分以下',
             label:setborder(colors[2]),
             itemStyle:{
                 normal:{
                     color:colors[2]
                 }
             }
         },
         {
            value: 234,
            name: '60-70分',
            label:setborder(colors[3]),
            itemStyle:{
                normal:{
                    color:colors[3]
                }
            }
        },
        {
            value: 204,
            name: '70-80分',
            label:setborder(colors[4]),
            itemStyle:{
                normal:{
                    color:colors[4]
                }
            }
        },
        {
            value: 184,
            name: '80-90分',
            label:setborder(colors[5]),
            itemStyle:{
                normal:{
                    color:colors[5]
                }
            }
        }
     ]
     var option1 = {
         grid:{
            left:"5%"
         },
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             show:false,
             icon:'circle',
             orient: 'vertical',
             top: 'middle',
             right: '20%',
             itemWidth:8,
             itemHeight:8,
             // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
             formatter: function(name) {
                 var totle = (function () {
                     var totle = 0;
                     for(var i= 0;i<data.length;i++) {
                         totle+=data[i].value;
 
                     }
 
                     return totle;
                 })()
                 if(name === data[0].name) {
                     return name+'  '+ Math.round((data[0].value)/totle*100)+"%";
                 }else if(name === data[1].name){
                     return name+'  '+ Math.round((data[1].value)/totle*100)+"%";
                 }else if(name === data[2].name) {
                     return name+'  '+ Math.round((data[2].value)/totle*100)+"%";
                 }
             }
         },
         // grid:{
         //     top:0,
         //     left:0,
         //     right:0,
         //     bottom:0,
         //     containLabel:true
         // },
         series: [{
             name: '维修状态占比',
             type: 'pie',
             radius: ['30%', '60%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['40%', '50%'],
             roseType : 'radius',
             data: data
         }]
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart1.setOption(option1);
 })

 


// 维修状态占比
$(function () {

    var myChart2 = echarts.init(document.getElementById('echarts-pie2'));
     var colors = ['#6d88c8', '#e5666f', '#ee999f'];
     function setborder(colors){
         var label={
             normal: {
                 formatter: '  {b|{c}}家\n{hr|}\n{b|{b}}',
                 borderWidth: 1,
                 borderRadius: 4,
                 rich: {
                     a: {
                         lineHeight: 22,
                         align: 'center'
                     },
                     hr: {
                         borderColor:colors,
                         width: '100%',
                         borderWidth: 0.5,
                         height: 0
                     },
                     b: {
                         fontSize: 12,
                         lineHeight: 14
                     }
                 }
             }
         }
         return label;
     }
     var data = [{
             value: 1005,
             name: '90-100分',
             label:setborder(colors[0]),
             itemStyle:{
                 normal:{
                     color:colors[0]
                 }   
             }
         },
         {
             value: 20,
             name: '50分以下',
             label:setborder(colors[1]),
             itemStyle:{
                 normal:{
                     color:colors[1]
                 }
             }
         },
         {
             value: 200,
             name: '40分以下',
             label:setborder(colors[2]),
             itemStyle:{
                 normal:{
                     color:colors[2]
                 }
             }
         }
     ]
     var option2 = {
         grid:{
            left:"5%"
         },
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             show:true,
             icon:'circle',
             top: 'bottom',
             right: '20%',
             itemWidth:8,
             itemHeight:8,
             // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
             formatter: function(name) {
                 var totle = (function () {
                     var totle = 0;
                     for(var i= 0;i<data.length;i++) {
                         totle+=data[i].value;
 
                     }
 
                     return totle;
                 })()
                 if(name === data[0].name) {
                     return name+'  '+ Math.round((data[0].value)/totle*100)+"%";
                 }else if(name === data[1].name){
                     return name+'  '+ Math.round((data[1].value)/totle*100)+"%";
                 }else if(name === data[2].name) {
                     return name+'  '+ Math.round((data[2].value)/totle*100)+"%";
                 }
             }
         },
         // grid:{
         //     top:0,
         //     left:0,
         //     right:0,
         //     bottom:0,
         //     containLabel:true
         // },
         series: [{
             name: '维修状态占比',
             type: 'pie',
             radius: "50%",
             roseType:"angle",
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['40%', '50%'],
             data: data
         }]
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart2.setOption(option2);
 })

 