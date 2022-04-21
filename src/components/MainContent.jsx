import React from "react";
import { StyledMainContent, StyledArticle } from './styles/MainContent.styled'
import Card from './Card'
import productList from '../productList'
import topSellingProductFactory from "../factories/topSellingProduct";
import slowMovingProductsFactory from "../factories/slowMovingProducts";
import totalDaySale from '../functions/getTotalDaySale'
import totalMonthSale from '../functions/getTotalMonthSale'


function MainContent() {

    const topProdFactory = topSellingProductFactory(productList);
    const topProduct = topProdFactory.getTopSellingProduct();

    const slowMovingProdsFactory = slowMovingProductsFactory(productList);
    const slowMovingProds = slowMovingProdsFactory.getSlowMovingProducts();
    console.log(slowMovingProds);

    return (
        <StyledMainContent>
            <aside>
                Sidebar here..
            </aside>
            <StyledArticle>
                <Card
                    key={1}
                    dataLabel={"Top selling product"}
                    name={topProduct.productName}
                    aveQtySoldDaily={topProduct.aveQtySoldDaily}
                />
                <Card
                    key={2}
                    dataLabel={"Slow moving products"}
                    name={slowMovingProds.map((product) => 
                        product.productName + ', '
                    )}
                    aveQtySoldDaily={slowMovingProds.map((product) => 
                        product.aveQtySoldDaily + ', '
                    )}
                />
                <Card
                    key={3}
                    dataLabel={"Total sales for the day"}
                    totalDaySale={totalDaySale(productList)}
                />
                <Card
                    key={4}
                    dataLabel={"Total sales for the month"}
                    totalMonthSale={totalMonthSale(productList)}
                />
                <Card
                    key={5}
                    dataLabel={"Sales per city"}
                    name={"Test"}
                    aveQtySoldDaily={"Test"}
                />
            </StyledArticle>
        </StyledMainContent>
    )
}

export default MainContent;