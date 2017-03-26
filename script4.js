// Wyliczeniach

var obj = {
  string: 'Troll'
};

for(var property in obj) {
  console.log(property); //nazwa wlasciwosci
  console.log(obj[property]); //wartosc wlasciwosci
}

// proto nie bedzie wyswietlane poniewaz [[Enumerable]] jest ustawione na false
console.log(Object.keys(obj));
console.log(property.propertyIsEnumerable('__proto__'));
