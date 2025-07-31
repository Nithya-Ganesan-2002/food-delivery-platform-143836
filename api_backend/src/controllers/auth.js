/**
 * Controller for user authentication
 */

 // PUBLIC_INTERFACE
exports.register = (req, res) => {
  /** Register new user (skeleton implementation) */
  res.status(201).json({ message: 'User registered (stub)' });
};

// PUBLIC_INTERFACE
exports.login = (req, res) => {
  /** Authenticate user (skeleton implementation) */
  res.status(200).json({ message: 'User logged in (stub)', token: 'fake-jwt-token' });
};
