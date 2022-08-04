let index = 1;
let replaceindex = 0;
 insertRow = () => 
{
    index = index +1;
    var empty ="";
     var firstname =$("#firstn").val();
     $('#firstn').val(empty);
     $('#firstn').focus();
     var lastname =$("#lastn").val();
     $('#lastn').val(empty);
     var age =$("#age").val();
     $('#age').val(empty);
     var date =$("#date").val();
     $('#date').val(empty);
     var number =$("#number").val();
     $('#number').val(empty);
     if (firstname ==''||lastname==''){
     emptyField();
     
     }
     else{
        let stringBuilder = "";
        stringBuilder += '<tr id="tr'+index+'">';
        stringBuilder += '<td id="firstname'+index+'">'+firstname+'</td>';
        stringBuilder += '<td id="lastname'+index+'">'+lastname+'</td>';
        stringBuilder += '<td id="age'+index+'">'+age+'</td>';
        stringBuilder += '<td id="date'+index+'">'+date+'</td>';
        stringBuilder += '<td id="number'+index+'">'+number+'</td>';
        stringBuilder += '<td><input type="button" value="edit" class="btn btn-outline-info" onclick="edit('+index+')"/></td>';
        stringBuilder += '<td><input type="button" value="Remove"  class="btn btn-outline-danger" onclick="removeElement('+index+')"/></td>';
        stringBuilder += '</tr>';
        $("#main").append(stringBuilder);
     }
 }
 function emptyField(){ 
   $('#staticBackdrop').modal('show');

 }
 ConfirmRemove=()=>{
   $('#tr'+index).remove();
   $('#exampleModal').modal('hide');
   
}

removeElement = (index) => {
  $('#exampleModal').modal('show');
}
  $(function(){
    $("#datepicker").datepicker({
     dateFormat: "yy-mm-dd",
     changeMonth: true,
      changeYear: true
           });
             });

 edit = (index) =>{
    replaceindex = index;
    var first =$("#firstname"+index).html();
    $("#firstn").val(first);
    var last = $("#lastname"+index).html();
    $("#lastn").val(last);
    var age = $("#age"+index).html();
    $("#age").val(age);
    var date = $("#date"+index).html();
    $("#datepicker").val(date);
    var number = $("#number"+index).html();
    $("#number").val(number);


}
 function update(){
    var firstname =$("#firstn").val();
    $("#firstname"+replaceindex).html(firstname);
    var lastname =$("#lastn").val();
    $("#lastname"+replaceindex).html(lastname);
    var age =$("#age").val();
    $("#age"+replaceindex).html(age);
    var dob =$("#datepicker").val();
    $("#date"+replaceindex).html(dob);
    var number=$("#number").val();
    $("#number"+replaceindex).html(number);
}
