 const fs = require('fs')

const fetchNotes =() =>{
     try{
         return JSON.parse(fs.readFileSync("notes.txt"));
     } catch (err){
         return [];
     }
 }
 

 const addingNote = (title , body) =>{
   var notes = fetchNotes();
    var note ={
        title,
        body
    };

    


    if (title === undefined && body === undefined){
        console.log('Options');
        console.log('--help           show help                          [boolean]');
        console.log('--title, -t      Title of note                      [required]');
        console.log('--body, -b       body of note                        [required]');
        console.log('Missing required argumets: title , body');
    }
    else if (title === undefined){
        console.log('Options');
        console.log('--help           show help                          [boolean]');
        console.log('--title, -t      Title of note                      [required]');
        console.log('Missing required argumets: title');
    }
    else if (body === undefined){
        console.log('Options');
        console.log('--help           show help                          [boolean]');
        console.log('--body, -b       body of note                        [required]');
        console.log('Missing required argumets: body');
    }
    else {
        console.log('Note Created')
        console.log('--');
        console.log('Title:' ,title);
        console.log('Body:', body);
        notes.push(note);

    fs.writeFileSync('notes.txt' , JSON.stringify(notes))
    }
 }

 const removeNote = (title) =>{
    var notes = fetchNotes();

   notes = notes.filter(el => el.title != title)
    fs.writeFileSync('notes.txt' , JSON.stringify(notes))

}


    const display = () =>{
        var notes = fetchNotes();
       console.log('printing',notes.length,'note(s)')
      notes.map(el =>{
        console.log('--');
          console.log('Title: ' ,el.title);
          console.log('Body: ',el.body);
          console.log('')
      })
    }

    const read = (title) =>{
        var notes = fetchNotes();

        if (title === undefined){
    console.log('options');
    console.log('--help             Show help            [boolean]');
    console.log('--title -t         Title of note        [required]');
    console.log('');
    console.log('Missing Requirement Argument : title');
    
    
        }
        else {
            notes.map(el => {
                if (el.title === title){
                    console.log('Note Found');
                    console.log('--')
                    console.log('Title:',el.title)
                    console.log('Body:' , el.body)
                }
            })
        }
    }
 module.exports = {
     addingNote,
     removeNote,
     display,
     read
 }