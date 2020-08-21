import {fizzBuzz} from "./FizzBuzz";

const run = (fn, arg)=>{
	if(fn == undefined) {
		console.log('hello world')	
	} else {
		console.log(fn(arg));
	}
	
}

run(fizzBuzz, 2);