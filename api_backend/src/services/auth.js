/**
 * Authentication service logic with in-memory storage
 */

const crypto = require('crypto');

// In-memory user storage (replace with database in production)
const users = new Map();

// Simple password hashing (use bcrypt in production)
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Generate simple JWT-like token (use proper JWT library in production)
function generateToken(userId) {
  return crypto.createHash('sha256').update(userId + Date.now()).digest('hex');
}

// PUBLIC_INTERFACE
exports.registerUser = async ({ email, password }) => {
  // Check if user already exists
  if (users.has(email.toLowerCase())) {
    throw new Error('User already exists');
  }
  
  // Create new user
  const userId = crypto.randomUUID();
  const hashedPassword = hashPassword(password);
  
  const user = {
    id: userId,
    email: email.toLowerCase(),
    password: hashedPassword,
    createdAt: new Date().toISOString()
  };
  
  // Store user
  users.set(email.toLowerCase(), user);
  
  console.log(`User registered: ${email}`);
  return { id: userId, email: email.toLowerCase() };
};

// PUBLIC_INTERFACE
exports.loginUser = async ({ email, password }) => {
  // Find user
  const user = users.get(email.toLowerCase());
  if (!user) {
    return null;
  }
  
  // Verify password
  const hashedPassword = hashPassword(password);
  if (user.password !== hashedPassword) {
    return null;
  }
  
  // Generate token
  const token = generateToken(user.id);
  
  console.log(`User logged in: ${email}`);
  return { 
    token,
    user: { id: user.id, email: user.email }
  };
};

// PUBLIC_INTERFACE
exports.getUserByEmail = async (email) => {
  const user = users.get(email.toLowerCase());
  if (!user) {
    return null;
  }
  
  return { id: user.id, email: user.email };
};

// PUBLIC_INTERFACE
exports.getAllUsers = () => {
  return Array.from(users.values()).map(user => ({
    id: user.id,
    email: user.email,
    createdAt: user.createdAt
  }));
};
