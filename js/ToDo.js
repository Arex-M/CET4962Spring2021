
    /* -------------------------------------------------------------------- */

    /* Here starts the JS code */

    // Put the "close" button to each list item
    var myList = document.getElementsByTagName(".li");
    var i;
    for (i = 0; i < myList.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myList[i].appendChild(span);
    }

    // Delete the list item when clicking close
    var close = document.getElementsByClassName(".close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    // Add the "check" symbol when clicking on a list item
    var list = document.querySelector('.ul');
    list.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);

    // Add a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement(".li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("Type something in the box.");
      } else {
        document.getElementById(".myUL").appendChild(li);
      }
      document.getElementById(".myInput").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }

    /* ----------------------------------------------------------------------- */