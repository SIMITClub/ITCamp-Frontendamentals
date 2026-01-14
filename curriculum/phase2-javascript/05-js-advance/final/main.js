// ============================================
// TODO 2: Import contacts from data.js
// ============================================
import contacts from './data.js';


// ============================================
// DOM ELEMENTS (done for you)
// ============================================
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const addBtn = document.getElementById('add-btn');
const contactList = document.getElementById('contact-list');

// ============================================
// STATE
// ============================================
// Using spread to copy the imported contacts array
// (Complete TODO 1 & 2 first for this to work)
let contactsState = [...contacts];


// ============================================
// YOUR TASKS - Complete the functions below
// ============================================

// ------------------------------------------
// TODO 3: displayPhone
// ------------------------------------------
// Return the phone number, or "Not available" if no phone exists
//
// Use optional chaining (?.) to safely access nested property
// Use || to provide fallback value
//
// Example:
//   - If contact.info.phone exists → return the phone number
//   - If contact.info.phone is undefined → return "Not available"
//
// Hint: contact.info?.phone || '______'

const displayPhone = (contact) => {
  return contact.info?.phone || 'Not available';
};


// ------------------------------------------
// TODO 4: addContact
// ------------------------------------------
// Create a new contact and add it to contactsState
//
// Steps:
//   1. Get values from inputs (nameInput.value, emailInput.value, phoneInput.value)
//   2. Create new contact object with NESTED structure:
//      {
//        id: generateId(),
//        name: ______,
//        info: {
//          email: ______,
//          phone: ______
//        }
//      }
//   3. Add to state using spread: contactsState = [...contactsState, newContact]
//   4. Clear inputs (set each .value = '')
//   5. Call render()

const addContact = () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  const newContact = {
    id: generateId(),
    name: name,
    info: {
      email: email,
      phone: phone
    }
  };

  contactsState = [...contactsState, newContact];

  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';

  render();
};


// ------------------------------------------
// TODO 5: deleteContact
// ------------------------------------------
// Remove a contact from contactsState by id
//
// Steps:
//   1. Use .filter() to keep only contacts where contact.id !== id
//   2. Assign result to contactsState
//   3. Call render()

const deleteContact = (id) => {
  contactsState = contactsState.filter((contact) => contact.id !== id);
  render();
};


// ------------------------------------------
// TODO 6: getContactById
// ------------------------------------------
// Find and return a single contact by id
//
// Use .find() to get the contact where contact.id === id
// Return the found contact

const getContactById = (id) => {
  return contactsState.find((contact) => contact.id === id);
};


// ============================================
// HELPER FUNCTIONS (done for you)
// ============================================
const generateId = () => Date.now();

const render = (contactsToRender = contactsState) => {
  if (contactsToRender.length === 0) {
    contactList.innerHTML = `
      <div class="text-center py-10 text-gray-400">
        No contacts found
      </div>
    `;
    return;
  }

  // Using .map() to transform each contact into HTML
  // .map() loops through and returns a new array
  contactList.innerHTML = contactsToRender.map(contact => `
    <div class="bg-white rounded-lg shadow p-4 mb-3 flex justify-between items-center">
      <div>
        <h3 class="font-semibold text-gray-800">${contact.name}</h3>
        <p class="text-sm text-gray-500">📧 ${contact.info.email}</p>
        <p class="text-sm text-gray-500">📱 ${displayPhone(contact)}</p>
      </div>
      <div class="flex gap-2">
        <button 
          class="view-btn bg-gray-100 text-gray-600 px-3 py-1 rounded hover:bg-gray-200 transition-colors cursor-pointer"
          data-id="${contact.id}"
        >
          View
        </button>
        <button 
          class="delete-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors cursor-pointer"
          data-id="${contact.id}"
        >
          Delete
        </button>
      </div>
    </div>
  `).join('');
};


// ============================================
// EVENT LISTENERS (done for you)
// ============================================
addBtn.addEventListener('click', addContact);

contactList.addEventListener('click', (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains('delete-btn')) {
    deleteContact(id);
  }

  if (e.target.classList.contains('view-btn')) {
    const contact = getContactById(id);
    if (contact) {
      console.log('--- Contact Details ---');
      console.log('Name:', contact.name);
      console.log('Email:', contact.info.email);
      console.log('Phone:', displayPhone(contact));
    }
  }
});


// ============================================
// INITIAL RENDER
// ============================================
render();