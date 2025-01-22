const productsDOM = document.querySelector('.products-center')

const baseUrl = "https://www.course-api.com/javascript-store-products"

const fetchProducts =  async () => {
    productsDOM.innerHTML = "<div class='loading'></div>";
    try {
        const res = await fetch(baseUrl);
        if(res.status === 404) {
            throw new Error("Peticion fallida");
        }
        const data = await res.json();
        return data;
            } catch (err) {
        productsDOM.innerHTML = '<p class"error"> Se ha producido un error</p>';
            }
        }; 



        //list es el array de datos
        const displayProducts = (list) => {
            //TODO montar el html con los datos del array
            const productList = list.map((product) => {
                const {id } = product;
                const{name: title, price } = product.fields;
                const {url: img } = product.fields.image[0];
                const formatPrice = price / 100;
                const listElement = `<a class="single-product" href="product.html?id=${id}">
                                        <img class="single-product-img img" src="${img}" alt="${title}"/>
                                        <footer>
                                        <h5 class="name">${title}</h5>
                                        <span class="price">${formatPrice}€/span>
                                         </footer>
                                        </a>`;
            // console.log(id, title, price, img);
            return listElement;
                    })
                .join(""); //Se cra un array y luego lo pasan a texto y se unen los elementos! eso es como concatenar los enlaces
                console.log(productList);
                productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
                };


        //Ejemplo Them:
        // fetchProducts().then((data) => {
        //     console.log(data);
        //     displayProducts(data);
        // }); 


        //Ejemplo async await:
        const start = async () => {
            const data = await fetchProducts();
            displayProducts(data);
        };
        start();
        console.log("El script sigue");
        
        
        







