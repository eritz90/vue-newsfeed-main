<template>
  <div>
      <div id="postTitle" class = "viewPost">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
    </div>
    <div class="buttons">
      <div><button @click="backButton">Back</button></div>
    </div>
  </div>
</template>

<script lang="ts">
import IPost from '@/interface/Post';
import router from '@/router';
import { defineComponent } from 'vue';
import getPostFeed from '../composables/use-post';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    // const key = ref(props.id); // note
    const { posts } = getPostFeed();

    const post: IPost = {
      title: '',
      body: '',
      id: 0,
    };

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < posts.value.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (posts.value[i].id == props.id) {
        post.title = posts.value[i].title;
        post.body = posts.value[i].body;
        post.id = posts.value[i].id;
      }
    }

    function backButton() {
      router.go(-1);
    }

    return { post, backButton };
  },
});
</script>

<style>
.viewPost{
  background: white;
        margin: auto;
        width: 20em;
        padding: 10px 50px 20px;
        cursor: pointer;
        text-align: center;
        border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  background: linear-gradient(to left, #743ad5, #d53a9d);
}

</style>
