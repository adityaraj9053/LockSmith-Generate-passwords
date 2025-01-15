const passwordBox = document.getElementById("password"); // used to retrieve an HTML element from the document based on its unique id attribute.
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = ()=>{

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/><=-`~[]"; // all values can be use inside password

    let password = "";
    const lenthofPassword = 8;

    for(let i = 0; i < lenthofPassword; i++){

       password += chars.charAt(Math.floor(Math.random() * chars.length)) 
/** Math.random will generate any number between 0.0 to 1.0. lets say it will genrate 0.85. 
 * now, Math.random() * chars.length = 6.8. It's floor value is 6
 * we have to take characters from chars at index(6) i.e G. and loop run similarly.
 */
    }

    passwordBox.value = password;


};

button.addEventListener("click",generatePassword);// is used to add an event listener to a button. It listens for a specific event. Here, a "click" event and then executes a function when that event occurs.

copyButton.addEventListener("click",()=>{ // adds an event listener to an element referenced by 'copyButton'.It listens for the "click" event, which triggers the arrow function when we click the button.

  const passwordCopy = passwordBox.value.trim(); // trim() removes any leading or trailing spaces from the input value.
  if(!passwordCopy){
    alert("No password to copy! Please generate a password first.");
    return;
  }


  navigator.clipboard.writeText(passwordCopy).then(()=>{ // is a modern web API that allows you to write (copy) text to the clipboard programmatically.

        alert("Password copied to clipboard!");
    });

});
