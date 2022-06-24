import React from 'react'
import chatIcon from '../../asset/icon-chat.png'
import moneyIcon from '../../asset/icon-money.png'
import securityIcon from '../../asset/icon-security.png'
import '../../css/main.css';
import Header from '../../component/Header/Header';

import Footer from '../../component/Footer/Footer';
import Hero from '../../component/Hero/Hero';
import Features from '../../component/Features/Features';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Features 
            img={chatIcon}
            alt="chatIcon"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
           /> 
          <Features 
            img={moneyIcon}
            alt="moneyIcon"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
           /> 
          <Features 
            img={securityIcon}
            alt="securityIcon"
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money
            is always safe."
           /> 
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
