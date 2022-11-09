

const casual = require('casual');
const fs = require('fs');


// set locale to use Vietnamese
casual.locale = 'vi';

// console.log(casual.name);
// console.log(casual.first_name);
// console.log(casual.password);

const randomCatgoryList = (n) => {

    if(n <= 0) return [];
    const categoryList = [];

    //loop and push category
    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: casual.uuid,
            name: casual.full_name,
            createdAt: Date.now(),
            updatedAt: Date.now(),

        };

        categoryList.push(category);
    })


    return categoryList;
}

const randomProductList = (categoryList, numberOfProducts) => {
    
    if(numberOfProducts <= 0) return [];
    const productList = []

    // random data
    for (const category of categoryList) {
        Array.from(new Array(numberOfProducts)).forEach(() => {
            const product = {
                id: casual.uuid,
                name: casual.name,
                color: casual.rgb_hex,
                price: casual.price,
                description: casual.description,
                createdAt: Date.now(),
                updateddAt: Date.now()
            }
            productList.push(product);
        })
    }

    return productList;
}

//IFFE

(() => {

    // random data
    const categoryList = randomCatgoryList(4);
    const productList = randomProductList(categoryList, 5);


  // prepare db.object
  const db = {
      categories: categoryList ,
      products: productList,
      profile: {
          name: "Po",
      },
  };

  // write db object to db.json file
  fs.writeFile('db.json', JSON.stringify(db), () =>{
      console.log('generate data successfully')
  });


})()

