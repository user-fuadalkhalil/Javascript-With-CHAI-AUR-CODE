// Immediate Invoked Function Expression (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB Connected`);
})();

((name) => {
  // unnamed IIFE
  console.log(`DB Connected two ${name}`);
})("Fuad");
