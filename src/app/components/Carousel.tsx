import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:h-full flex flex-col ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://static-01.daraz.pk/p/df71590655e5cc147b7bc8376225c83f.jpg"
                  alt="clothes"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105  transition-transform duration-500 ease-in-out "
                />

                <div className="absolute inset-0 bg-gradient-to-b from-gray-500  "></div>

                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 ">
                  Discover New Daily{" "}
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-8 pb-10 pt-40 mb-4"
              >
                <img
                  src="https://m.media-amazon.com/images/I/51DJvWF7TqL._AC_SY1000_.jpg"
                  alt="bags"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105  transition-transform duration-500 ease-in-out "
                />

                <div className="absolute inset-0 bg-gradient-to-b from-gray-500  "></div>

                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 ">
                  Elevate Your Style{" "}
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://cdn.walkabouttours.com/uploads/blog/2020/02/Where_to_Buy_Shoes_in_Florence_Italy.jpg"
                    alt="makeup"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-gray-500">
                    {" "}
                  </div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                    Get Yours Today
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://miro.medium.com/v2/resize:fit:800/1*1L2E2jLSBRfMZEWhrpEsKQ.jpeg"
                    alt="makeup"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-gray-500">
                    {" "}
                  </div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                  Paint Your Beauty
                  </h3>
                </a>
              </div>
            </div>

<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto md:h-full flex-col ">
  <a href=""
  className="group relative flex flex-col overflow-hidden rounded-lg px-0 py- pb-60 pt-40 flex-grow "
  >
    <img src="https://bridalcollection.pk/wp-content/uploads/2022/11/g-4-360x480.jpg" alt="jwellery"
    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
     <div className="absolute inset-0 bg-gradient-to-b from-gray-500">
                    {" "}
                  </div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0">
                   jewels that Captivate
                  </h3>
    
  </a>


</div>




          </div>
        </div>
      </section>
    </div>
  );
}
