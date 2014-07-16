$(document).ready(function(){
    $("#txtpermisos").change(function(){
        if($(this).val()!="4"){
            var dato=$(this).val();
            $("#m1").css({"display":"block"});
            $("#m2").css({"display":"block"});
        }else{
            $("#m1").css({"display":"none"});
            $("#m2").css({"display":"none"});
        }
    });
    $("#eliminar").click(function() {
        $("#eliminarr").submit();
    });
    $("#checkeff").click(function() {
        $("input:checkbox").removeAttr('checked');
        $("input[type=checkbox]").removeAttr('checked');
        $("#mensaje").css({"display":"none"});
        document.getElementById("numero").value="0";
        return false;
    });
    $("#editar").click(function() {
        id = $('input:checkbox:checked').val();
        window.top.location='?lagc=usuarios&id='+ id + '&editar=true';
    });
});
function suma(obj) {
    total=parseInt(document.getElementById("numero").value);
    if(obj.checked){ total+=parseInt(obj.alt); }
    else { total-=parseInt(obj.alt); }
    if(String(total)>=1){ $("#mensaje").css({"display":"block"}); }
    else { $("#mensaje").css({"display":"none"}); }
    if(String(total)==1){ $("#mensaje_editar").css({"display":"block"}); }
    else { $("#mensaje_editar").css({"display":"none"}); }
    document.getElementById("numero").value=String(total);
}