<html lang="en">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1  class="d-flex justify-content-md-center">
            Hello am table
        </h1>
        <div class="row">
            <div class="col-md-3">
               
              <lable>First Name</lable>
              <input type="text" class="form-control" id="fn">
            </div>
            <div class="col-md-2">
                    <lable>Last Name</lable>
                    <input type="text" class="form-control" id="ln">
            </div>
            <div class="col-md-2">
                        <lable>Age </lable>
                        <input type="number" class="form-control" id="age">
             </div>
             <div class="col-md-3">
                            <lable>Contact Number</lable>
                            <input type="text" class="form-control" id="num">
             </div>
             <div class="col-md-2">
                <p>Date: <input type="text" id="datepicker"></p>
             </div>
            </div></br>
            <div class="d-flex justify-content-sm-center  ">
             <input class="btn btn-outline-success" type="button" value="submit"  onclick="insertrow()">
             <input class="btn btn-outline-success" type="button" value="update" onclick="replace()">
              
             </div><br>
             


            <div>
                <table  class="table" id="tableid">
                <thead>
                    <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Contact Number</th>
                <th>date</th>
                <th>Edit</th>
                <th>remove</th>
                </tr>
                </thead>
               
                </table>
            </div>
        </div>        
            <script>
                var index=1;
                var replaceindex=0;
             function insertrow()
               {
                index = index+1;

                var fname = $("#fn").val();
                 var lname = $("#ln").val();
                 var Age = $("#age").val();
                 var Num = $("#num").val();
                 var date = $("#datepicker").val();
                 var stringBuilder = "";
                 stringBuilder += '<tr id="tr'+index+'">';
                 stringBuilder += '<td id="Fname'+index+'">'+fname+'</td>';
                 stringBuilder += '<td id="Lname'+index+'">'+lname+'</td>';
                 stringBuilder += '<td id="Age'+index+'">'+Age+'</td>';
                 stringBuilder += '<td id="Num'+index+'">'+Num+'</td>';
                 stringBuilder += '<td id="Date'+index+'">'+date+'</td>';
                 stringBuilder += '<td><input type="button" value="edit"  onclick="edit('+index+')"/></td>';
                 stringBuilder += '<td><input type="button" value="remove" onclick="removeElemet('+index+')"/></td>'; 
                 stringBuilder += '</tr>';
                 $("#tableid").append(stringBuilder);
             }
             function removeElemet(index){
                 $("#tr"+index).remove();

//               var divid = document.getElementById('tr'+index);
//               divid.outerHTML = "";  
              }
             function replace(){
                var firstname=$("#fn").val()
                $("#Fname"+replaceindex).html(firstname);
                var lastname =$("#ln").val()
                $("#Lname"+replaceindex).html(lastname);
                var age =$("#age").val()
                $("#Age"+replaceindex).html(age);
                var number =$("#num").val()
                $("#Num"+replaceindex).html(number);
                var date =$("#datepicker").val()
                $("#Date"+replaceindex).html(date);
             }
             $(function(){
             $("#datepicker").datepicker({
              dateFormat: "yy-mm-dd"
                    });
                      });
//function for edit the added row
             function edit(index){
                replaceindex= index
                var fname = $("#Fname"+index).html();
                $('#fn').val(fname);
                var lname = $("#Lname"+index).html();
                $('#ln').val(lname);
                var age = $("#Age"+index).html();
                $('#age').val(age);
                var num = $("#Num"+index).html();
                $('#num').val(num);
                var date = $("#Date"+index).html();
                $('#datepicker').val(date); 
             }
           
               
            </script>    
    
   
</body>
</html>
