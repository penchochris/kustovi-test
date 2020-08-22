<template>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar :src="user.image"></b-avatar>
    <span class="mr-auto user-info-name">
      {{ user.name }} {{ user.surname }}
    </span>
    <b-icon-pencil-square
      class="h4 user-info-icon-edit"
      @click="openModal(true)"
    />
  </b-list-group-item>
</template>

<script>
import { BAvatar, BListGroupItem } from "bootstrap-vue";

export default {
  name: "user-info",
  props: ["user"],
  data() {
    return {
      modal: "user-info-modal-close"
    };
  },
  components: {
    BAvatar,
    BListGroupItem
  },
  methods: {
    openModal() {
      this.$bvModal.show("edit-modal");
      this.$store.dispatch("setUser", this.$props.user);
    }
  }
};
</script>

<style>
.user-info-name {
  padding-left: 10px;
}
</style>
