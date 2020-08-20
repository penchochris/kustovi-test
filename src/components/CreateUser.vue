<template>
  <div class="create-user-container">
    <div class="create-user-icon-save-wrapper">
      <span class="create-user-icon-text">Save</span>
      <b-icon-check2-square class="h2 create-user-icon-save" />
    </div>
    <div class="create-user-wrapper">
      <img
        class="create-user-img"
        src="https://wow.zamimg.com/uploads/screenshots/small/449254.jpg"
      />
      <div class="create-user-form">
        <label for="input-name" id="label-name" class="create-user-label">
          Nombre
        </label>
        <b-form-input
          v-model="user.name"
          id="input-name"
          class="create-user-input"
        ></b-form-input>
        <label for="input-surname" id="label-surname" class="create-user-label">
          Apellido
        </label>
        <b-form-input
          v-model="user.surname"
          id="input-surname"
          class="create-user-input"
        ></b-form-input>
        <b-dropdown split :text="dropdownText" class="create-user-dropdown">
          <b-dropdown-item href="#" @click="onAccessDropDownSelection(true)">
            Si
          </b-dropdown-item>
          <b-dropdown-item href="#" @click="onAccessDropDownSelection(false)">
            No
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { BDropdown, BDropdownItem, BFormInput } from "bootstrap-vue";

export default {
  name: "create-user",
  components: {
    BDropdown,
    BDropdownItem,
    BFormInput
  },
  methods: {
    onAccessDropDownSelection(value) {
      this.user.access = value;
      this.dropdownText = value ? "Si" : "No";
    }
  },
  data() {
    return {
      user: {
        name: "",
        surname: "",
        access: false
      },
      dropdownText: "¿Acceso?"
    };
  }
};
</script>

<style>
.create-user-container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
}
.create-user-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}
.create-user-icon-save-wrapper {
  display: flex;
  justify-content: flex-end;
  margin: 5px;
}
.create-user-icon-save {
  cursor: pointer;
}
.create-user-icon-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.create-user-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.create-user-img {
  width: 40%;
  margin-right: 40px;
  border-radius: 10px 10px 10px 10px;
}
.create-user-label {
  align-self: flex-start;
}
.create-user-input {
  margin-bottom: 10px;
}
.create-user-dropdown {
  min-width: 130px;
}
</style>
