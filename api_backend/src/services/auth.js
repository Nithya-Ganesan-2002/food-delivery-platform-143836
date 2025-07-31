/**
 * Stub for authentication service logic
 */

// PUBLIC_INTERFACE
exports.registerUser = async ({ email, password }) => {
  // Future DB/store operation
  return { id: 'stub-user-id', email };
};

// PUBLIC_INTERFACE
exports.loginUser = async ({ email, password }) => {
  // Future lookup, return token on valid
  return { token: 'fake-jwt-token' };
};
