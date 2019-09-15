<template>
  <div class="lg:px-16 py-2 px-6">
    <div v-if="userResults.length==0 && snapshotResults.length==0">
      <p>
        No data found with the name of
        <span class="font-semibold">{{this.$route.params.searchQuery}}</span>
      </p>
    </div>
    <div v-else>
      <div v-if="userResults && userResults.length>0">
        <h5 class="font-semibold mb-3">Users</h5>
        <div class="grid">
          <div class="grid-item" v-for="user in userResults" :key="user._id">
            <img
              class="w-full h-full rounded-sm"
              :src="user.profileImageURL"
              alt="User Profile Image"
            />
            <div>
              <h5 class="text-xl">{{user.name}}</h5>
              <p class="text-sm">{{user.email}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="snapshotResults && snapshotResults.length>0">
        <h5 class="font-semibold mb-3">Snapshots</h5>
        <div class="grid">
          <Snapshot
            :snapshot="snap"
            class="grid-item"
            v-for="snap in snapshotResults"
            :key="snap._id"
            :hasLiked="snap.likers.indexOf($store.state.user._id)>-1?true:false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snapshot from "../../components/Snap/Snap";
export default {
  components: {
    Snapshot
  },
  data() {
    return {
      userResults: [],
      snapshotResults: []
    };
  },
  async created() {
    const data = await this.$axios.$get(
      `/user/search/${this.$route.params.searchQuery}`
    );
    this.userResults = data.users;
    this.snapshotResults = data.snapshots;
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
}
.grid-item {
  grid-column: span 4;
}
</style>