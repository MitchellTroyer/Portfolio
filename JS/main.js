function tabbing(aEvent, tabName) 
{
    let contents = document.getElementsByClassName("contents");
    for (var i = 0; i < contents.length; i++) 
    {
      contents[i].style.display = "none";
    }
    let tab = document.getElementsByClassName("tab");
    for (var i = 0; i < tab.length; i++) 
    {
      tab[i].className = tab[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    aEvent.currentTarget.className += "active";
  }

  document.getElementById("default").click();

  function alerted(eEvent, alertTab)
  {
    alert("You found it!");
  }