var app = app || {};

app.allStudentsList = {
    init:function(model){
        this.model = model;
        this.templateSrc = document.querySelector("#tableTemp").innerHTML;
        this.template = Handlebars.compile(this.templateSrc);
        this.container = document.querySelector(".allTable");
        //cant pass model.allStudents directly to this.render because
        //app instantly shuffles and thus this.model does not exist.
        //endmylife.jpg
        this.model.addListener("CHANGE",this.getAllStudents.bind(this));
    },
    render:function(as){

        console.log(as);
        this.container.innerHTML = this.template(as);
    },
    getAllStudents:function(e){
                       var as = this.model.allStudents();
                       this.render(as)
    },
    studentClicked: function(e){
        var clickedRow = e.target,
            id = clickedRow.dataset.id -1;
        this.lengthVisual.style.height = this.model.allStudents()[id].height*2+"px";
        for (var i = 0; i < this.eyeColor.length; i++) {
          this.eyeColor[i].style.backgroundColor = this.model.allStudents()[id].eye_color;
        }
    }
}
