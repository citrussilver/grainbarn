function getTotalMonthSale(productList) {
    const totalMonthSale = productList.reduce(function(total, product){
        return total + (product.aveQtySoldDaily * 22);
    }, 0);
    return totalMonthSale;
}

export default getTotalMonthSale;