// This file will export middleware as the application grows

// PUBLIC_INTERFACE
const requestLogger = (req, res, next) => {
  /** Log incoming requests for debugging */
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Request body:', { ...req.body, password: req.body.password ? '[REDACTED]' : undefined });
  }
  next();
};

module.exports = {
  requestLogger
};
