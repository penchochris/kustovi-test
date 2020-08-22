<template>
  <div id="app">
    <b-toast />
    <b-modal
      id="edit-modal"
      hide-footer
      title="Editar usuario"
      header-bg-variant="primary"
      header-text-variant="light"
    >
      <user-form :onSubmit="onEdit" :editableUser="this.$store.state.user" />
    </b-modal>
    <b-modal
      id="delete-modal"
      title="Eliminar usuario"
      header-bg-variant="danger"
      header-text-variant="light"
      ok-variant="danger"
      @ok="onDelete"
    >
      ¿Seguro quieres eliminar?
    </b-modal>
    <div class="create-user-container-app">
      <user-form :onSubmit="onSave" />
    </div>
    <div class="access-list-container-app">
      <access-list title="Con acceso" :users="users.filter(u => u.access)" />
      <access-list title="Sin acceso" :users="users.filter(u => !u.access)" />
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
  beforeCreate: function() {
    this.$options.components.AccessList = require("./components/AccessList.vue").default;
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
        this.$bvToast.toast("Guardado", {
          title: "El usuario ha sido añadido correctamente!",
          autoHideDelay: 5000,
          variant: "success"
        });
      } catch (e) {
        this.$bvToast.toast("Error", {
          title: "Ha habido un error al añadir el usuario",
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
        this.$bvToast.toast("Editado", {
          title: "El usuario ha sido editado correctamente!",
          autoHideDelay: 5000,
          variant: "success"
        });
      } catch (e) {
        this.$bvToast.toast("Error", {
          title: "Ha habido un error al editar el usuario",
          autoHideDelay: 5000,
          variant: "danger"
        });
      }
    },
    async onDelete() {
      const { id } = this.$store.state.user;
      try {
        await usersCollection.doc(id).delete();
        this.$bvToast.toast("Eliminado", {
          title: "El usuario ha sido eliminado correctamente!",
          autoHideDelay: 5000,
          variant: "success"
        });
      } catch (e) {
        this.$bvToast.toast("Error", {
          title: "Ha habido un error al eliminar el usuario",
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
  min-width: 900px;
}
.access-list-container-app {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 900px;
  padding-top: 30px;
}
</style>
