export const nextPage = (func, data) => {
  func((oldPage) => {
    let nextPage = oldPage + 1;
    if (nextPage > data.length - 1) nextPage = 0;
    return nextPage;
  });
};

export const getNumOfCategories = (items) => {
  const cates = items.map((item) => item.category);
  return [...new Set(cates)].length;
};

export const prevPage = (func, data) => {
  func((oldPage) => {
    let prevPage = oldPage - 1;
    if (prevPage < 0) prevPage = data.length - 1;
    return prevPage;
  });
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const getTotalItems = (arr) => {
  if (arr.length === 0) return;
  const total = arr
    .map((item) => item.qtyOnHand)
    .reduce((prev, next) => next + prev);
  return total;
};

export const numOfPeople = (items) => {
  const num = items.flat(1);
  return num.length;
};

export const getNumItemsLowStock = (items) => {
  const lowItems = items.filter((item) => item.qtyOnHand < 3);
  return lowItems.length;
};

export const getAvgCost = (arr) => {
  if (arr.length === 0) return;
  const total = arr
    .map((item) => item.cost)
    .reduce((prev, next) => next + prev);
  return total;
};
