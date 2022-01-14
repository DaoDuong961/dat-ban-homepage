import React from 'react';
import Footer from '../../components/common/Footer/footer';
import Header from '../../components/Header';
import Banner from './Banner/banner';
import Products from './Products/products';
import Promotion from './Promotion/promotion';
import TrendProducts from './TrendProductions/trendProducts';
interface Props {}
const HomePage: React.FC = (props: Props) => {
  return (<div>
    <Header/>
    <Banner/>
    <Promotion/>
    <Products/>
    <TrendProducts/>
    <Footer/>
  </div>);
}
export default HomePage;