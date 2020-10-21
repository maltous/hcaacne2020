function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kuUsOT2M3H":
        Script1();
        break;
      case "5s4hkNmNkeD":
        Script2();
        break;
      case "6jZMQ1vLdqO":
        Script3();
        break;
      case "5vSZIuGSuLz":
        Script4();
        break;
      case "603RaPGt0rm":
        Script5();
        break;
      case "6C7HanJ49MO":
        Script6();
        break;
      case "5gmgRiMRvEL":
        Script7();
        break;
      case "6cfamNjFawq":
        Script8();
        break;
      case "62gRu2EiA4W":
        Script9();
        break;
      case "6mFthsAb9lO":
        Script10();
        break;
      case "6YMe0XTbpmH":
        Script11();
        break;
      case "6M32Gla0AgL":
        Script12();
        break;
      case "5qUDyRQfYhY":
        Script13();
        break;
      case "6nVYcA9exQr":
        Script14();
        break;
      case "6BJQ4kEBI5F":
        Script15();
        break;
      case "6r9ZXZcF5tX":
        Script16();
        break;
      case "5lNqnKWeuLA":
        Script17();
        break;
      case "5YCff3MCg1C":
        Script18();
        break;
      case "624gFz7cJb9":
        Script19();
        break;
      case "5kJ4Pt7KGj7":
        Script20();
        break;
      case "5kjAqyh1U6c":
        Script21();
        break;
      case "5fgvawHL9ga":
        Script22();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  $("#tab-customlink").hide();
}

function Script14()
{
  $("#tab-customlink").hide();
}

function Script15()
{
  $("#tab-customlink").hide();
}

function Script16()
{
  $("#tab-customlink").hide();
}

function Script17()
{
  $("#tab-customlink").hide();
}

function Script18()
{
  $("#tab-customlink").hide();
}

function Script19()
{
  $("#tab-customlink").hide();
}

function Script20()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script21()
{
  $("#tab-customlink").show();
}

function Script22()
{
  window.print();
}

