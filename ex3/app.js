
const { readFile, writeFile } = require('./fileManager');


readFile('Hello World.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Content of "Hello World.txt":');
    console.log(data);

   
    const contentToWrite = 'Writing to the file';
    writeFile('Bye World.txt', contentToWrite, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Content written to "Bye World.txt" successfully.');
    });
});
