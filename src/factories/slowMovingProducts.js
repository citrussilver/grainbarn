function slowMovingProductsFactory(productList) {

    const object = {
        prodList: productList,
        slowMovingProducts: [],

        getSlowMovingProducts() {
            //fixed number equal or below 500 for slow moving sale
            return this.slowMovingProducts = this.prodList.filter(product => product.aveQtySoldDaily <= 500);
        }
    }
    return object;
}

export default slowMovingProductsFactory;