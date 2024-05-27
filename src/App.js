import contact from "../src/contact.jpg";

export default function App() {
  return (
    <>
      <div className="relative">
        <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-[#0B2B3C] p-5 md:p-8 mx-6 md:mx-3">
            <p className="text-3xl font-bold md:mb-6">Checkout</p>
            <div className="flex gap-2">
              <a href="/Home" className="text-lg">
                Home
              </a>
              <h1 className="text-bold text-2xl">&#xBB;</h1>
              <a href="/About Us" className="text-lg">
                Checkout
              </a>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img
            src={contact}
            alt="contactus"
            className="w-full md:h-auto h-[20vh]"
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row mt-20">
        <div className="md:w-2/3 w-full shadow-lg p-6">
          <p className="text-2xl font-bold pb-4 border-b border-gray-200 text-[#0B2B3C]">
            Billing Details
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="w-full md:w-1/2">
              <label htmlFor="first-name" className="block mb-2">
                First Name*
              </label>
              <input
                type="text"
                id="first-name"
                className="border border-gray-200 pl-4 p-4 block w-full text-black text-sm"
                placeholder=""
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="last-name" className="block mb-2">
                Last Name*
              </label>
              <input
                type="text"
                id="last-name"
                className="border border-gray-200 pl-4 p-4 block w-full text-black text-sm"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="company-name" className="block mb-2">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company-name"
              className="border border-gray-200 pl-4 p-4 block w-full text-black text-sm"
              placeholder=""
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-200 pl-4 p-4 block w-full text-black text-sm"
              placeholder=""
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="phone" className="block mb-2">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-gray-200 pl-4 p-4 block w-full text-black text-sm"
              placeholder=""
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="country" className="block mb-2">
              Country*
            </label>
            <select
              id="country"
              className="border border-gray-200 pl-4 p-4 block w-full text-black text-sm"
              required
            >
              <option value="US">United Kingdom</option>
              <option value="IN">India</option>
              <option value="LD">Landon</option>
              <option value="JP">Japan</option>
              <option value="BD">Bangladesh</option>
              <option value="CA">Canada</option>
              <option value="AF">Afganistan</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="zip" className="block mb-2">
              ZIP*
            </label>
            <input
              type="text"
              id="zip"
              className="border pl-4 p-4 block w-full text-black text-sm"
              placeholder=""
              required
            />
          </div>
          <div className="flex py-2 border-b border-gray-200">
            <input
              type="checkbox"
              id="direct-bank-transfer"
              name="payment-method"
            />{" "}
            <label for="direct-bank-transfer" className="pl-2">
              Ship to a different address?
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block mb-2">
              Order notes (Optional)
            </label>
            <textarea
              id="message"
              className="border border-gray-200 pl-4 p-4 block w-full text-black text-sm"
              placeholder=""
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="md:w-1/3 w-full shadow p-6 mt-8 md:mt-0">
          <p className="text-2xl font-bold pb-2 text-[#0B2B3C] border-b border-gray-200">
            Checkout Summary
          </p>
          <div className="container mx-auto">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center border-b pt-10 border-gray-200">
                <span className="text-gray-700 font-medium">Subtotal</span>
                <span className="text-gray-600 font-medium">$530.00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200">
                <span className="text-gray-700 font-medium">Shipping</span>
                <span className="text-gray-600 font-medium">$530.00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200">
                <span className="text-gray-700 font-medium">Coupon</span>
                <span className="text-gray-600 font-medium">$0.00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200">
                <span className="text-gray-700 font-medium">Total</span>
                <span className="text-gray-600 font-medium">$530.00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200">
                <span className="text-gray-700 font-bold">Payable Total</span>
                <span className="text-gray-700 font-bold">$530.00</span>
              </div>
            </div>
          </div>
          <div className="w-full shadow pt-10">
            <p className="text-2xl font-bold pb-8 text-[#0B2B3C] border-b border-gray-200">
              Payment Method
            </p>
            <div className="container mx-auto">
              <div className="flex flex-col gap-8 p-4">
                <div className="flex ">
                  <input
                    type="checkbox"
                    id="direct-bank-transfer"
                    name="payment-method"
                    value="Direct bank transfer"
                  />{" "}
                  <label for="direct-bank-transfer" className="pl-2">
                    Direct bank transfer
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="direct-bank-transfer"
                    name="payment-method"
                    value="Direct bank transfer"
                  />{" "}
                  <label for="Cash on delivery" className="pl-2">
                    Cash on delivery
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="direct-bank-transfer"
                    name="payment-method"
                    value="Direct bank transfer"
                  />{" "}
                  <label for="Check payments" className="pl-2">
                    Check payments
                  </label>
                </div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    id="direct-bank-transfer"
                    name="payment-method"
                    value="PayPal"
                  />{" "}
                  <label for="direct-bank-transfer " className="pl-2">
                    PayPal
                  </label>
                </div>
                <div className="flex">
                  <button className="bg-indigo-700 text-white font-bold py-2 px-4">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// Error404 page/use the below code 

{
  /* <div className="bg-blue-50">
<div className="flex justify-center mb-8 bg-blue-50">
  <img src={err404} alt="404 Error" className="w-full md:w-1/2" />
</div>
<p className="text-4xl font-bold text-center text-[#0B2B3C]">
  Oops! Page Not Found.
</p>
<p className="text-xl md:text-xl text-center mt-4 text-[#0B2B3C]">
  The page you are looking for is not available or doesn’t belong to
  this website!
</p>
<div className="flex justify-center mt-6 mb-8">
  <button className="bg-indigo-700 text-white font-bold py-2 px-4 flex items-center">
    &#xBB; GO TO HOME
  </button>
</div>
</div> */
}
