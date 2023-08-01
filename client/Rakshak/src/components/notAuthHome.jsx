import React from "react";
import { Link } from "react-router-dom";
export default function NotAuthHome() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: 50,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <div
          style={{
            flex: 0.5,
          }}
        >
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Uniting Communities, Empowering Minds
          </h1>
          <div
            style={{
              marginTop: 25,
            }}
          >
            <p class="mb-3 text-gray-500 dark:text-gray-400">
              Rakshak is an innovative community forum website designed to
              create a safe and interactive platform for communities to connect,
              share ideas, and collaborate on various topics. Leveraging the
              power of Supabase, Rakshak aims to redefine the way people engage
              with one another while fostering a sense of security, trust, and
              knowledge exchange
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Rakshak is a cutting-edge community forum website, powered by
              Supabase, offering secure user authentication, real-time
              communication, and effective post moderation. It empowers diverse
              communities to connect, collaborate, and share knowledge, creating
              a safe and interactive platform for meaningful interactions.
            </p>
          </div>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
            }}
          >
            {" "}
            <button
              style={{
                width: 200,
              }}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Started
            </button>
            {/* <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Alternative
            </button> */}
            <button
              style={{
                width: 200,
              }}
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Know More
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 0.5,
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src="./assets/2a.png"
            class="h-8 mr-3"
          />
        </div>
      </div>
    </div>
  );
}
