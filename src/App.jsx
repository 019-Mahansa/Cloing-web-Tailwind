import React from "react";

const App = () => {
  return (
    <>
      <nav className="bg-linear-to-r from-[#0e9be0] to-[#2ba1ac] flex justify-between h-20 items-center px-6 md:px-12">
        <img src="/Logo.svg" className="mr-4 w-24 md:w-auto" />

        <ul className="hidden md:flex gap-6 text-white items-center text-[1.1rem] font-medium font-sans">
          <li className="cursor-pointer">Produk</li>
          <li className="cursor-pointer">Program</li>
          <li className="cursor-pointer">Promo</li>
          <li className="cursor-pointer">Event</li>
          <li className="cursor-pointer">Beasiswa</li>
          <li className="cursor-pointer">Testimoni</li>
          <li className="cursor-pointer">Layanan</li>
          <li className="cursor-pointer">Ruangbaca</li>
        </ul>

        <button className="block lg:block font-semibold border-8 border-blue-300 rounded-3xl w-40 h-12 bg-white text-gray-800 ml-6 lg:text-[16px]">
          Beli Paket Belajar
        </button>
      </nav>

      <main className="bg-linear-to-r from-cyan-500 to-blue-500 p-4 md:p-6 h-auto pt-3 md:pt-3">
        <div className="upper flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-white font-semibold text-lg md:text-3xl w-full md:w-[40%] text-left">
            <h1 className="font-extrabold md:font-semibold mb-3">
              Bimbel Online & Offline Terbesar,
            </h1>
            <h1 className="font-extrabold md:font-semibold">
              Terlengkap, dan Terbukti di Indonesia
            </h1>

            <div className="mt-3 md:mt-2 justify-start">
              <h2 className="text-[16px] md:text-[18px]">
                Diskon spesial untukmu dengan isi nomor HP sekarang
              </h2>

              <div className="inp rounded-3xl bg-white h-16 w-90 md:w-[32rem] mt-4 text-black text-[15px] p-3 flex justify-between">
                <input
                  type="number"
                  placeholder="Contoh: +628x xxxx xxxx"
                  className="border-none w-full"
                />
                <button className="border rounded-3xl bg-orange-500 w-62 md:w-72 h-10 md:h-12 text-gray-100 font-semibold cursor-pointer">
                  Dapatkan Diskon &gt;
                </button>
              </div>
            </div>
          </div>

          <div className="Person w-60 md:w-auto">
            <img src="/Person.webp" alt="Person" className="w-full" />
          </div>
        </div>
      </main>

      <div className="bungkus flex justify-center w-full mt-[-3rem] md:mt-[-4rem]">
        <div className="choise bg-white w-full max-w-[78rem] rounded-3xl flex justify-center gap-3 p-3 flex-col">
          <p className="font-bold">Selamat kebutuhan ada di ruang guru</p>

          <div className="flex justify-center gap-3">
            <div className="md:border w-52 md:w-50 h-18 md:h-20 rounded-xl flex items-center border-gray-400 p-2 cursor-pointer gap-2 flex-col md:flex-row">
              <img
                src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/icon-utbk-persiapan.svg"
                className="w-10 md:w-12"
              />
              <p className="text-gray-800 font-semibold md:text-base text-[11px] text-center">
                Persiapan UTBK- SNBT
              </p>
            </div>

            <div className="md:border w-52 md:w-50 h-18 md:h-20 rounded-xl flex items-center border-gray-400 p-2 cursor-pointer gap-2 flex-col md:flex-row">
              <img
                src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Brain%20Academy%20Center.svg"
                className="w-10 md:w-12"
              />
              <p className="text-gray-800 font-semibold md:text-base text-[11px] text-center">
                Bimbel Tatap Muka
              </p>
            </div>

            <div className="md:border w-52 md:w-50 h-18 md:h-20 rounded-xl flex items-center border-gray-400 p-2 cursor-pointer gap-2 flex-col md:flex-row">
              <img
                src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Brain%20Academy.svg"
                className="w-10 md:w-12"
              />
              <p className="text-gray-800 font-semibold md:text-base text-[11px] text-center">
                Bimble Online Interaktif
              </p>
            </div>

            <div className="md:border w-52 md:w-50 h-18 md:h-20 rounded-xl items-center border-gray-400 md:p-2 p-5 cursor-pointer gap-2 hidden md:flex">
              <img
                src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Video%20Belajar.svg"
                className="w-10 md:w-12"
              />
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                Video Belajar dan Soal
              </p>
            </div>

            <div className="md:border w-52 md:w-50 h-18 md:h-20 rounded-xl items-center border-gray-400 md:p-3 p-4 cursor-pointer gap-2 hidden md:flex">
              <img
                src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20English%20Academy.svg"
                className="w-10 md:w-12"
              />
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                English Academy
              </p>
            </div>

            <div className="md:border w-48 md:w-40 h-18 md:h-20 rounded-xl flex items-center border-gray-400 p-2 cursor-pointer gap-2 flex-col md:flex-row">
              <img
                src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Semua%20Produk.svg"
                className="w-10 md:w-12"
              />
              <p className="text-gray-800 font-semibold md:text-base text-[11px] text-center">
                Semua Produk
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
