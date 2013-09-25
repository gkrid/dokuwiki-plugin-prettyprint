/*window.onload = function()
{
document.getElementsByClassName = function(cl) {
var retnode = [];
var myclass = new RegExp('\\b'+cl+'\\b');
var elem = this.getElementsByTagName('*');
for (var i = 0; i < elem.length; i++) {
var classes = elem[i].className;
if (myclass.test(classes)) retnode.push(elem[i]);
}
return retnode;
}; 

    function addClass(element, value) {
    if(!element.className) {
    element.className = value;
    } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
    }
    }

  var logo_url = document.getElementById("p-logo");
  var img = logo_url.getElementsByTagName("a")[0].style.backgroundImage;;


  var patt=/^url\(\"(.*)\"\)$/;
  var date_patt =/^(.*) .*$/;
  var editor_patt = /^.* przez (.*)$/m
  var logo=patt.exec(img);
  if(logo == null)
  {
      var patt=/^url\((.*)\)$/;
      var logo=patt.exec(img);
  }
  logo=logo[1];
  var editor = document.getElementById("lastmod").textContent;

  var edit = editor_patt.exec(editor)[1]; 


  var bodyContent = document.getElementById("bodyContent");
  var h1_elm = bodyContent.getElementsByTagName("h1")[0];
  h1 = h1_elm.textContent;
  //removing h1
  addClass(h1_elm, "no-print");
  var date_time = document.getElementsByClassName("approval_date")[0].textContent;

  var approval = document.getElementsByClassName("approval")[0];
  var draft = approval.getElementsByTagName("em")[0].textContent;
  
  var date =   date_patt.exec(date_time)[1];
  
  var globalWrapper = document.getElementById("globalWrapper");
  
  body = document.getElementsByTagName("body")[0];
  container = document.createElement("div");

   cont = '<table style="border-collapse:collapse;width:100%;" class="print"><tr><td style="border-right:2px solid #000;border-bottom:2px solid #000;text-align:center;padding:5px;"><img src="'+logo+'"></td><td style="border-right:2px solid #000;border-bottom:2px solid #000;text-align:center;padding:5px;"><h1>'+h1+'</h1></td><td style="padding:5px;border-bottom:2px solid #000;"><p>Wersja:&nbsp;<b>'+date+'</b><br>Źródło:&nbsp;<b>DokuWiki</b><br>';
if(draft == 'Approved')
 cont += 'Zatwierdził(a):&nbsp;<b id="opracowal">'+edit+'</b>';
else
 cont += 'Opracował(a):&nbsp;<b id="opracowal">'+edit+'</b>';

 cont += '</p></td><tr></table>';

 container.innerHTML = cont;
 body.insertBefore(container, globalWrapper);
}*/
