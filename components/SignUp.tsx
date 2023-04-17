

const SignUp = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="container  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-gray-300 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-bold">Login</h1>

          <input
            type="text"
            className="block border border-gray-300 w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" />

          <input
            type="password"
            className="block border border-gray-300 max-h-20	 w-full p-3                 rounded mb-4"
            name="password"
            placeholder="Password" />


          <button
            type="submit"
            className="w-full text-center py-3 rounded   focus:outline-none my-1 text-white	bg-black"
          > Login   </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            Do not have an account?
            <span className="no-underline   text-gray-   font-bold   " >
              Create account
            </span>

          </div>

        </div>


      </div>
    </div>

  )
}

export default SignUp;