window.addEventListener("load",init);

function init()
{
  var request = new HttpRequest();
  request.load("students.php", function(Students){
       console.log(Students);
  });
    app.randomStudentsView.init(app.randomStudentsView);
}
