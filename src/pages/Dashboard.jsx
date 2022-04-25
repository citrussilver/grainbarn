import React from 'react'
import Card from '../components/Card'
import DataDetail from '../components/DataDetail'
import productList from '../productList'
import topSellingProductFactory from "../factories/topSellingProduct";
import slowMovingProductsFactory from "../factories/slowMovingProducts";
import totalDaySale from '../functions/getTotalDaySale'
import totalMonthSale from '../functions/getTotalMonthSale'
import cityWideSales from '../citySales'
import customersList from '../customers'
import newAndExistingCustomersFactory from "../factories/newAndExistingCustomers";
import { StyledPageHeader } from '../components/styles/PageHeader.styled'

function Dashboard() {

    const topProdFactory = topSellingProductFactory(productList)
    const topProduct = topProdFactory.getTopSellingProduct()

    const slowMovingProdsFactory = slowMovingProductsFactory(productList)
    const slowMovingProds = slowMovingProdsFactory.getSlowMovingProducts()

    const newAndExistCustomersFactory = newAndExistingCustomersFactory(customersList)
    const existingCustomers = newAndExistCustomersFactory.setExistingCustomers()
    console.log(existingCustomers.length)
    const newCustomers = newAndExistCustomersFactory.setNewCustomers()
    console.log(newCustomers.length)

  return (
    <div className="common-animate">
        <StyledPageHeader>
            Dashboard
        </StyledPageHeader>
        <div className="lg:flex">
            <Card
                key={'SL-1'}
                mainLabel={"Sales"}
                dataLabel={"Total sales for the day"}
                totalDaySale={totalDaySale(productList)}
                bgColor={"color1"}
            />
            <Card
                key={'SL-2'}
                dataLabel={"Total sales for the month"}
                totalMonthSale={totalMonthSale(productList)}
                bgColor={"color3"}
            />
        </div>
        <div className="lg:flex multi-info-card color1">
            <Card
                key={3}
                dataLabel={"Top selling product"}
                name={topProduct.productName}
                aveQtySoldDaily={topProduct.aveQtySoldDaily}
            />
            <div className="multi-info-card color1">
            <p className="text-2xl">Slow Moving Products</p>
            <div className="lg:flex">
                {slowMovingProds.map((product) => 
                    //product.productName + ' ' + product.aveQtySoldDaily
                    <DataDetail
                        key={product.productId}
                        name={product.productName}
                        aveQtySoldDaily={product.aveQtySoldDaily}
                    />
                )}
            </div>
        </div>
        </div>
        <div className="multi-info-card color3">
            <p className="text-2xl">Sales per city</p>
            <div className="lg:flex">
                {cityWideSales.map((cityWideSale) => 
                    //product.productName + ' ' + product.aveQtySoldDaily
                    <DataDetail
                        key={cityWideSale.productId}
                        name={cityWideSale.cityName}
                        aveSalesPerDay={cityWideSale.aveSalesPerDay}
                    />
                )}
            </div>
        </div>
        
        <div className="multi-info-card color2 width-fc">
            <p className="text-2xl">Site visitors</p>
            <div className="lg:flex">
                <DataDetail
                    key={'SVD-1'}
                    customerType={'New Customers'}
                    customerCount={newCustomers.length}
                />
                <DataDetail
                    key={'SVD-2'}
                    customerType={'Existing Customers'}
                    customerCount={existingCustomers.length}
                />
            </div>
        </div>
    </div>
  )
}

export default Dashboard