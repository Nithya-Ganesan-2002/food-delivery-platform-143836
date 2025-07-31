/**
 * Controller for restaurants and menus
 */

// PUBLIC_INTERFACE
exports.list = (req, res) => {
  /** List all restaurants (stub) */
  res.status(200).json({ restaurants: [] });
};

// PUBLIC_INTERFACE
exports.getDetails = (req, res) => {
  /** Get specific restaurant details (stub) */
  res.status(200).json({ restaurant: { id: req.params.id, name: 'Stub Restaurant' } });
};

// PUBLIC_INTERFACE
exports.getMenu = (req, res) => {
  /** Get menu of a restaurant (stub) */
  res.status(200).json({ menu: [], restaurantId: req.params.id });
};
