var app = app || {};

app.allStudentsList = {
    init:function(model){
        this.model = model;
        this.templateSrc = document.querySelector("#tableTemp").innerHTML;
        this.template = Handlebars.compile(this.templateSrc);
        this.container = document.querySelector(".allTable");
        this.model.addListener("CHANGE",this.getAllStudents.bind(this));
    },
    render:function(as){

        console.log(as);
        this.container.innerHTML = this.template(as);
    },
    getAllStudents:function(e){
                       var as = this.model.allStudents();
                       this.render(as)
                   }
}
