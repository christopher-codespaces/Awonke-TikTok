

const SignUp = () =>{
  return (
      <div class=" min-h-screen flex flex-col">
  <div class="container  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-gray-300 px-6 py-8 rounded shadow-md text-black w-full">
      <h1 class="mb-8 text-3xl text-center font-bold">Sign up</h1>
      <input 
        type="text"
        class="block border border-gray-300 w-full p-3 rounded mb-4"
        name="fullname"
        placeholder="Full Name" />

      <input 
        type="text"
        class="block border border-gray-300 w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email" />

      <input 
        type="password"
        class="block border border-gray-300 w-full p-3 rounded mb-4"
        name="password"
        placeholder="Password" />

      <input 
        type="password"
        class="block border border-gray-300 w-full p-3 rounded mb-4"
        name="confirm_password"
        placeholder="Confirm Password" />

      <button
        type="submit"
        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
      >Create Account</button>

      <div class="text-center text-sm text-gray-600 mt-4">
        By signing up, you agree to the 
        <a class="no-underline border-b border-gray-600 text-gray-600" href="#">
          Terms of Service
        </a> and 
        <a class="no-underline border-b border-gray-600 text-gray-600" href="#">
          Privacy Policy
        </a>
      </div>

    </div>

    <div class="text-gray-600 mt-6">
      Already have an account? 
      <a class="no-underline border-b border-blue-500 text-blue-500" href="../login/">
        Log in
      </a>.
    </div>

  </div>
</div>

  )
} 

export default SignUp;