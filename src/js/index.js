$(function () {
    var __defaultOpts = {
        data:[],
        resultData:{
            id:101,
            projectName:'统一监管实施项目',
            managerName:'',
            phone:12345,
            cellPhone:18601376034,
            desc:'加油',
            dataSource:[{
                startDate: new Date(new Date().getFullYear(), 1, 4),
                endDate: new Date(2019, 6, 15),
                taskPackages:[
                    {
                        packName:'UI设计',
                        startDate: new Date(new Date().getFullYear(), 1, 4),
                        endDate: new Date(new Date().getFullYear(), 2, 15)
                    },
                    {
                        packName:'前端开发',
                        startDate: new Date(new Date().getFullYear(), 2, 16),
                        endDate: new Date(new Date().getFullYear(), 4, 15)
                    },
                    {
                        packName:'后台开发',
                        startDate: new Date(new Date().getFullYear(), 3, 1),
                        endDate: new Date(new Date().getFullYear(), 4, 20)
                    },
                    {
                        packName: '测试阶段',
                        startDate: new Date(2018, 1, 16),
                        endDate: new Date(2019, 5, 15)
                    }
                ]
            }]
        },
        url:'',
        asy:false,
        //项目日历ID
        calendar: {
            id:'#calendar',

        },
        mobileSelect: {
            id:'#trigger',
            transitionEnd:function(indexArr, data){
                var js = /tanghuan/
            },
            
            callback:function(indexArr, data){
                var _this = this;
                var newDay = new Date();
                this.resultData.dataSource[0].taskPackages.forEach(function (item,index) {
                    console.log(data[0]);
                    var taskPackage=_this.resultData.dataSource.startDate;
                    var myDates = taskPackage;
                    var month=myDates.getMonth()+1;
                    var date=myDates.getDate();
                   $(".data-p span:nth-child(1)").text(month)
                   $(".data-p span:nth-child(2)").text(date)
                    if(item.packName == data[0]){
                        var newDataSource = [];
                        newDataSource.push(item);
                        $(_this.calendar.id).data('calendar').setDataSource(newDataSource);
                        console.log(newDataSource)
                        if(data[0]=="UI设计"){
                            var taskPackage=_this.resultData.dataSource[0].taskPackages[0].startDate;
                            var myDates = taskPackage;
                            var month=myDates.getMonth()+1;
                            var date=myDates.getDate();
                           $(".data-p span:nth-child(1)").text(month)
                           $(".data-p span:nth-child(2)").text(date)
                           var taskPackages=_this.resultData.dataSource[0].taskPackages[0].endDate;
                           var myDate = taskPackages;
                           var months=myDate.getMonth()+1;
                           var dates=myDate.getDate();
                           $(".data-p span:nth-child(3)").text(months)
                          $(".data-p span:nth-child(4)").text(dates)
                      }else if(data[0]=="前端开发"){
                          var taskPackage=_this.resultData.dataSource[0].taskPackages[1].startDate;
                          var myDates = taskPackage;
                          var month=myDates.getMonth()+1;
                          var date=myDates.getDate();
                         $(".data-p span:nth-child(1)").text(month)
                         $(".data-p span:nth-child(2)").text(date)
                         var taskPackages=_this.resultData.dataSource[0].taskPackages[1].endDate;
                         var myDate = taskPackages;
                         var months=myDate.getMonth()+1;
                         var dates=myDate.getDate();
                         $(".data-p span:nth-child(3)").text(months)
                        $(".data-p span:nth-child(4)").text(dates)
                      }

                   }
                })

            }

        },
        LCalendar: {
            id:'#start_date',
            finishHander:function (data) {
                var dateArr = data.split('年');
                var year = parseInt(dateArr[0]);
                var month = parseInt(dateArr[1])-1;
                 $(this.calendar.id).data('calendar').buildDate(year,month);

                // if(parseInt(year) === new Date().getFullYear()){
                //
                //     $(this.calendar.id).data('calendar').setMonth(month);
                // }else {
                //     $(this.calendar.id).data('calendar').setYear(year);
                // }



            }
        }



    }
    function Pcard(opts) {
        this.options = $.extend(__defaultOpts,opts);

        this.calendar = this.options.calendar;
        this.mobileSelect = this.options.mobileSelect;
        this.LCalendar = this.options.LCalendar;

        this.data = this.options.data;
        this.resultData = this.options.resultData;
        this.init();
    }

    Pcard.prototype = {
        constructor:Pcard,
        init: function () {
           this._initData();
        },
        _initData: function () {
            if(this.options.asy) {
                $.ajax({
                    data:this.data,
                    dataType:this.options.dataType,
                    success: function (result) {
                        this.resultData = result;
                        this._hander (this.resultData)
                    }
                })
            }else {
                this.resultData = this.resultData;
                this._hander(this.resultData);
            }
        },

        _hander: function (resultData) {
            this._initMobileSelect(resultData);
            this._initCalendar(resultData);

            this._initLCalendar(resultData);

        },
        _initCalendar: function (resultData) {
            //日历初始化
            var newResultData = $.extend(true,resultData,{})
            $(this.calendar.id).calendar({
                dataSource: newResultData.dataSource,
                //style:'background'
            });

        },
        _initMobileSelect: function (resultData) {
            //选择任务包
            var _this = this;
            var newResultData = $.extend(true,resultData,{})
            var data = [];
            var taskPackages = newResultData.dataSource[0].taskPackages;
            taskPackages.forEach(function (item) {

                data.push(item.packName)
            })
            var mobileSelect = new MobileSelect({
                trigger: this.mobileSelect.id,
                title: '工作包选择',
                wheels: [
                            {data: data}
                        ],
                position:[0], //初始化定位 打开时默认选中的哪个 如果不填默认为0
                transitionEnd:this.mobileSelect.transitionEnd,
                callback:this.mobileSelect.callback.bind(this)
            });
        },

        //初始化日期选择
        _initLCalendar: function () {
            var calendar = new LCalendar();
      		calendar.init({
      			'trigger': '#start_date', //标签id
      			'type': 'ym', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
      			'minDate': (new Date().getFullYear()-3) + '-' + 1 + '-' + 1, //最小日期
      			'maxDate': (new Date().getFullYear()+3) + '-' + 12 + '-' + 31, //最大日期
                finishHander: this.LCalendar.finishHander.bind(this)

      		});
        }

    }



    window.Pcard = Pcard;



})
