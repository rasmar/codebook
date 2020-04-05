// Optional Catch Binding
// In the past catch clause in a try / catch statement required a variable.
// The try / catch statement helps us intercept errors on terminal level:
// Here’s a refresher.
try {
  // Call a non-existing function undefined_Function
  undefined_Function("I'm trying");
}
catch (error) {
  // Display the error if statements inside try above fail
  console.log(error); // undefined_Function is undefined
}

// But in some cases required error variable was left unused:
try {
  JSON.parse(text); // <--- this will fail with "text not defined"
  return true; // < --- exit without error even if there is one
}
catch (redundant_sometmes) // < --- this makes error variable redundant
{
  return false;
}

// Whoever wrote this code exits from the try clause by trying to forcing true.
// But… this isn’t actually what happens(as pointed out by Douglas Massolari.)
(() => {
  try {
    JSON.parse(text);
    return true;
  } catch (err) {
    return false;
  }
})()
// => false

// In ES10 Catch Error Binding Is Optional
// You can now skip error variable:
try {
  JSON.parse(text);
  return true;
}
catch
{
  return false;
}
// There is currently no way to test what the try statement evaluate to like in previous example.
