let obj = {
  d: "ad", 
  df: "adsf",
  asdfdee: [
    {sdeekk: 'sdfasd'},
    {ddkkkdk: 'iewsldkf'}
  ],
  adsdfgf: 
    {
      sd: 'adfadfa', 
      dsflk: 
        {
          kasdl: 'sldkf'
        }
    }
};

function keysUp(obj) {

  if (!Array.isArray(obj)) {
    for (let key in obj) {

      let newKey = key.toUpperCase();
      
      Object.defineProperty(obj, newKey,
        Object.getOwnPropertyDescriptor(obj, key));
      delete obj[key];
                
      if (typeof obj[newKey] !== 'string' && typeof obj[newKey] !== 'boolean') {
        obj[newKey] = keysUp(obj[newKey]);
      };
    };
  } else {
    for (let value of obj) {
      if (typeof value !== 'string' && typeof value !== 'boolean') {
        value = keysUp(value);
      };
    };
  };

  return obj;
};

console.log(keysUp(obj), 'Я итог работы функции');
