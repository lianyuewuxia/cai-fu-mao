(function(window){
    function $(id){
        return document.getElementById(id);
    };
//每张图片对应的样式
    var tempArr = [
        {
            "width":100,
            "top":70,
            "left":-200,
            "opacity":0,
            "zIndex":2
        },
        {
            "width":500,
            "top":100,
            "left":-350,
            "opacity":0.8,
            "zIndex":3
        },
        {
            "width":600,
            "top":60,
            "left":200,
            "opacity":1,
            "zIndex":4
        },
        {
            "width":500,
            "top":100,
            "left":850,
            "opacity":0.8,
            "zIndex":3
        },
        {
            "width":100,
            "top":70,
            "left":1250,
            "opacity":0,
            "zIndex":2
        }
    ];
    // 设置限流函数
    var onOff = true ;
    var startx,endx;
    // 获取对象
    var left = $("btn_lef"),right = $("btn_rig"),innerht = $("innerht"),ul = innerht.children[0],lis = ul.children,arrow = $("corrow");
    // 给每个li添加样式
    addStyle();
    // 大盒子的hover事件
    innerht.onmouseover = function(){
        animate(arrow,{"opacity":1});
    };
    innerht.onmouseout = function(){
        animate(arrow,{"opacity":0});
    };
    //判断手指接触屏幕
    document.addEventListener("touchstart",function(e)
    {
        startx = e.touches[0].pageX;
    },false)
    //判断手指离开屏幕
    document.addEventListener("touchend",function(e){
        endx = e.changedTouches[0].pageX;
        if(startx>endx)
        {
            var apop = tempArr.pop();
            tempArr.unshift( apop );
            addStyle();

        }else if(startx<endx)
        {
            var atop = tempArr.shift();
            tempArr.push( atop );
            addStyle();
        }
    })
    // 右箭头点击事件
    //right.onclick = function(){
    //    if( onOff ){
    //        onOff = false;
    //        var atop = tempArr.shift();
    //        tempArr.push( atop );
    //        addStyle();
    //    };
    //};
    //// 左箭头点击事件
    //left.onclick = function(){
    //    if( onOff ){
    //        onOff = false;
    //        var apop = tempArr.pop();
    //        tempArr.unshift( apop );
    //        addStyle();
    //    };
    //};
    function addStyle(){
        for( i = 0 ; i < lis.length ; i++ ){
            animate(lis[i],tempArr[i],function(){
                onOff = true;
                console.log(onOff);
            });
        };
    };
    // 设置animate函数
    function animate(obj,json,fn){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var flog = true ;
            for( k in json ){
                if( k === "zIndex" ){
                    obj.style[k] = json[k];
                }else if( k === "opacity" ){
                    var leader = getStyle(obj,k) * 100 ;
                    var target = json[k] * 100 ;
                    var step = ( target - leader ) / 10 ;
                    step = step > 0 ? Math.ceil( step ) : Math.floor( step ) ;
                    // 浮点数判断相等时是不准确的
                    // 所以不能写leader = ( leader + step )/100;
                    // 保持leader和target都是整数，便于下面判断相等
                    leader = leader + step ;
                    obj.style[k] = leader / 100;
                }else{
                    var leader = parseInt( getStyle(obj,k) ) || 0 ;
                    var target = json[k];
                    var step = ( target - leader ) / 10 ;
                    step = step > 0 ? Math.ceil( step ) : Math.floor( step ) ;
                    leader = leader + step ;
                    obj.style[k] = leader + "px";
                };
                if( leader !== target ){
                    flog = false ;
                };
            };
            console.log(flog);
            if( flog ){
                clearInterval( obj.timer );
                if( fn ){
                    fn();
                };
            };
        }, 15);
    };
    // 设置getStyle函数，获取计算后的样式
    function getStyle(obj,attr){
        if( window.getComputedStyle ){
            return window.getComputedStyle(obj,null)[attr];
        }else{
            return obj.currentStyle[attr];
        };
    };

        var tyss;
        var taskBtm = document.getElementById("task3-btm");
        var Dome = document.getElementById("demo");
        var taskImg = document.getElementById("task");
        document.getElementById("inpp").focus();
        /*按钮*/
        taskBtm.onclick = function()
        {
            var oli = document.getElementById("innerht").getElementsByTagName("li");
            for(var i = 0;i<oli.length;i++)
            {
                console.log(oli[i].scrollWidth);
                if(oli[i].scrollWidth==600)
                {
                 tyss = oli[i].value;
                console.log(tyss);
                }
            }
            switch (tyss)
            {
                case 1:
                    taskImg.style.background="url(http://a2.qpic.cn/psb?/V10aIqsj18KJSW/tH3DG7rX2SBLxfQKQMIaVAuOr82VklQGDd9dsp8HLiQ!/b/dIQBAAAAAAAA&bo=fAJzBHwCcwQDCSw!&rf=viewer_4) no-repeat";
                    taskImg.style.backgroundSize="100%";
                    break;
                case 2:
                    taskImg.style.background="url(http://a3.qpic.cn/psb?/V10aIqsj18KJSW/PJ8gc0hM14mGrMwq4EiZpcianjSN3*F35kMm*YHcRu4!/b/dIIBAAAAAAAA&bo=fAJzBHwCcwQDCSw!&rf=viewer_4) no-repeat";
                    taskImg.style.backgroundSize="100%";
                    break;
                case 3:
                    taskImg.style.background="url(http://a2.qpic.cn/psb?/V10aIqsj18KJSW/JGh5wR1rxLqMlXOtcWugORXfVfAxq*xA5TBGAgSa1J0!/b/dCUAAAAAAAAA&bo=fAJzBHwCcwQDCSw!&rf=viewer_4) no-repeat";
                    taskImg.style.backgroundSize="100%";
                    break;
                case 4:
                    taskImg.style.background="url(http://a1.qpic.cn/psb?/V10aIqsj18KJSW/VpmSZSsFLTt9z3j4Qw2lqJp0cnUiPeD1UkwOV3j0mHg!/b/dG4BAAAAAAAA&bo=fAJzBHwCcwQDCSw!&rf=viewer_4) no-repeat";
                    taskImg.style.backgroundSize="100%";
                    break;
                case 5:
                    taskImg.style.background="url(http://a2.qpic.cn/psb?/V10aIqsj18KJSW/7dyR3kQJPMP4SkdyHTiyN6kN2NAoDss9IpCpvGhivy8!/b/dN8AAAAAAAAA&bo=fAJzBHwCcwQDCSw!&rf=viewer_4) no-repeat";
                    taskImg.style.backgroundSize="100%";
                    break;
            }
            Dome.style.display = "none";
            taskImg.style.display = "block";
        }

})(window)/**
 * Created by A-JUN on 2017/4/21.
 */
