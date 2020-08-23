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
        :label="$t('Name:')"
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
        :label="$t('Surname:')"
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
        :label="$t('Access:')"
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
      <b-button type="submit" variant="primary">{{ $t("Save") }}</b-button>
    </div>
  </b-form>
</template>

<script>
import {
  BForm,
  BFormFile,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BButton
} from "bootstrap-vue";

import { toBase64, isImage } from "../helpers";

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
    BFormFile,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BButton
  },
  methods: {
    async handleImage(e) {
      const file = e.target.files[0];
      if (isImage(file)) {
        const base64 = await toBase64(file);
        this.user.image = base64;
      } else {
        this.$bvToast.toast(this.$t("Only images can be uploaded."), {
          title: this.$t("Error"),
          autoHideDelay: 5000,
          variant: "danger"
        });
      }
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
        { value: null, text: this.$t("Select a type"), disabled: true },
        { value: true, text: this.$t("Yes") },
        { value: false, text: this.$t("No") }
      ]
    };
  }
};
</script>

<style>
.user-form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.user-form-wrapper {
  width: 270px;
  padding-top: 20px;
}
.user-form-image-uploader {
  display: flex;
  flex-direction: column;
  max-width: 260px;
  padding-top: 20px;
  margin-right: 13px;
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
