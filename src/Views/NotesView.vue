<template>
  <div class="has-background-danger-dark my-4 p-4">
    <div class="field">
      <label class="label">Note</label>
      <div class="control">
        <textarea class="textarea" placeholder="Add New Note"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button class="button is-link is-danger">Add New Note</button>
      </div>
    </div>
  </div>

  <div class="card mb-4" v-for="i in 5">
    <div class="card-content">
      <div class="content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam vero
        reprehenderit, quasi obcaecati assumenda id veniam provident sequi
        aperiam laborum.
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
