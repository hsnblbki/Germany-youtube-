$(document).ready(function(){
    $(".search-filter-icon").click(function(){
        $(".search-column").slideToggle("slow");
    });

    $("input:checkbox").click(function(){
        var $box= $(this);
        var group="input:checkbox[name="+$box.attr("name")+"]";
        if($box.is(":checked")){
            $(group).prop("checked",false);
            $box.prop("checked",true);
        }
    });
});