<template>
  <b-form @submit.stop.prevent="onSubmit(user)" class="user-form-container">
    <div class="user-form-image-uploader">
      <img class="user-form-image-preview" :src="user.image" />
      <b-form-file
        class="user-form-file"
        @change="handleImage"
        accept="image/*"
      />
    </div>
    <div class="user-form-wrapper">
      <b-form-group
        id="input-group-name"
        label="Nombre:"
        label-for="input-name"
      >
        <b-form-input
          required
          v-model="user.name"
          id="input-name"
          class="create-user-input"
        />
      </b-form-group>
      <b-form-group
        id="input-group-surname"
        label="Apellidos:"
        label-for="input-surname"
      >
        <b-form-input
          required
          v-model="user.surname"
          id="input-surname"
          class="create-user-input"
        />
      </b-form-group>
      <b-form-group
        id="input-group-surname"
        label="Acceso:"
        label-for="select-access"
      >
        <b-form-select
          required
          id="select-access"
          v-model="user.access"
          class="mb-3"
          :options="options"
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Guardar</b-button>
    </div>
  </b-form>
</template>

<script>
import {
  BForm,
  BFormFile,
  //BFormInvalidFeedback,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BButton
} from "bootstrap-vue";

import { toBase64 } from "../helpers";

export default {
  name: "user-form",
  props: ["onSubmit", "editableUser"],
  mounted() {
    if (this.$props.editableUser) {
      this.user.id = this.$props.editableUser.id;
      Object.assign(this.user, this.$props.editableUser);
    }
  },
  destroyed() {
    this.$store.dispatch("setUser", {});
  },
  components: {
    BForm,
    //BFormInvalidFeedback,
    BFormFile,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BButton
  },
  methods: {
    async handleImage(e) {
      const file = e.target.files[0];
      const base64 = await toBase64(file);
      this.user.image = base64;
    }
  },
  data() {
    return {
      user: {
        id: "",
        image: null,
        name: null,
        surname: null,
        access: null
      },
      options: [
        { value: null, text: "Selecciona un tipo", disabled: true },
        { value: true, text: "Si" },
        { value: false, text: "No" }
      ]
    };
  }
};
</script>

<style>
.user-form-container {
  display: flex;
  padding-top: 10px;
}
.user-form-image-uploader {
  display: flex;
  flex-direction: column;
  max-width: 260px;
  margin-right: 20px;
}
.user-form-image-preview {
  height: 260px;
  width: 260px;
  object-fit: cover;
}
.user-form-file {
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
