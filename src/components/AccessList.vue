<template>
  <div class="access-list-container">
    <b-list-group class="access-list-group">
      <b-list-group-item variant="dark">{{ title }}</b-list-group-item>
      <user-info v-for="user in users" :user="user" :key="user.id" />
    </b-list-group>
  </div>
</template>

<script>
import UserInfo from "./UserInfo";
import { BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  name: "access-list",
  props: ["users", "title"],
  data() {
    return {};
  },
  components: {
    UserInfo,
    BListGroup,
    BListGroupItem
  }
};
</script>

<style>
.access-list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.access-list-group {
  width: 500px;
}
</style>
