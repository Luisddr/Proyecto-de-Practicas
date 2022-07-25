import React from 'react';
import CardsContainer from '../../components/CardContainer';
import { Helmet } from 'react-helmet';


function Home() {
    return ( 
       <>
       <Helmet>
        <title>Clothing Store | Home</title>
       </Helmet>
       <CardsContainer/>
       </>
     );
}

export default Home;