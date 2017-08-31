const RESPONSE_DONE=4;
const STATUS_OK=200;
const  send_todo="todo";
var table=document.createElement("table");

function clicked(a) {
if(a.getAttribute('data-status')=="Active")
{
    var id=a.getAttribute('data');
    console.log(id);
    var xhr = new XMLHttpRequest();

    xhr.open("PUT","/api/todos/complete/"+id,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status==200){
            AllFunction();
        }


    };


    xhr.send(data=null);
}
else if(a.getAttribute('data-status')=="Complete")
{
    var id=a.getAttribute('data');
    console.log(id);
    var xhr = new XMLHttpRequest();

    xhr.open("PUT","/api/todos/active/"+id,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && xhr.status==200){
            AllFunction();
        }


    };


    xhr.send(data=null);
}
}
function clicked2(a) {
    var id=a.getAttribute('data');
    console.log(id);
     var xhr = new XMLHttpRequest();

            xhr.open("DELETE","/api/todos/"+id,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if(xhr.readyState==4 && xhr.status==200){
                   AllFunction();
                }


            };


            xhr.send(data=null);






}




function AllFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {

                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

                box.setAttribute("overflow","scroll");

               table.setAttribute("border","4px solid black");

                var demo = JSON.parse(xhr.responseText);

                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");


                for(var propt in demo){


                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = demo[propt].Title;
                    cell2.innerHTML = demo[propt].Status;

                    if(demo[propt].Status=="Active"){
var button=document.createElement("button");
button.innerHTML="Mark as complete";

                        var cell3 = row.insertCell(2);
                        cell3.appendChild(button);
                        var button2 = document.createElement("button");
                        button2.innerHTML = "Delete";


                        var cell4 = row.insertCell(3);
                        cell4.appendChild(button2);

                        button.setAttribute("data",propt);
                        button.setAttribute("data-status",demo[propt].Status);
                        button.setAttribute("onclick",'clicked(this)');
                        button2.setAttribute("data",propt);
                        button2.setAttribute("onclick",'clicked2(this)');
                    }
                    else if(demo[propt].Status=="Complete"){
                        var button=document.createElement("button");
                        button.innerHTML="Mark as active";

                        var cell3 = row.insertCell(2);
                        cell3.appendChild(button);
                        var button2 = document.createElement("button");
                        button2.innerHTML = "Delete";


                        var cell4 = row.insertCell(3);
                        cell4.appendChild(button2);
                        button.setAttribute("data",propt);
                        button.setAttribute("data-status",demo[propt].Status);
                        button.setAttribute("onclick",'clicked(this)');
                        button2.setAttribute("data",propt);
                        button2.setAttribute("onclick",'clicked2(this)');

                    }
                }


                box.append(table);

        }
            }

        };

        xhr.send(data = null)
    }

    function ActivateFunction() {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/todos", true);
        xhr.onreadystatechange = function () {

            if (xhr.readyState == RESPONSE_DONE) {

                if (xhr.status == STATUS_OK) {

                    var box = document.getElementById("todo");

                    box.innerHTML = "";
                    table.innerHTML = "";

                    box.setAttribute("overflow", "scroll");

                    table.setAttribute("border", "4px solid black");

                    var demo = JSON.parse(xhr.responseText);

                    console.log(demo);
                    var temp = 1;
                    table.setAttribute("color", "yellow");


                    for (var propt in demo) {


                        if (demo[propt].Status == "Active") {
                            var row = table.insertRow();
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell1.innerHTML = demo[propt].Title;
                            cell2.innerHTML = demo[propt].Status;
                            var button = document.createElement("button");
                            button.innerHTML = "Mark as complete";
                            var cell3 = row.insertCell(2);
                            cell3.appendChild(button);
                            var button2 = document.createElement("button");
                            button2.innerHTML = "Delete";



                            var cell4 = row.insertCell(3);
                            cell4.appendChild(button2);
                            button.setAttribute("data",propt);
                            button.setAttribute("data-status",demo[propt].Status);
                            button.setAttribute("onclick",'clicked(this)');
                            button2.setAttribute("data",propt);
                            button2.setAttribute("onclick",'clicked2(this)');
                        }

                }

                box.append(table);


                }

            }

        };
        xhr.send(data = null);
    }



function CompleteFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {

                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

                box.setAttribute("overflow","scroll");

                table.setAttribute("border","4px solid black");

                var demo = JSON.parse(xhr.responseText);

                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");
                for(var propt in demo){


                    if(demo[propt].Status=="Complete") {
                        var row = table.insertRow();
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = demo[propt].Title;
                        cell2.innerHTML = demo[propt].Status;
                        var button=document.createElement("button");
                        button.innerHTML="Mark as active";

                        var cell3 = row.insertCell(2);
                        cell3.appendChild(button);
                        var button2 = document.createElement("button");
                        button2.innerHTML = "Delete";


                        var cell4 = row.insertCell(3);
                        cell4.appendChild(button2);
                        button.setAttribute("data",propt);
                        button.setAttribute("data-status",demo[propt].Status);
                        button.setAttribute("onclick",'clicked(this)');
                        button2.setAttribute("data",propt);
                        button2.setAttribute("onclick",'clicked2(this)');
                    }
                }

                box.append(table);




            }
        }

    };

    xhr.send(data = null)
}




function DeleteFunction() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {

            if (xhr.status == STATUS_OK) {

                var box = document.getElementById("todo");

                box.innerHTML= "";
                table.innerHTML="";

                box.setAttribute("overflow","scroll");

                table.setAttribute("border","4px solid black");

                var demo = JSON.parse(xhr.responseText);

                console.log(demo);
                var temp=1;
                table.setAttribute("color","yellow");


                for(var propt in demo){


                    if(demo[propt].Status=="Deleted") {
                        var row = table.insertRow();
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = demo[propt].Title;
                        cell2.innerHTML = demo[propt].Status;
                        button.setAttribute("data",propt);
                        button.setAttribute("data-status",demo[propt].Status);
                        button.setAttribute("onclick",'clicked(this)');
                        button2.setAttribute("data",propt);
                        button2.setAttribute("onclick",'clicked2(this)');
                    }
                }
                box.append(table);




            }
        }

    };

    xhr.send(data = null)
}




function AddTodo() {

        var title = document.getElementById("newtodo").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/todos", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var data = "todo_title=" + encodeURI(title);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                AllFunction();
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);


}