/*
During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

    showing the first contact (first)
    showing the last contact (last)
    adding a new contact (new)

When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.
*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

//User input
let newContactName = window.prompt("Enter the contact name", "");
let newContactPhone = window.prompt("Enter the contact phone", "");
let newContactEmail = window.prompt("Enter the contact email", "");

//New contact
let newContact = {
    name: newContactName,
    phone: newContactPhone,
    email: newContactEmail

};

//Menu (1) - show first. (2) - show last. (3) - add new.

let menu = Number(window.prompt("Make your selection. 1| Show first contact. 2| Show last contact. 3| Add new contact", ""));

//Menu action 
switch (menu) {
    case 1:
        console.log(contacts[0]);
        break;
    case 2:
        console.log(contacts[contacts.length-1]);
        break;
    case 3:
    //Check if prompts are empty
    if(newContactName == "" || newContactEmail == "" || newContactPhone == "") {
    console.log("All fields must be filled");
    } else {
    contacts.push(newContact);
    }
    break;
    default:
        alert("Wrong selection")
        break;
}
