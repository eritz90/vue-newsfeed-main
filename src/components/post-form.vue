<template>
  <div>
    <form>

      <input
      id="postTitle"
      placeholder="Title"
      v-model="title"/>
      <textarea
      id="textarea"
      placeholder="What's on your mind?"
      v-model="body">
      </textarea>
      <div class="buttons">
        <button @click.prevent="createPost">Create Post</button>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import usePost from '../composables/use-post';

export default defineComponent({
  name: 'PostForm',
  setup() {
    // eslint-disable-next-line prefer-const
    const { Add } = usePost();

    const title = ref('');
    const body = ref('');
    // function createPost() {
    //   if (title.value.trim() !== '') {
    //     addPost(title.value, body.value);
    //     title.value = '';
    //     body.value = '';
    //   } else {
    //     // eslint-disable-next-line no-alert
    //     alert('Please specify a title');
    //   }
    // }
    function createPost() {
      if (title.value.trim() === '') {
        // eslint-disable-next-line no-alert
        alert('Please specify a title');
      } if (body.value.trim() === '') {
        // eslint-disable-next-line no-alert
        alert('Please specify a body');
      } if (body.value.trim() !== '' && title.value.trim() !== '') {
        Add(title.value, body.value);
        title.value = '';
        body.value = '';
      }
    }

    // usePost();

    return {
      body, title, createPost,
    };
  },
});
</script>
