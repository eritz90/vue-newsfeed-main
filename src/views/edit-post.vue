<template>
  <div>
    <input id="postTitle" placeholder="Title" v-model="post.title"/>
    <textarea rows="5" placeholder="Add details here" v-model="post.body"></textarea>
    <div class="buttons">
      <div><button @click="backButton" class="btn">Back</button></div>
      <button @click="saveButton">Save Changes</button>
    </div>
  </div>
</template>

<script lang="ts">
import Post from '@/interface/Post';
import { defineComponent } from 'vue';
import router from '@/router';
// import { RouteName } from '@/enums/route-names';
import usePost from '../composables/use-post';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    // const key = ref(props.id);
    const { posts, savePost } = usePost();
    let index = 0;

    const post: Post = {
      title: '',
      body: '',
      id: 0,
    };

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < posts.value.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (posts.value[i].id == props.id) {
        index = i;
        post.title = posts.value[i].title;
        post.body = posts.value[i].body;
        post.id = posts.value[i].id;
      }
    }

    function backButton() {
      router.go(-1);
    }

    // function deleteButton() {
    //   if (deletePost(index)) {
    //     router.replace(RouteName.Feedpage);
    //   }
    // }
    function saveButton() {
      if (post.title.trim() !== '') {
        if (savePost(post, index)) {
          router.go(-1);
        }
      } else {
        /* eslint-disable */
        alert('The post does not have a title');
      }
    }

    return {
      post, saveButton, backButton,
    };
  },
});
</script>
