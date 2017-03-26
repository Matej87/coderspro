// Setter Getter

var person = {
  _name: "Marcin"
  // get musi zwrocic wartosc
  get name(){
    // w stringu mozna dodac %s i jako kolejny argument zmienna
    console.log("Hello %s", this._name);
    return this._name;
  },
  // musi dodac argument
  set name(){
    console.log('Zmiana wartosci %s', value);
    this._name = value;
  }
};

console.log(person.name);

person.name = 'Zosia';
console.log(person.name);
