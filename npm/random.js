let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const charactersLength = characters.length;

for (let i = 0; i < 5; i++) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
}

console.log(result);