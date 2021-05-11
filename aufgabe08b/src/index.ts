import { sayHello } from './lib/utils';

const body: HTMLElement = document.getElementsByTagName('body')[0];
const parapraph: HTMLElement = document.createElement('h1');

let hello: string = sayHello( 'World' );

body.appendChild(parapraph);
parapraph.innerHTML = hello;
console.log( hello );




