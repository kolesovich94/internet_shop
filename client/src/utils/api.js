export const fetchTopSales = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/top-sales`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
};

export const fetchOrder = (order) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  });
};

export const fetchCategories = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/categories`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }
  );
};

export const fetchItems = (params) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/items?${params}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }
  );
};

export const fetchItemId = (id) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}/items/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }
  );
};
