const FAV_KEY = 'favorites';

export function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
  } catch {
    return [];
  }
}

export function isFavorite(id: string) {
  return getFavorites().includes(id);
}

export function toggleFavorite(id: string) {
  const favorites = new Set(getFavorites());
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  localStorage.setItem(FAV_KEY, JSON.stringify([...favorites]));
  return favorites.has(id);
}

const CART_KEY = 'cart';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

export function addToCart(item: Omit<CartItem, 'qty'>) {
  const cart = getCart();
  const index = cart.findIndex((cart) => cart.id === item.id);

  if (index > -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
}
