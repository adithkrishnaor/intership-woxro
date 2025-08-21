import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14 128GB",
      color: "White",
      model: "128 GB",
      price: 899.0,
      quantity: 1,
      image: "/api/placeholder/80/80",
      total: 899.0,
    },
    {
      id: 2,
      name: "Tablet Apple iPad Pro M2",
      color: "Silver",
      model: "256 GB",
      price: 989.0,
      originalPrice: 1299.0,
      quantity: 1,
      image: "/api/placeholder/80/80",
      total: 989.0,
      isDiscounted: true,
    },
    {
      id: 3,
      name: "Smart Watch Series 7",
      color: "White",
      model: "44 mm",
      price: 429.0,
      quantity: 2,
      image: "/api/placeholder/80/80",
      total: 858.0,
    },
  ]);

  const [trendingProducts] = useState([
    {
      id: 1,
      name: "VRB01 Virtual Reality Glasses",
      price: 340.99,
      originalPrice: 430.0,
      rating: 4,
      image: "/api/placeholder/200/200",
      badge: "SALE",
      badgeColor: "bg-red-500",
    },
    {
      id: 2,
      name: "Apple iPhone 14 128GB Blue",
      price: 899.0,
      rating: 5,
      image: "/api/placeholder/200/200",
      wishlist: true,
      compare: true,
    },
    {
      id: 3,
      name: "Sony DualSense Edge Controller",
      price: 200.0,
      rating: 4,
      image: "/api/placeholder/200/200",
    },
    {
      id: 4,
      name: "Apple MacBook Pro 13 M2",
      price: 1200.0,
      rating: 4,
      image: "/api/placeholder/200/200",
      badge: "NEW",
      badgeColor: "bg-blue-500",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const savings = -310.0;
  const tax = 73.4;
  const estimatedTotal = subtotal + savings + tax;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-[#181D25] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-[#333D4C] dark:text-[#E0E5EB] mb-6">
            <span>Home</span>
            <span>{">"}</span>
            <span>Shop</span>
            <span>{">"}</span>
            <span>Cart</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="p-6">
                <h1 className="text-2xl font-bold text-[#181D25] dark:text-white mb-2">
                  Shopping cart
                </h1>

                {/* Free Shipping Progress */}
                <div className="mb-6">
                  <p className="text-sm text-[#4E5562] dark:text-[#CAD0D9] mb-2">
                    Buy{" "}
                    <span className="font-semibold dark:text-white text-[#181D25]">
                      $183
                    </span>{" "}
                    more to get{" "}
                    <span className="font-semibold dark:text-white text-[#181D25]">
                      Free Shipping
                    </span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                {/* Cart Items Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-[#E0E5EB] dark:border-[#333D4C]">
                      <tr className="text-sm text-[#4E5562] dark:text-[#CAD0D9]">
                        <th className="text-left py-3">Product</th>
                        <th className="text-left py-3">Price</th>
                        <th className="text-left py-3">Quantity</th>
                        <th className="text-left py-3">Total</th>
                        <th className="text-left py-3">Clear cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-[#E0E5EB] dark:border-[#333D4C]"
                        >
                          <td className="py-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                              </div>
                              <div>
                                <h3 className="text-md text-[#181D25] dark:text-white">
                                  {item.name}
                                </h3>
                                <p className="text-xs text-[#181D25] dark:text-white">
                                  <span className="text-[#6C727F] dark:text-[#9CA3AF]">
                                    Color:
                                  </span>
                                  {item.color}
                                </p>
                                <p className="text-xs text-[#181D25] dark:text-white">
                                  <span className="text-[#6C727F] dark:text-[#9CA3AF]">
                                    Model:
                                  </span>
                                  {item.model}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <div>
                              <span className="font-semibold text-[#181D25] dark:text-white">
                                ${item.price.toFixed(2)}
                              </span>
                              {item.originalPrice && (
                                <span className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] line-through ml-2">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-2 relative">
                              <svg
                                width="96"
                                height="32"
                                viewBox="0 0 96 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                              >
                                <g clipPath="url(#clip0_685_4269)">
                                  {/* Clickable area for minus */}
                                  <rect
                                    x="0"
                                    y="0"
                                    width="32"
                                    height="32"
                                    fill="transparent"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                    className="cursor-pointer hover:fill-[#EEF1F6] dark:hover:fill-[#333D4C] transition-colors"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.4062 16C11.4062 15.7181 11.6348 15.4896 11.9167 15.4896H20.0833C20.3652 15.4896 20.5938 15.7181 20.5938 16C20.5938 16.2819 20.3652 16.5105 20.0833 16.5105H11.9167C11.6348 16.5105 11.4062 16.2819 11.4062 16Z"
                                    fill="#9CA3AF"
                                    className="dark:fill-[#6C727F]"
                                  />
                                  <text
                                    x="48"
                                    y="20"
                                    textAnchor="middle"
                                    fill="#333D4C"
                                    fontSize="12"
                                    fontFamily="Inter"
                                    className="dark:fill-[#E0E5EB]"
                                  >
                                    {item.quantity}
                                  </text>
                                  {/* Clickable area for plus */}
                                  <rect
                                    x="64"
                                    y="0"
                                    width="32"
                                    height="32"
                                    fill="transparent"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    className="cursor-pointer hover:fill-[#EEF1F6] dark:hover:fill-[#333D4C] transition-colors"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M80 11.4062C80.2819 11.4062 80.5104 11.6348 80.5104 11.9167V20.0833C80.5104 20.3652 80.2819 20.5938 80 20.5938C79.7181 20.5938 79.4896 20.3652 79.4896 20.0833V11.9167C79.4896 11.6348 79.7181 11.4062 80 11.4062Z"
                                    fill="#333D4C"
                                    className="dark:fill-[#E0E5EB]"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M75.4062 16C75.4062 15.7181 75.6348 15.4896 75.9167 15.4896H84.0833C84.3652 15.4896 84.5938 15.7181 84.5938 16C84.5938 16.2819 84.3652 16.5104 84.0833 16.5104H75.9167C75.6348 16.5104 75.4062 16.2819 75.4062 16Z"
                                    fill="#333D4C"
                                    className="dark:fill-[#E0E5EB]"
                                  />
                                </g>
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="95"
                                  height="31"
                                  rx="5.5"
                                  stroke="#CAD0D9"
                                  className="hover:stroke-[#4E5562]"
                                />
                                <defs>
                                  <clipPath id="clip0_685_4269">
                                    <rect
                                      width="96"
                                      height="32"
                                      rx="6"
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="font-semibold">
                              ${item.total.toFixed(2)}
                            </span>
                          </td>
                          <td className="py-4">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <span className="text-lg">×</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Continue Shopping */}
                <button className="flex items-center space-x-2 text-[#222934] dark:text-[#EEF1F6] mt-6">
                  <span>←</span>
                  <span>Continue shopping</span>
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-lg shadow-sm p-6 pb-3 sticky top-4 bg-[#F5F7FA] dark:bg-[#222934]">
                <h2 className="text-lg font-semibold text-[#181D25] dark:text-white mb-4">
                  Order summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#4E5562] dark:text-[#CAD0D9]">
                      Subtotal
                    </span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4E5562] dark:text-[#CAD0D9]">
                      Savings
                    </span>
                    <span className="font-semibold text-red-500">
                      ${savings.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4E5562] dark:text-[#CAD0D9]">
                      Tax collected
                    </span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4E5562] dark:text-[#CAD0D9]">
                      Shipping
                    </span>
                    <span className="text-[#181D25] dark:text-white">
                      Calculated at checkout
                    </span>
                  </div>
                  <hr className="border-t border-[#E0E5EB] dark:border-[#333D4C]" />
                  <div className="flex justify-between text-lg font-bold text-[#4E5562] dark:text-[#CAD0D9]">
                    <span>Estimated total</span>
                    <span className="text-[#181D25] dark:text-white">
                      ${estimatedTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors mb-3">
                  Proceed to Checkout
                </button>

                <p className="text-xs text-[#4E5562] dark:text-[#CAD0D9] text-center mb-4">
                  <span className="underline">Create an account</span> and get{" "}
                  <span className="font-semibold text-[#181D25] dark:text-white">
                    239 bonuses
                  </span>
                </p>
              </div>
              {/* Promo Code */}
              <div className="rounded-lg shadow-sm p-6 sticky mt-4 bg-[#F5F7FA] dark:bg-[#222934]">
                <button className="flex items-center justify-between w-full text-left">
                  <span className="flex items-center space-x-2">
                    <span className="text-[#181D25] dark:text-white font-semibold">
                      %
                    </span>
                    <span className="text-[#181D25] dark:text-white font-semibold">
                      Apply promo code
                    </span>
                  </span>
                  <span className="text-[#181D25] dark:text-white font-semibold text-xl">
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Trending Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Trending products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden group"
                >
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg"></div>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white rounded ${product.badgeColor}`}
                      >
                        {product.badge}
                      </span>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {product.wishlist && (
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                          <span className="text-red-500">♥</span>
                        </button>
                      )}
                      {product.compare && (
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                          <span className="text-gray-600">⟲</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                      {renderStars(product.rating)}
                    </div>

                    {/* Product Name */}
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full mt-3 bg-gray-100 hover:bg-blue-500 hover:text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <span>🛒</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ShoppingCart;
