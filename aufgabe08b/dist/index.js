import { sayHello } from './lib/utils';
var body = document.getElementsByTagName('body')[0];
var parapraph = document.createElement('h1');
var hello = sayHello('World');
body.appendChild(parapraph);
parapraph.innerHTML = hello;
console.log(hello);
