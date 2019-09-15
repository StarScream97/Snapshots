<template>
  <div class="lg:px-16 px-6 py-4 text-center">
    <div class="profile text-center">
      <img
        class="rounded-full h-16 w-16 mx-auto"
        :src="currentUser.profileImageURL"
        alt="User Profile Image"
      />
      <div class="profile-info">
        <h5 class="info-title">{{currentUser.name}}</h5>
        <p class="info-subtitle">@{{currentUser.username}}</p>
      </div>
    </div>
    <div class="profile-additional-info mt-4 flex justify-center text-gray-700">
      <div class="border-r px-2">
        <p class="text-gray-800 text-xl">{{this.$store.state.user.snaps.length}}</p>
        <nuxt-link to="/profile/posts" class="mr-3 text-sm">Posts</nuxt-link>
      </div>
      <div class="border-r px-4">
        <p class="text-gray-800 text-xl">{{this.$store.state.user.followers.length}}</p>
        <nuxt-link to="/profile/followers" class="mr-3 text-sm">Followers</nuxt-link>
      </div>
      <div class="px-4">
        <p class="text-gray-800 text-xl">{{this.$store.state.user.followers.length}}</p>
        <nuxt-link to="/profile/following" class="text-sm">Following</nuxt-link>
      </div>
    </div>
    <nuxt-child class="mt-4" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: {}
    };
  },

  created() {
    this.currentUser = this.$store.state.user;
  },
  fetch({ store, redirect }) {
    if (!store.state.isLoggedIn) {
      return redirect("/");
    }
  }
};
</script>