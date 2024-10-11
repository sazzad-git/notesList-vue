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
    <form>
      <div class="card auth-form">
        <div class="card-content">
          <div class="title has-text-centered">Login</div>
          <div class="content">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Email Address" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-primary">Submit</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const register = ref(false);
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
