<template>
  <div class="lg:px-16 lg:py-8 px-6 py-4 lg:flex">
    <div class="grid lg:w-10/12 w-full">
      <div v-for="snapshot in snapshots" :key="snapshot._id" class="grid-item">
        <div class="grid-item-image-wrapper relative">
          <img :src="snapshot.imageURL" alt="snapshot" />
          <div class="grid-item-overlay cursor-pointer" @click="viewImage(snapshot._id)">
            <h6 class="text-white">{{snapshot.title}}</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-2/12 w-full flex flex-col lg:px-4 px-2 text-center">
      <div v-for="user in users" :key="user._id" class="mb-4">
        <img
          :src="user.profileImageURL"
          alt="User Profile Image"
          class="w-12 h-12 rounded-full mx-auto"
        />
        <h6 class="info-title">{{user.name}}</h6>
        <p class="info-subtitle">@{{user.username}}</p>
        <button class="primary-button mt-2">Follow</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
      snapshots: [],
      users: []
    };
  },
  methods: {
    viewImage(snapId) {
      this.$router.push(`/snap/${snapId}`);
    }
  },

  async created() {
    const data = await this.$axios.$get(
      `/discover?pageNumber=${this.pageNumber}`
    );
    this.snapshots = data.snaps;
    this.users = data.users;
  }
};
</script>