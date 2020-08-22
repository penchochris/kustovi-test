<template>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar :src="user.image"></b-avatar>
    <span class="mr-auto user-info-name">
      {{ user.name }} {{ user.surname }}
    </span>
    <b-icon-pencil-square
      class="h4 user-info-icon"
      @click="openModalEdit(true)"
    />
    <b-icon-x-square class="h4 user-info-icon" @click="openModalDelete(true)" />
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
    openModalEdit() {
      this.$bvModal.show("edit-modal");
      this.$store.dispatch("setUser", this.$props.user);
    },
    openModalDelete() {
      this.$bvModal.show("delete-modal");
      this.$store.dispatch("setUser", this.$props.user);
    }
  }
};
</script>

<style>
.user-info-name {
  padding-left: 10px;
}
.user-info-icon {
  margin-right: 7px;
}
</style>
