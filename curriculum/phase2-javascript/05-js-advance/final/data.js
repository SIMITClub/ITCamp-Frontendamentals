// ============================================
// Sample Contact Data
// ============================================
// Notice the nested "info" object inside each contact
// Some contacts don't have phone numbers!

const contacts = [
  {
    id: 1,
    name: "Alice Johnson",
    info: {
      email: "alice@example.com",
      phone: "555-1234"
    }
  },
  {
    id: 2,
    name: "Bob Smith",
    info: {
      email: "bob@example.com",
      phone: "555-5678"
    }
  },
  {
    id: 3,
    name: "Carol Williams",
    info: {
      email: "carol@example.com"
      // No phone!
    }
  },
  {
    id: 4,
    name: "David Lee",
    info: {
      email: "david@example.com",
      phone: "555-9999"
    }
  },
  {
    id: 5,
    name: "Emma Brown",
    info: {
      email: "emma@example.com"
      // No phone!
    }
  },
  {
    id: 6,
    name: "Frank Miller",
    info: {
      email: "frank@example.com",
      phone: "555-1111"
    }
  },
  {
    id: 7,
    name: "Grace Kim",
    info: {
      email: "grace@example.com",
      phone: "555-2222"
    }
  },
  {
    id: 8,
    name: "Henry Chen",
    info: {
      email: "henry@example.com"
      // No phone!
    }
  },
  {
    id: 9,
    name: "Ivy Zhang",
    info: {
      email: "ivy@example.com",
      phone: "555-3333"
    }
  },
  {
    id: 10,
    name: "Jack Wilson",
    info: {
      email: "jack@example.com",
      phone: "555-4444"
    }
  }
];

// TODO 1: Export the contacts array as default export
export default contacts;