"use client";

import Container from "../ui/Container";

export default function CheckoutClient() {
  return (
    <div className="bg-gray-50 p-4 md:p-10 font-sans text-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-medium mb-6">Billing Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">First name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last name</label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Company Name{" "}
                    <span className="text-gray-400 font-light">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm mb-1">Street Address</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Country / Region</label>
                  <select className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">States</label>
                  <select className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none">
                    <option>Selects</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <input type="checkbox" className="w-4 h-4 accent-green-600" />
                <label className="ml-2 text-sm text-gray-600">
                  Ship to a different address
                </label>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-medium mb-4">Additional Info</h2>
              <label className="block text-sm mb-1">
                Order Notes{" "}
                <span className="text-gray-400 font-light">(Optional)</span>
              </label>
              <textarea
                rows="4"
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 h-fit shadow-sm">
            <h2 className="text-xl font-medium mb-6">Order Summery</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                    🫑
                  </div>
                  <span className="text-sm">
                    Green Capsicum <span>x5</span>
                  </span>
                </div>
                <span className="font-medium text-sm">$70.00</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">$84.00</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Total:</span>
                <span className="font-bold">$84.00</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="font-medium text-xl mb-5">Payment Method</h3>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="payment"
                  checked
                  readOnly
                  className="w-4 h-4 accent-green-600"
                />
                Cash on Delivery
              </label>
            </div>

            <button className="w-full mt-5 bg-[#00B207] hover:bg-green-600 text-white font-semibold py-3 rounded-full transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
