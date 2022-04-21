function topSellingProductFactory(productList) {

    const object = {
        prodList: productList,
        topSellingProduct: {},
        highestQtySold: 0,

        getTopSellingProduct() {
            this.prodList.forEach((product) => {
                if(product.aveQtySoldDaily > this.highestQtySold) {
                    this.highestQtySold = product.aveQtySoldDaily;
                    this.topSellingProduct = product;
                }
            });
            return this.topSellingProduct;
        }
    }
    return object;
}

export default topSellingProductFactory;