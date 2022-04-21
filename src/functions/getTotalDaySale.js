function getTotalDaySale(productList) {
    const totalDaySale = productList.reduce(function(total, product){
        return total + product.aveQtySoldDaily         
    }, 0);
    return totalDaySale;
}

export default getTotalDaySale;