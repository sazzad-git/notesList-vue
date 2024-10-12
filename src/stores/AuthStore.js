import { auth } from "@/js/firebase";
import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNotesStore } from "./NotesStore";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref({});
  const router = useRouter();

  // noteStore
  const noteStore = useNotesStore();

  const init = (credentials) => {
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = userDetails.uid;
        user.value = { email: userDetails.email, uid };
        router.push({ name: "notes" });
        noteStore.getNotes();
        // console.log("user is login uid:", uid);
        // ...
      } else {
        // console.log("User is signed out");
        user.value = {};
        router.replace({ name: "auth" });
        // User is signed out
        // ...
      }
    });
  };

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

  const loginUser = (credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error:", errorMessage);
      });
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("signOut Confirm");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("error:", error.message);
        // An error happened.
      });
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
    init,
    user,
  };
});
