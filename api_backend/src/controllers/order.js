/**
 * Controller for order creation, status, and history
 */

// PUBLIC_INTERFACE
exports.create = (req, res) => {
  /** Stub: Create a new order */
  res.status(201).json({ orderId: 'stub-order-id', message: 'Order received (stub)' });
};

// PUBLIC_INTERFACE
exports.listMine = (req, res) => {
  /** Stub: List orders for the logged-in user */
  res.status(200).json({ orders: [] });
};

// PUBLIC_INTERFACE
exports.status = (req, res) => {
  /** Stub: Get status of specific order */
  res.status(200).json({ orderId: req.params.id, status: 'pending' });
};
