// interfaces.jsx

export const Ticket = {
    id: '', // string
    title: '', // string
    tag: [], // array of strings
    userId: '', // string
    status: '', // string
    priority: 0 // number
};

export const User = {
    id: '', // string
    name: '', // string
    available: false // boolean
};

export const Col = {
    col: [] // array of Ticket objects
};

export const UserIdToData = {
    userData: {} // object where keys are user IDs and values are User objects
};

// Usage Example
// export const exampleTicket = { ...Ticket, id: '1', title: 'Example Ticket', tag: ['urgent'], userId: 'user1', status: 'open', priority: 1 };
// export const exampleUser = { ...User, id: 'user1', name: 'John Doe', available: true };
// export const exampleCol = { ...Col, col: [exampleTicket] };
// export const exampleUserIdToData = { ...UserIdToData, userData: { user1: exampleUser } };
