import { auth } from "@/js/firebase";
import { defineStore } from "pinia";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("authStore", () => {
  const registerUser = (credentials) => {
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error:", errorMessage);
        // ..
      });
    console.log("register action", credentials);
  };

  return {
    registerUser,
  };
});
