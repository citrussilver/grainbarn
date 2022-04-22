import React from "react";
import { StyledMainContent, StyledArticle } from './styles/MainContent.styled'
import Sidebar from "./Sidebar";
import Card from './Card'
import DataDetail from './DataDetail'
import productList from '../productList'
import topSellingProductFactory from "../factories/topSellingProduct";
import slowMovingProductsFactory from "../factories/slowMovingProducts";
import totalDaySale from '../functions/getTotalDaySale'
import totalMonthSale from '../functions/getTotalMonthSale'
import cityWideSales from '../citySales'


function MainContent() {

    const topProdFactory = topSellingProductFactory(productList);
    const topProduct = topProdFactory.getTopSellingProduct();

    const slowMovingProdsFactory = slowMovingProductsFactory(productList);
    const slowMovingProds = slowMovingProdsFactory.getSlowMovingProducts();
    console.log(slowMovingProds);

    return (
        <StyledMainContent>
            <aside className="sidebar-menu">
                <Sidebar />
            </aside>
            <StyledArticle>
                <div className="lg:flex">
                    <Card
                        key={1}
                        mainLabel={"Sales"}
                        dataLabel={"Total sales for the day"}
                        totalDaySale={totalDaySale(productList)}
                        bgColor={"color1"}
                    />
                    <Card
                        key={2}
                        dataLabel={"Total sales for the month"}
                        totalMonthSale={totalMonthSale(productList)}
                        bgColor={"color3"}
                    />
                </div>
                <Card
                    key={3}
                    dataLabel={"Top selling product"}
                    name={topProduct.productName}
                    aveQtySoldDaily={topProduct.aveQtySoldDaily}
                />
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
            </StyledArticle>
        </StyledMainContent>
    )
}

export default MainContent;