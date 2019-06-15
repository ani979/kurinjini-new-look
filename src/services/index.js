
// Get Unique Brands from Json Data
export const getSolutionForSkin = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
            if(product.type && product.type=="skin") {
                product.tags.map((tag) =>
                {
                    if(uniqueBrands.indexOf(tag) === -1){
                        uniqueBrands.push(tag);
                    }
                })
            }   
        }     
    )
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Colors from Json Data
export const getGoodForSkin = (products) => {
    var uniqueGoodness = [];
    
    products.map((product, index) => {
            if(product.type && product.type === "skin") {
                if(product.goodFor) { 
                    product.goodFor.map((goodFor) => {
                        if(uniqueGoodness.indexOf(goodFor) === -1){
                            uniqueGoodness.push(goodFor);
                        }
                    });
                } else {
                    return '';
                }
            }   
        }     
            
    )
    //console.log(uniqueGoodness)
    return uniqueGoodness;
}

// Get Unique Brands from Json Data
export const getSolutionForHair = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
            if(product.type && product.type=="hair") {
                product.tags.map((tag) =>
                {
                    if(uniqueBrands.indexOf(tag) === -1){
                        uniqueBrands.push(tag);
                    }
                })
            }
        }     
    )
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Products Category  from Json Data
export const getCategory = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
            console.log("product.category ", product.category);
            if(product.category) {
                if(uniqueBrands.indexOf(product.category) === -1){
                    uniqueBrands.push(product.category);
                }
               
            }    
        }
    )
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Products Category  from Json Data
export const getType = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
            //console.log("product.type ", product.type);
            if(product.type) {
                if(uniqueBrands.indexOf(product.type) === -1){
                    uniqueBrands.push(product.type);
                }
               
            }    
        }
    )
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Products Sub-Category  from Json Data
export const getSubCategory = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
            if(product.subCategory) {
                product.subCategory.map((subCat) =>
                {
                    if(uniqueBrands.indexOf(subCat) === -1){
                        uniqueBrands.push(subCat);
                    }
                })
            }
        }    
    )
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Colors from Json Data
export const getGoodForHair = (products) => {
    var uniqueGoodness = [];
    
    products.map((product, index) => {
            if(product.type && product.type=="hair") {
                if(product.goodFor) { 
                    product.goodFor.map((goodFor) => {
                        if(uniqueGoodness.indexOf(goodFor) === -1){
                            uniqueGoodness.push(goodFor);
                        }
                    });
                } else {
                    return '';
                }
            }
        }    
    )
    //console.log(uniqueGoodness)
    return uniqueGoodness;
}

// Get Minimum and Maximum Prices from Json Data
export const getMinMaxPrice = (products) => {
    let min = 100, max = 1000;

    products.map((product, index) => {
        let v = product.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })

    return {'min':min, 'max':max};
}

export const getVisibleproducts = (data, {tags, goodFor, value, sortBy, category, subCategory, type }) => {
    //console.log("do i come here?? ", tags)
    return data.products.filter(product => {
        //console.log("product.goodFor ? ", product.goodFor, goodFor);
        let brandMatch;
        //const brandMatch = product.tags.some(tag => tags.includes(tag))
        //console.log("tags? ", tags)
        if(tags.length != 0) {
            //console.log("product.tags ", product.tags)
            brandMatch = product.tags? product.tags.some(tag => tags.includes(tag)):''
            //console.log("brandmatch ", brandMatch);
        } else {
            brandMatch = true;
        }
        let colorMatch;
        //console.log("goodFor? ", goodFor)
        if(goodFor.length != 0) {
            //console.log("product.goodFor.includes(goodFor) ", product.goodFor.every( e => goodFor.includes(e)));
            colorMatch = product.goodFor? product.goodFor.some( e => goodFor.includes(e)):''
        } else{
            colorMatch = true;
        }
        //console.log("match ? ", brandMatch, colorMatch);

        let categoryMatch;
        //console.log("category ", category);
        if(category.length != 0) {
            //console.log("product.tags ", product.tags)
            categoryMatch = product.category ? category.includes(product.category):''
            //console.log("brandmatch ", brandMatch);
        } else {
            categoryMatch = true;
        }

        let subCategoryMatch;
        //console.log("subCategory ", subCategory);
        if(subCategory.length != 0) {
            //console.log("product.tags ", product.tags)
            subCategoryMatch = product.subCategory? subCategory.every( e => product.subCategory.includes(e)):''
            //console.log("brandmatch ", brandMatch);
        } else {
            subCategoryMatch = true;
        }

        let typeMatch;
        //console.log("type ", type);
        if(type !== '') {
            //console.log("product.tags ", product.tags)
            typeMatch = product.type? type === product.type:''
            //console.log("brandmatch ", brandMatch);
        } else {
            typeMatch = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return brandMatch && colorMatch && categoryMatch && subCategoryMatch && typeMatch;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        }
    });
}

export const getCartTotal = cartItems => {
    var total = 0;
    
    for(var i=0; i<cartItems.length; i++){
        
        total += parseInt(cartItems[i].qty, 10)*parseInt((cartItems[i].choosenPrice), 10);
    }
    return total;
}


// Get TOP Collection
export const getTopCollection = products => {
    const items = products.filter(product => {
        return product.rating > 4;
    })
    return items.slice(0,8)
}

// Get Best Seller
export const getBestSeller = products => {
    const items = products.filter(product => {
        return product.new === true;
    })

    return items.slice(0,8)
}

// Get Mens Wear
export const getMensWear = products => {
    const items = products.filter(product => {
        return product.category === 'men';
    })

    return items.slice(0,8)
}

// Get Womens Wear
export const getWomensWear = products => {
    const items = products.filter(product => {
        return product.category === 'women';
    })

    return items.slice(0,8)
}

// Get Single Product
export const getSingleItem = (products, id) => {

    const items = products.find((element) => {
        return element.id === id;
    })
    return items;
}


