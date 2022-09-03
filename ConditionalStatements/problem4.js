//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let r_email = "sharath@gmail.com";
let r_pass = "sha@123";

let email_ent = "sharath@gmail.com";
let pass_ent = "sha@123";

if (email_ent == r_email) {
  if (pass_ent == r_pass) {
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Invalid Email");
}