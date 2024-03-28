async function getProduct() {
  const data = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((err) => console.log(err));

  let productData = ``;
  data.map((el) => {
    productData += `
        <tr>
        <td>${el.id}</td>
        <td>${el.title}</td>
        <td>${el.price}</td>
        <td>${el.brand}</td>
        <td>${el.category}</td>
        <td>${el.description}</td>
        <td><img src="${el.thumbnail}"></td>
        <td>${el.images.map((ele) => `<img src="${ele}">`)}</td>
        </tr> 
        
        `;

    document.getElementById("output").innerHTML = productData;
  });
}

getProduct();
