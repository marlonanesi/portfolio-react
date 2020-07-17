import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Joke from './components/Jokes';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path='/' component={App}></Route>
      <Route path='/jokes' component={Joke}></Route>
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// Minha primeira promise:
// Em um outro objeto promise, o parametro será uma função que receberá dois atributos (resolve, reject), onde:
// resolve: será uma função que eu irei utilizar encadeando ométodo .then ao final da execução da minha promise;
// reject: caso ocorrer algum problema na execução da minha promise, irei chamar essa função que encadeará o método
// .catch da minha promise.
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('ho'),
    reject();
  }, 2000)
}).then( () => {
    console.log('ho 1');
    console.log('ho 2');
}).catch( () => {
  console.log('Um erro aconteceu');
});

/* class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log('Roar.')
  }
}
const a = new Animal('Leão');
console.log(a);
console.log(a.falar());
class Humano extends Animal {
  constructor(nome, idade, cabelo) {
    super(nome);
    this.idade = idade;
    this.cabelo = cabelo;
  }
  falar() {
    console.log("Oi!");
  }
  apresentar(){
    console.log("Meno nome é", this.nome, "eu tenho", this.idade, "anos de idade", ",e o meu cabelo é", this.cabelo,".");
  }
}
const h = new Humano("Marlon", "26", "Castanho")
console.log (h.falar());
console.log(h.apresentar());
 */