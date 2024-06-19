import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col justify-center">
        <section className="flex justify-center">
          <div className="card w-full bg-base-100 shadow-xl mx-10 mb-5 bg-cream-200">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Alice & Bob</h2>
              <p>
                Welcome to our registry! Instead of a wedding list we have a
                crypto fund to make our home cozier. We truly appreciate any
                contributions you'd like to make. If you prefer to bring a
                monetary gift in person, we'll have a box at our wedding.
                <strong>Thank you for being part of our special journey!</strong>
              </p>
              <h3 className="mt-4">Mint an NFT and Donate:</h3>
              <p>When you click the button, you can enter an amount and mint an NFT.</p>
              <p>
                An NFT (Non-Fungible Token) is a unique digital asset stored on the
                blockchain. By minting an NFT as a gift, you're not only giving us a
                memorable digital token but also leaving a personal message on the
                blockchain forever! It's very easy and a modern way to celebrate our
                special day.
              </p>
              <figure className="p-5 w-48">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-actions mt-4">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
