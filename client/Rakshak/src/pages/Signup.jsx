import React, { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../supacongif";
export default function SignUp() {
  useEffect(() => {
    getuserData();
  }, []);

  async function getuserData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    alert(user);
  }
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const handleSignUp = async () => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: cred.email,
      password: cred.pass,
    });
    console.log(data + error);
  };

  return (
    <div>
      <section
        style={{
          backgroundColor: "white",
        }}
        class="bg-gray-50 dark:bg-gray-900"
      >
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
              Uniting Communities, Empowering Minds
            </h1>
            <p
              style={{
                marginTop: 25,
              }}
              class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            >
              Rakshak is an innovative community forum website designed to
              create a safe and interactive platform for communities to connect,
              share ideas, and collaborate on various topics. Leveraging the
              power of Supabase, Rakshak aims to redefine the way people engage
              with one another while fostering a sense of security, trust, and
              knowledge exchange
            </p>
          </div>
          <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                SinUp to Rakshak
              </h2>
              <form
                class="mt-8 space-y-6"
                onSubmit={async () => await handleSignUp()}
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => {
                      setCred({ ...cred, email: e.target.value });
                    }}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Create new Password{" "}
                  </label>
                  <input
                    onChange={(e) => {
                      setCred({ ...cred, pass: e.target.value });
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create your account
                </button>
                <div class="text-sm font-medium text-gray-900 dark:text-white">
                  Already Registered?{" "}
                  <a class="text-blue-600 hover:underline dark:text-blue-500">
                    Login{" "}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
