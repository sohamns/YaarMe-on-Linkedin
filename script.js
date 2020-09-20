function openTab(evt, menu) {

    var i, tabcontent, tablinks;

    document.getElementById('defaultOpen').click();
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

  function openinTab(evt, menu) {
    var i, tabcontent1, tablinks1;

    document.getElementById('defaultOpen').click();
  
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
      tabcontent1[i].style.display = "none";
    }
  
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
  
    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
  }
  