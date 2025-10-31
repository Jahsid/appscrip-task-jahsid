'use client'
import { useEffect, useState } from "react";
import Head from "next/head";
import FilterCard from "@/components/cards/FilterCard";
import ProductCard from "@/components/cards/ProductCard";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch {
        setProducts([
          {
            id: 1,
            title: "Fallback Bag",
            price: 14.99,
            image: "/images/product-fallback-bag.jpg",
            category: "home",
          },
        ]);
      }
    }
    fetchProducts();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${p.id}`,
      name: p.title,
    })),
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  return (
    <>
      <Head>
        <title>Shop — Modern PLP | Tailwind Version</title>
        <meta
          name="description"
          content="Product Listing Page built with Next.js and Tailwind CSS — SEO-friendly and responsive."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="bg-white mt-4 px-4 sm:px-6 lg:px-8">
        <nav className="hidden md:flex justify-center border-b border-gray-300 py-4">
          <ul className="flex flex-wrap justify-center gap-6 text-gray-800 font-medium">
            {["SHOP", "SKILLS", "STORIES", "ABOUT US", "CONTACT US"].map(
              (item) => (
                <li key={item} className="hover:underline cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>

        <section className="text-center my-10">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-gray-900 mb-3">
            DISCOVER OUR PRODUCTS
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </section>

        <section
          aria-label="Product Filter and Sorting Toolbar"
          className="flex flex-wrap justify-between items-center border-t border-b border-gray-200 py-3 md:py-5 mb-6"
        >
          <div className="flex items-center gap-5 text-gray-800 text-sm font-medium">
            <p aria-label="Total number of products" className="hidden md:block m-0">
              {products.length} Items
            </p>

            {showFilters ? (
              <button
                type="button"
                onClick={() => setShowFilters(false)}
                aria-label="Hide product filters"
                className="flex items-center text-gray-500 hover:text-gray-700 transition"
              >
                <IoIosArrowBack className="mr-1" size={14} aria-hidden="true" />
                <span className="underline underline-offset-2">Hide Filter</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowFilters(true)}
                aria-label="Show product filters"
                className="flex items-center text-gray-500 hover:text-gray-700 transition"
              >
                <span className="text-black font-semibold">FILTER</span>
              </button>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={showDropdown}
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 text-gray-800 text-sm font-medium px-3 py-1.5 hover:bg-gray-50 rounded-md border border-transparent focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <span>{sortOption}</span>
              <IoIosArrowDown size={16} aria-hidden="true" />
            </button>

            {showDropdown && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
              >
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    role="option"
                    aria-selected={option === sortOption}
                    onClick={() => handleSortChange(option)}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${option === sortOption
                      ? "text-black font-semibold"
                      : "text-gray-700"
                      }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>


        <main className="flex flex-wrap md:flex-nowrap gap-6">
          {showFilters && (
            <aside className="hidden md:block w-full md:w-1/4 space-y-6">
              {[
                "IDEAL FOR",
                "WORK",
                "OCCASION",
                "FABRIC",
                "SEGMENT",
                "SUITABLE FOR",
                "RAW MATERIALS",
                "PATTERN",
              ].map((title) => (
                <FilterCard key={title} title={title} />
              ))}
            </aside>
          )}

          <section
            className={`w-full ${showFilters ? "md:w-3/4" : "md:w-full"
              } grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-5`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
