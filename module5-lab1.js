/*
Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

    showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
    showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
    addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
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

//Main loop

//Menu
let quitMenu = false;

while (!quitMenu) {
  let selection = Number(
    window.prompt(
      "Make your selection.\n1| Show desired contact.\n2| Show last contact.\n3| Show all contacts.\n4| Add new contact.\n0| Exit the program",
      ""
    )
  );

  switch (selection) {
    //Show first contact
    case 1:
      let contactSelection = Number(
        window.prompt("Enter the contact you want to see", "")
      );
      contactSelection--;
      showContact(contacts, contactSelection);
      break;
    //Show last contact
    case 2:
      let lastContact = contacts.length - 1;
      alert(
        `Name: ${contacts[lastContact].name}\nphone: ${contacts[lastContact].phone}\nemail: ${contacts[lastContact].email}`
      );
      break;
    //Show all contacts
    case 3:
      showAllContacts(contacts);
      break;
    //Add new contact
    case 4:
      //User input
      let newContactName = window.prompt("Enter the contact name", "");
      let newContactPhone = window.prompt("Enter the contact phone", "");
      let newContactEmail = window.prompt("Enter the contact email", "");

      addNewContact(contacts, newContactName, newContactPhone, newContactEmail);
      break;
    //Quit loop
    case 0:
      alert("Bye!");
      quitMenu = true;
      break;
    default:
      console.log("Wrong selection");
      break;
  }
}

//Functions section

//Display single contact
function showContact(array, index) {
  if (array instanceof Array && Number.isInteger(index)) {
    alert(
      `Name: ${array[index].name}\nPhone: ${array[index].phone}\nEmail: ${array[index].email}`
    );
  } else {
    alert("Error, arg is not an array or a valid number");
  }
}

//Display all contacts
function showAllContacts(array) {
  if (array instanceof Array) {
    for (const element of array) {
      alert(
        `Name: ${element.name}, phone: ${element.phone}, email: ${element.email}`
      );
    }
  }
}

//Add a new contact
function addNewContact(array, ContactName, ContactPhone, ContactEmail) {
  if (array instanceof Array) {
    let newContact = {
      name: ContactName,
      phone: ContactPhone,
      email: ContactEmail,
    };
    if (ContactName === "" || ContactPhone === "" || ContactEmail === "") {
      alert("All fields must be filled");
    } else {
      array.push(newContact);
      alert("Contact added correctly");
    }
  }
}
