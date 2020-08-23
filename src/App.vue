<template>
  <div id="app">
    <b-toast />
    <b-modal
      id="edit-modal"
      hide-footer
      :title="$t('Edit user')"
      header-bg-variant="primary"
      header-text-variant="light"
    >
      <user-form :onSubmit="onEdit" :editableUser="this.$store.state.user" />
    </b-modal>
    <b-modal
      id="delete-modal"
      :title="$t('Delete user')"
      header-bg-variant="danger"
      header-text-variant="light"
      ok-variant="danger"
      @ok="onDelete"
    >
      {{ $t("Are you sure?") }}
    </b-modal>
    <div class="create-user-container-app">
      <user-form :onSubmit="onSave" />
    </div>
    <div class="access-list-container-app">
      <access-list
        :title="$t('With access')"
        :users="users.filter(u => u.access)"
      />
      <access-list
        :title="$t('Without access')"
        :users="users.filter(u => !u.access)"
      />
    </div>
    <UserInfo />
  </div>
</template>

<script>
import UserForm from "./components/UserForm.vue";
import AccessList from "./components/AccessList.vue";
import { usersCollection } from "./firebase";

export default {
  name: "App",
  firestore: {
    users: usersCollection
  },
  data() {
    return {
      users: []
    };
  },
  components: {
    UserForm,
    AccessList
  },
  methods: {
    async onSave(user) {
      delete user.id;
      try {
        await usersCollection.add(user);
        this.$bvToast.toast(this.$t("User has been added!"), {
          title: this.$t("Saved"),
          autoHideDelay: 5000,
          variant: "success"
        });
      } catch (e) {
        this.$bvToast.toast(this.$t("Error adding the user."), {
          title: this.$t("Error"),
          autoHideDelay: 5000,
          variant: "danger"
        });
      }
    },
    async onEdit(user) {
      const id = user.id;
      delete user.id;
      try {
        await usersCollection.doc(id).update(user);
        this.$bvModal.hide("edit-modal");
        this.$bvToast.toast(this.$t("User has been edited!"), {
          title: this.$t("Edited"),
          autoHideDelay: 5000,
          variant: "success"
        });
      } catch (e) {
        this.$bvToast.toast(this.$t("Error editing the user."), {
          title: this.$t("Error"),
          autoHideDelay: 5000,
          variant: "danger"
        });
      }
    },
    async onDelete() {
      const { id } = this.$store.state.user;
      try {
        await usersCollection.doc(id).delete();
        this.$bvToast.toast(this.$t("User has been deleted!"), {
          title: this.$t("Deleted"),
          autoHideDelay: 5000,
          variant: "success"
        });
      } catch (e) {
        this.$bvToast.toast(this.$t("Error deleting the user."), {
          title: this.$t("Deleted"),
          autoHideDelay: 5000,
          variant: "danger"
        });
      }
    }
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
}
.access-list-container-app {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 30px;
}
</style>
