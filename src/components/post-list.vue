<template>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Post from '@/interface/Post';
import SinglePost from './single-post.vue';

export default defineComponent({
  name: 'PostList',
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
  components: { SinglePost },
});
</script>
