/**
 * Controller for user profile
 */

// PUBLIC_INTERFACE
exports.getProfile = (req, res) => {
  /** Get current user's profile (stub) */
  res.status(200).json({ user: { id: 'stub-id', email: 'test@example.com' } });
};
