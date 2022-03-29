var list = [];

function addElement() {

  if (document.getElementById("input").value == "") {
    document.getElementById("arrayLength").innerHTML = "Enter a task"
  } else {

    list.push(document.getElementById("input").value);

    last = list[list.length - 1];

    document.getElementById("printArray").append(list.length + " " + last);

    var btn = document.createElement("button");
    btn.id = list.length;
    btn.className = "buttons";
    btn.innerHTML = "Apagar";
    btn.setAttribute("onclick", "btnClick(this)");

    document.getElementById("printArray").append(btn);

    linebreak = document.createElement("br");
    document.getElementById("printArray").append(linebreak);

    line = document.createElement("hr");
    document.getElementById("printArray").append(line);

    document.getElementById("input").value = "";
    document.getElementById("arrayLength").innerHTML = "Coisas para fazer: " + list.length;
  }//else
}

function btnClick(btn) {
  list.splice(btn.id - 1, 1); //deletes the whole task
  document.getElementById("printArray").innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    document.getElementById("printArray").append(i + 1 + " " + list[i]);

    var btn = document.createElement("button");
    btn.id = i + 1;
    btn.className = "buttons";
    btn.innerHTML = "Apagar";
    btn.setAttribute("onclick", "btnClick(this)");

    document.getElementById("printArray").append(btn);

    linebreak = document.createElement("br");
    document.getElementById("printArray").append(linebreak);

    line = document.createElement("hr");
    document.getElementById("printArray").append(line);
  }//for
  document.getElementById("arrayLength").innerHTML = "Coisas para fazer:" + list.length;
}
