// Usuwanie wlasciwosci objektu

var animal = {
  gender: 'female'
};

console.log(animal.gender); //'female'

// delete

delete.animal.gender;
console.log(animal.gender); //

// drugi sposob to przypisanie wartosci null
animal.gender = 'female';
console.log(animal.gender); // female
console.log(animal.gender) = null;

//doesnt work - wlasciwosc na wartosc null i mozna ja wykryc poprzez uzycie hasOwnProperty
console.log(animal.gender); //
