<template>
  <div class="access-list-container">
    <h1>{{ title }}</h1>
    <ul class="access-list-ul">
      <user-info v-for="user in users" :user="user" :key="user.id" />
    </ul>
  </div>
</template>

<script>
import UserInfo from "./UserInfo";

export default {
  name: "access-list",
  props: ["users", "title"],
  methods: {
    onEdit() {
      console.log("edit");
    }
  },
  data() {
    return {};
  },
  components: {
    UserInfo
  }
};
</script>

<style>
.access-list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.access-list-ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
}
</style>
