<template>
  <div class="user-info-container">
    <div class="user-info-icon-edit-wrapper">
      <span class="user-info-icon-text">Edit</span>
      <b-icon-pencil-square class="h4 user-info-icon-edit" @click="onEdit" />
    </div>
    <div class="user-info-wrapper">
      <img class="user-info-img" :src="user.img" />
      <div class="user-info-name-wrapper">
        <div class="user-info-name">{{ user.name }}</div>
        <div class="user-info-surname">{{ user.surname }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-info",
  props: ["user"],
  components: {},
  methods: {
    onEdit() {
      console.log("EDITANDO");
    }
  }
};
</script>

<style>
.user-info-container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0;
}
.user-info-wrapper {
  display: flex;
  align-items: center;
  padding: 0 30px 30px 30px;
}
.user-info-icon-edit-wrapper {
  display: flex;
  justify-content: flex-end;
  margin: 5px;
}
.user-info-name-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.user-info-icon-edit {
  cursor: pointer;
}
.user-info-icon-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.user-info-img {
  width: 34%;
  border-radius: 10px;
}
</style>
