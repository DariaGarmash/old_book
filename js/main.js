//$(document).ready(function()
//    {
//        $("#scrollbar1").tinyscrollbar(
//            {
//                trackSize: 120,
//                thumbSize: 15
//            }
//        );
//    });


//Выравнивание двух блоков по высоте
//Вариант 1, рабочий

//$(document).ready(
//    function setEqualHeight() {
//        var tallestCol=0;
//        var  mainHeiht= $("#main").height();
//        var sidebarHeiht = $("#sidebar").height()
//        if(mainHeiht>sidebarHeiht){
//            tallestCol=mainHeiht
//        }else{
//            tallestCol=sidebarHeiht
//        }
//        $("#main, #sidebar").height(tallestCol)
//    });


//Вариант 2, рабочий
$(document).ready(function() {
    setEqualHeight($('#main, #sidebar'));
});

function setEqualHeight(columns){
    var tallestcolumn = 0;
    columns.each(function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}