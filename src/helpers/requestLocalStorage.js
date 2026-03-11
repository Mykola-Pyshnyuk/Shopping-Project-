function addProducts(productInfo, nameLocalStorage) {
  const product = JSON.parse(localStorage.getItem(nameLocalStorage)) || [];
  product.push(productInfo);
  localStorage.setItem(nameLocalStorage, JSON.stringify(product));

  window.dispatchEvent(new Event("storage"));
}

function deleteProducts(productInfo, nameLocalStorage) {
  const product = JSON.parse(localStorage.getItem(nameLocalStorage)) || [];
  const deleteProduct = product.filter(
    (product) => product.key !== productInfo.key
  );
  localStorage.setItem(nameLocalStorage, JSON.stringify(deleteProduct));

  window.dispatchEvent(new Event("storage"));
}

function checkProduct(productKey, nameLocalStorage) {
  const product = JSON.parse(localStorage.getItem(nameLocalStorage)) || [];
  return product.some((product) => product.key === productKey);
}

function getProducts(nameLocalStorage) {
  const product = JSON.parse(localStorage.getItem(nameLocalStorage)) || [];
  return product;
}

export { addProducts, deleteProducts, checkProduct, getProducts };
