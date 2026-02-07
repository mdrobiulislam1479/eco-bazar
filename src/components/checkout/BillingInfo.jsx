const BillingInfo = ({ billing, setBilling }) => {
  const onChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-medium mb-6">Billing Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">First name</label>
            <input
              name="firstName"
              value={billing.firstName}
              onChange={onChange}
              type="text"
              placeholder="Your first name"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Last name</label>
            <input
              name="lastName"
              value={billing.lastName}
              onChange={onChange}
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
              name="company"
              value={billing.company}
              onChange={onChange}
              type="text"
              placeholder="Company name"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-sm mb-1">Street Address</label>
            <input
              name="address"
              value={billing.address}
              onChange={onChange}
              type="text"
              placeholder="Your Address"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Country / Region</label>
            <input
              name="country"
              value={billing.country}
              onChange={onChange}
              placeholder="Bangladesh"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">States</label>
            <input
              name="state"
              value={billing.state}
              onChange={onChange}
              placeholder="Khulna"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Zip Code</label>
            <input
              name="zip"
              value={billing.zip}
              onChange={onChange}
              type="text"
              placeholder="Zip Code"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              value={billing.email}
              onChange={onChange}
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              name="phone"
              value={billing.phone}
              onChange={onChange}
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
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
          name="notes"
          value={billing.notes}
          onChange={onChange}
          rows="4"
          placeholder="Notes about your order..."
          className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>
    </>
  );
};

export default BillingInfo;
