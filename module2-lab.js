/*
Scenario

Do you remember the contact list you created while doing the task from the previous Lab? You have to admit that at first glance
it looked quite strange. We had to use nine variables to store information about just three users. What's worse, adding each
new user would require the creation of three more variables. This is neither convenient nor practical. Fortunately, since
then we have learned something about arrays and objects, which will allow us to save our list in a slightly more convenient way.
Using the same data as in the previous Lab, create the contact list as an array, each element of which will be an object describing
a single user. So we should get a three-element array, and each object placed in it will contain three pieces of
information (name, phone, and email).

At the end of the list declared in this way, add a new contact using the appropriate array method. The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Display the first and last contact, again in the format: name / phone / email. Use the length property of the array to determine the index of the last element. Remember that the array elements are indexed starting at 0.
*/

let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let newContact =     {
        name: "Maisie Haley",
        phone: "0913 531 3030",
        email: "risus.Quisque@urna.ca"
    }

    contacts.push(newContact);

console.log(contacts[0].name + " / " +contacts[0].phone + " / " + contacts[0].name);
console.log(contacts[3].name + " / " +contacts[3].phone + " / " + contacts[3].name);
