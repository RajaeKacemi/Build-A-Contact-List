const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
var arrayNames = ['Adil', 'Majda'];
var arrayphones = ['06123451', '07234578'];

console.log('**** Welcome ****' );

rl.question('Do you wanna search or add contact (search / add) ', (answer) => {
        if(answer === 'add'){

            rl.question('Add Name ', (name)=>{
                arrayNames.push(name);

                rl.question('Add Number ', (phone) => {
                    arrayphones.push(phone);

                rl.question('Do you wanna see the list of contact or search a contact ? (search / list) ', (rep) => {
                    if (rep === 'search'){
                        rl.setPrompt('write a name, you wanna search : ');
                        rl.prompt();
                        rl.on('line', (name) =>{
                            for(let i = 0; i < arrayNames.length; i++){
                                if(arrayNames[i].toLocaleLowerCase() === name.toLocaleLowerCase()){
                                    console.log("Name : ", arrayNames[i], "number phone: ", arrayphones[i]);
                                    rl.close();
                                }
                            }
                        });            

                    }else if(rep === 'list'){
                        console.log('Contact List : ');
                        for(let i = 0; i < arrayNames.length; i++){
                        console.log("Name : ", arrayNames[i], " number phone : ", arrayphones[i]);
                        rl.close();
                        }
                    }else {
                        console.log("option dosen\'t exist by by");
                        rl.close();
                    }
                });
            });

        });}else if(answer === 'search'){
            rl.setPrompt('write a name, you wanna search : ');
            rl.prompt();
            rl.on('line', (name) =>{
                for(let i = 0; i < arrayNames.length; i++){
                    if(arrayNames[i].toLocaleLowerCase() === name.toLocaleLowerCase()){
                        console.log("Name : ", arrayNames[i], "number phone: ", arrayphones[i]);
                        rl.close();
                    }
                }
            });

        }else {
            console.log("option dosen\'t exist by by");
            rl.close();
        }
});





