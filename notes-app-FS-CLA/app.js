const yargs=require('yargs');
//console.log(process.argv);

//console.log(yargs.argv.title);

//yargs.version("1.1.0");

// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler: function(){
        console.log('Adding a new note');
    }
});

// Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    handler: function(){
        console.log('Removing a new note');
    }
});

// Create list command
yargs.command({
    command:'list',
    describe:'List the notes ',
    handler: function(){
        console.log('Listing the notes');
    }
});

// Create read command
yargs.command({
    command:'read',
    describe:'Read a new note',
    handler: function(){
        console.log('Reading a new note');
    }
});


console.log(yargs.argv);



