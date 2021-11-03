let fs = require('fs');
let arg = process.argv;
var readlineSync = require('readline-sync');

let ram = new Array();
let progText = fs.readFileSync('gcd.jss').toString();
ram = progText.split(/\s+/);
let ip = 0;
let z;

function getIndex(x) {
        let startIndex = 0;
        let index = 0;
        while (true) {
            index = ram.indexOf(x, startIndex);
            if (ram[index - 1] == 'move')
                break;
            startIndex = index + 1;
        }
        return index;
    }	

while (ram[ip] != 'exit'){
	switch (ram[ip]){
		case 'input':
			console.log('number:');
			ram[ram[ip + 1]] = parseInt(readlineSync.prompt());
			ip += 2;
			break;
		case 'output':
			console.log(ram[ram[ip + 1]])
            ip += 2;
            break;
		case 'add':
			ram[ram[ip + 3]] = parseInt(ram[ram[ip + 1]]) + parseInt(ram[ram[ip + 2]]);
            ip += 4;
            break;
		case 'mul':
			ram[ram[ip + 3]] = parseInt(ram[ram[ip + 1]]) * parseInt(ram[ram[ip + 2]]);
            ip += 4;
            break;
		case 'sub':
			ram[ram[ip + 3]] = parseInt(ram[ram[ip + 1]]) - parseInt(ram[ram[ip + 2]]);
            ip += 4;
            break;
		case 'inst':
			ram[ram[ip + 1]] = parseInt(ram[ip + 2])
			ip += 3;
			break;
		case 'move':
			ip += 2;
			break;
		case 'cmpr':
			let x = ram[ram[ip + 1]] - ram[ram[ip + 2]]
			if (x > 0)
				z = 1;
			else if (x < 0)
				z = -1;
			else
				z = 0;
			ip += 3
			break;
		case 'jump':
			ip = getIndex(ram[ip + 1]) + 1;
			break;
		case 'je': 
			if (z == 0)
				ip = getIndex(ram[ip + 1]) + 1;
			else
				ip += 2;
			break;
		case 'jg': 
			if (z == 1)
				ip = getIndex(ram[ip + 1]) + 1;
			else 
				ip += 2;
			break;
		case 'jl': 
			if (z == -1)
				ip = getIndex(ram[ip + 1]) + 1;
			else 
				ip += 2;
			break;
		case 'fact':
			console.log('factorial:');
			ip ++;
			break;
		case 'gcd':
			console.log('greatest common factor:');
			ip ++;
			break;
		default:
			console.log('error');
			ip ++;
			break;
	}
}