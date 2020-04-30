
const fs = require('fs')
const yargs = require('yargs')
 const notes = require('./notes')
 const argv = yargs.argv


var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];
var t = yargs.argv.t
var b = yargs.argv.b


if (command == 'add'){
    if (title === undefined && body === undefined){
     notes.addingNote(t ,b)
}
    
    else if (t === undefined && b === undefined) {
        notes.addingNote(title ,body)

    }
    else if (t === undefined && body === undefined){
        notes.addingNote(title ,b)
    }
    else if (title === undefined && b === undefined){
        notes.addingNote(t ,body)
    }

}
else if (command === 'remove'){
    if (title !== undefined || t !== undefined)
    {notes.removeNote(title)
        console.log('Note was Removed');}
    
    
    else {
        console.log('Missing requirement argument : title');
        
    }
}
else if (command === 'list'){
    notes.display()
}
else if (command === 'read'){
    notes.read(title)
}


    





 