var fs = require('fs');
console.log(fs.readdirSync(__dirname));
fs.readdir(__dirname,function(err,files){
    console.log(files)
});
process.stdout.write('hello world.');

fs.readdir(__dirname,function(err,files){
    console.log(' ');
    if(!files.length){
        return console.log('    \033[31m No files to show!]\n')
    }
    console.log('select which file or directory you want to see \n');
    function file(i){
        var filename = files[i];
        fs.stat(__dirname+'/'+filename,function(err,stat){
            if(err){return false};
            if(stat.isDirectory()){
                console.log(i+' \033[36m]'+filename);
            }else{
                console.log(i+'  \033[90m]'+filename);
            }
            i++;
            if(i==files.length){
                console.log('');
                process.stdout.write('Enter yours choice:');
                process.stdin.resume();
                process.stdin.setEncoding('utf8')
                process.stdin.on('data',function(){
                    if(!files[Number(data)]){
                        process.stdout.write('Enter your choice:');
                    }else{
                        process.stdin.pause();
                        fs.readFile(__dirname+'/'+filename,'utf8',function(err,data){
                            console.log('');
                            console.log(data.replace(/(.*)/g,'      $1'));
                        });
                    }
                })
            }else{
                file(i);
            }
        })
    }
    file(0);
});