var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
//Parameters arg: model name, schema, collection name
var Book = mongoose.model('Tarea06',schema,'tarea06');

// documento1
var book1 = new Book({
    title:'Hackear Al Hacker. Aprende De Los Expertos Que Derrotan Al Hacker',
    author:'Grimes, Roger A.',
    body:'Cada día, los hackers de sombrero blanco se encuentran con los de sombrero negro en el ciberespacio, batallando por el control de la tecnología que impulsa nuestro mundo. Los hackers éticos,...',
    comments:[{body:'buen libro sobre hack',
               date:'2015-02-02'}],
    date:'2018-02-25',
    hidden:false,
    meta:{
        votes:10,
        favs:52}
});

book1.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});

// documento2
var book2 = new Book({
    title:'8080/8086',
    author:'Pappas',
    body:'Lobro que trata sobre todo lo que implica la programacion de procesador 8086',
    comments:[{body:'buen libro sobre programacion a nivel bajo',
               date:'2012-03-24'}],
    date:'2010-04-05',
    hidden:true,
    meta:{
        votes:1,
        favs:25}
});

book2.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});

// documento3
var book3 = new Book({
    title:'El libro numero 3',
    author:'Autor 3',
    body:'libro de ejemplo fictisio para registrar documento 3',
    comments:[{body:'libro libro libro',
               date:'2019-01-06'}],
    date:'2018-05-07',
    hidden:false,
    meta:{
        votes:100,
        favs:106}
});

book3.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});

// documento4
var book4 = new Book({
    title:'El libro numero four',
    author:'Autor four',
    body:'libro de ejemplo para registrar documento 4',
    comments:[{body:'libro bueno soso',
               date:'2000-12-30'}],
    date:'2010-05-07',
    hidden:false,
    meta:{
        votes:100,
        favs:106}
});

book4.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});


//busqueda general
Book.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("consulata general");
    console.log(docs);
});

//busqueda con restriccion
Book.find({author:'Autor four'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("consulata con restriccion");
    console.log(docs);
});

//actualizacion
Book.update({_id:'5d182145ccd5d93d289a6d35'},{$set: {body:'se actualizo el body de este libro'}},
function(error,docs){
    if(error){
        console.log(error);
        process.emit(1);
    }
    console.log("Actualizacion");
    process.exit(0);
});

//eliminacion
Book.findByIdAndRemove({_id :'5d182145ccd5d93d289a6d37'},function(error,docs){
    if(error){
        console.log(error);
        process.emit(1);
    }
    console.log("Document borrado con exito")
    console.log(docs);
    process.exit(0);
});