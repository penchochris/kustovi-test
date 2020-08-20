<template>
  <div id="app">
    <div class="create-user-container-app">
      <create-user />
    </div>
    <div class="access-list-container-app">
      <access-list title="Con acceso" :users="users.withAccess" />
      <access-list title="Sin acceso" :users="users.withoutAccess" />
    </div>
    <UserInfo />
  </div>
</template>

<script>
import CreateUser from "./components/CreateUser.vue";
import AccessList from "./components/AccessList.vue";

export default {
  name: "App",
  data() {
    return {
      users: {
        withAccess: [
          {
            name: "Sucherino",
            surname: "Wowframez Garcia",
            img: "https://wow.zamimg.com/uploads/screenshots/small/449254.jpg",
            id: "1"
          },
          {
            name: "Such",
            surname: "Wow",
            img: "https://wow.zamimg.com/uploads/screenshots/small/449254.jpg",
            id: "2"
          },
          {
            name: "Such",
            surname: "Wow",
            img: "https://wow.zamimg.com/uploads/screenshots/small/449254.jpg",
            id: "3"
          }
        ],
        withoutAccess: [
          {
            name: "Such",
            surname: "Wow",
            img: "https://wow.zamimg.com/uploads/screenshots/small/449254.jpg",
            id: "4"
          },
          {
            name: "Such",
            surname: "Wow",
            img: "https://wow.zamimg.com/uploads/screenshots/small/449254.jpg",
            id: "5"
          },
          {
            name: "Such",
            surname: "Wow",
            img: "https://wow.zamimg.com/uploads/screenshots/small/449254.jpg",
            id: "6"
          }
        ]
      }
    };
  },
  components: {
    CreateUser,
    AccessList
  }
};
</script>

<style>
.app {
  display: flex;
}
.create-user-container-app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 900px;
}
.access-list-container-app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 900px;
}
</style>
