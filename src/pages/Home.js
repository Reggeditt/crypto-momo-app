import AboutUs from "./About";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="banner">
        <h1>The Best Cryptocurrency Wallet for Africans</h1>
        <p>Welcome to CryptoMomo Africa, the ultimate digital wallet created for Africans. Whether you're an experienced investor or new to cryptocurrencies, our platform offers a simple, safe, and accessible way to manage your digital assets.</p>
      </div>
      <div className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Self-custody wallet</li>
          <li>USSD technology for accessibility</li>
          <li>Easy deposit and withdrawal</li>
          <li>24/7 customer support</li>
          <li>Secure and fast transactions</li>
          <li>Low transaction fees</li>
        </ul>
      </div>
      <AboutUs />
      <button>Join the CryptoMomo Africa community today and download our app to start managing your digital assets!</button>
    </section>
  );
  // return (
  //   <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  //     <h1 className="text-4xl font-bold mb-4">CryptoMomo Africa</h1>
  //     <p className="max-w-md text-center mb-8">
  //       Hello and welcome to CryptoMomo Africa, the best cryptocurrency wallet
  //       created especially for fascinating Africans! Our wallet offers a fun and
  //       simple experience for managing your digital assets, regardless of
  //       whether you are an experienced investor or a beginner to
  //       cryptocurrencies.
  //     </p>
  //     <h2 className="text-2xl font-bold mb-4">Benefits of using CryptoMomo Africa</h2>
  //     <ul className="max-w-md mb-8">
  //       <li>
  //         Because we are aware that there may be issues with internet connectivity
  //         in some regions of Africa, we have made our platform accessible through
  //         USSD technology. Any form of device can be used to handle your cryptocurrency.
  //       </li>
  //       <li>
  //         We at CryptoMomo Africa believe in giving you the tools you need to manage
  //         your digital assets. We provide a digital currency wallet with self-custody
  //         so you may manage your money for this reason. Your personal credentials
  //         are entirely under your control when using a self-custody wallet, so your
  //         money is kept safe and out of the reach of unauthorized parties.
  //       </li>
  //     </ul>
  //     <a
  //       href="https://cryptomomo.com/app-download"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       className="btn"
  //     >
  //       Download our app
  //     </a>
  //   </div>
  // );
};

export default Home;
