/*
We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

    display the first contact (first)
    display the last contact (last)
    display all contacts (all)
    add a new contact (new)
    exit the program (quit)

After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example quit.
*/

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];
//Menu
let menu = 0;

while (menu !== 0) {
    menu = Number(window.prompt(
        "Make your selection. 1| Show first contact. 2| Show last contact. 3| Show all contacts. 4| Add new contact. 0| Exit the program",
        ""
      ));
  if(menu === 1){
      alert(contacts[0]);
  }
    if(menu === 2){
        console.log(contacts[contacts.length - 1]);
    };
    if(menu === 3){
      for (let contact of contacts) {
        alert(contact);
      }
    };
    if(menu === 4){
    //User input
    let newContactName = window.prompt("Enter the contact name", "");
    let newContactPhone = window.prompt("Enter the contact phone", "");
    let newContactEmail = window.prompt("Enter the contact email", "");
      //Check if prompts are empty
      if (newContactName == "" || newContactEmail == "" || newContactPhone == "") {
        alert("All fields must be filled");
      } else {
        //New contact
        let newContact = {
          name: newContactName,
          phone: newContactPhone,
          email: newContactEmail,
        };
        contacts.push(newContact);
      }
    };
  };
