/**
 * Stub for restaurant/menu service
 */

// PUBLIC_INTERFACE
exports.listRestaurants = async () => {
  return [];
};

// PUBLIC_INTERFACE
exports.getRestaurantById = async (id) => {
  return { id, name: 'Stub Restaurant' };
};

// PUBLIC_INTERFACE
exports.getMenuForRestaurant = async (restaurantId) => {
  return [];
};
