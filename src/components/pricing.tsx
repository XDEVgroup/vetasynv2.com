import Link from "next/link";

function pricing() {
  return (
    <div id="pricing" className="container-purple container-center container">
      <h2 className="mt-6 text-5xl font-bold text-center ">
        Sign Up now,
        <br />
        <span className="text-2xl font-normal">and become a whale today.</span>
      </h2>
      <div className="mt-6 space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-4">
        <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-600 bg-gray-800  p-6 text-center text-white shadow transition  hover:bg-gray-700 xl:p-8">
          <h3 className="mb-4 text-2xl font-semibold">Normal</h3>
          <p className="font-light text-gray-400 sm:text-lg">
            Get normal acces to our courses and forum.
          </p>
          <div className="my-8 flex items-baseline justify-center">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="text-gray-400">/month</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Acces to all our courses</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0text-green-400 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Exclusive status icon</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Legend support: <span className="font-semibold">1 on 1</span>
              </span>
            </li>
          </ul>
          <Link
            href="/payment?id=price_1O2BnGJ0Tu9paWkWF45pLKC4"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-gray-300 hover:text-black focus:ring-4"
          >
            Get started
          </Link>
        </div>

        <div className="mx-auto flex max-w-lg flex-col rounded-lg border  border-gray-600 bg-gray-800 p-6 text-center text-white shadow transition hover:bg-gray-700 xl:p-8">
          <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
          <p className="font-light text-gray-400 sm:text-lg">
            Get premium acces to our courses and forum.
          </p>
          <div className="my-8 flex items-baseline justify-center">
            <span className="mr-2 text-5xl font-extrabold">$39</span>
            <span className="text-gray-400">/month</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Acces to all our courses</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Exclusive premium status icon</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Legend support: <span className="font-semibold">1 on 1</span>
              </span>
            </li>
          </ul>
          <Link
            href="/payment?id=price_1O2Bo6J0Tu9paWkWpeXt2hMP"
            className="bg-primary-600 focus:ring-primary-200 focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-gray-300 hover:text-black  focus:ring-4"
          >
            Get started
          </Link>
        </div>

        <div className="mx-auto flex max-w-lg flex-col rounded-lg border  border-gray-600 bg-gray-800 p-6 text-center text-white shadow transition hover:bg-gray-700 xl:p-8">
          <h3 className="mb-4 text-2xl font-semibold">Legend</h3>
          <p className="font-light text-gray-400 sm:text-lg">
            Get legend acces to our courses and forum.
          </p>
          <div className="my-8 flex items-baseline justify-center">
            <span className="mr-2 text-5xl font-extrabold">$149</span>
            <span className="text-gray-400">/month</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Acces to all our courses</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0text-green-400 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Exclusive legend status icon</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Legend support: <span className="font-semibold">1 on 1</span>
              </span>
            </li>
          </ul>
          <Link
            href="/payment?id=price_1O2Ml8J0Tu9paWkWxLrkwLp4"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium  text-white transition hover:bg-gray-300 hover:text-black  focus:ring-4"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
export default pricing;
