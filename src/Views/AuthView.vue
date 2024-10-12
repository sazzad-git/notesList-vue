<template>
  <div>
    <!-- Login Register nav -->
    <div class="tabs is-centered">
      <ul>
        <li
          :class="{ 'is-active': !register }"
          @click.prevent="register = false"
        >
          <a>Login</a>
        </li>
        <li :class="{ 'is-active': register }">
          <a @click.prevent="register = true">Registration</a>
        </li>
      </ul>
    </div>

    <!-- card form -->
    <form @submit.prevent="onSubmit">
      <div class="card auth-form">
        <div class="card-content">
          <div class="title has-text-centered">{{ formTitle }}</div>
          <div class="content">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Email Address"
                  v-model="credentials.email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="Enter Password"
                  v-model="credentials.password"
                />
              </div>
            </div>
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-primary">{{ formTitle }}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
import { computed, reactive, ref } from "vue";

const register = ref(false);

const authStore = useAuthStore();

const credentials = reactive({
  email: "",
  password: "",
});

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("Please enter email and password");
    return;
  }
  if (register.value) {
    authStore.registerUser(credentials);
  } else {
    console.log(credentials);
    console.log("login click");
  }
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
