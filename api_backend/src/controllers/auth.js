/**
 * Controller for user authentication
 */

const authService = require('../services/auth');

// PUBLIC_INTERFACE
exports.register = async (req, res) => {
  /** Register new user */
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }
    
    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'Password must be at least 6 characters long' 
      });
    }
    
    // Attempt to register user
    const result = await authService.registerUser({ email, password });
    
    res.status(201).json({ 
      message: 'User registered successfully',
      user: { id: result.id, email: result.email }
    });
  } catch (error) {
    if (error.message === 'User already exists') {
      return res.status(409).json({ error: 'User with this email already exists' });
    }
    
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error during registration' });
  }
};

// PUBLIC_INTERFACE
exports.login = async (req, res) => {
  /** Authenticate user */
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      });
    }
    
    // Attempt to login user
    const result = await authService.loginUser({ email, password });
    
    if (!result) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    res.status(200).json({ 
      message: 'Login successful', 
      token: result.token,
      user: result.user
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error during login' });
  }
};
