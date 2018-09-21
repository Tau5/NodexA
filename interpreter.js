function byteJoin(from, count, line) {
    byte = ""
        for(n=from;n<(count+from);n++){
             byte+=line[n].toString(16)
        }
        byte = parseInt(byte, 16)
        return byte
}

module.exports = (buffer) => {
    var file = new Buffer(buffer)
    
    for(i=0;i<file.length;i+=16){
            var line = file.slice(i, i+16)
            if(line[0]==0x11){
                location = byteJoin(1,2,line)
                byte = byteJoin(4, line[3], line)
                /* byte = ""
                for(n=0;n<line[3];n++){
                    byte+=line[n+4].toString(16)
                }
                byte = parseInt(byte, 16)*/
                file[byte] = memory[location]
            }
            if(line[0]==0x20){
                var conditions = [line[1]===line[3],line[1]>line[3],line[1]<line[3],line[1]>=line[3],line[1]<=line[3]]
                if(conditions[line[2]]){
                    i = (line[4]-1)*16
                } else {
                    if(line[5]){
                        i = (line[5]-1)*16
                    }
                }
            }
            if(line[0]==0x21){
                linego = byteJoin(2, line[1], line)
                i = (linego-1)*16
            }
            if(line[0]==0x12){
                location = byteJoin(1,2,line)
                var operations = [line[3]+line[5],line[3]-line[5],line[3]*line[5],line[3]/line[5]]
                var result = operations[line[4]]
                memory[location] = result
            }
            if(line[0]==0x10){
                location = byteJoin(1,2,line) //parseInt(`${line[1].toString(16)}${line[2].toString(16)}`, 16)
                memory[location] = line[3] 
            }
            if(line[0]==0x0F){
                break
            }
    }
}