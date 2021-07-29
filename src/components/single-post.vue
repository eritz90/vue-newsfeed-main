<template>
   <div @click="viewButton(post.id)" class="single-content">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
  <div class="editDelete">
    <button @click="editButton(post.id)">Edit Post</button>
    <button @click="deleteButton">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import Post from '@/interface/Post';
import { RouteName } from '@/enums/route-names';
import router from '@/router';
import usePost from '../composables/use-post';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup(props) {
    const snippet = computed(() => `${props.post.body.substring(0, 100)}-(click the post for more info)`);
    // const { toEdit, toView } = getPostFeed();
    const { deletePost } = usePost();
    const index = 0;

    // function toEdit(key: number) {
    //   router.push({ name: RouteName.EditPost, params: { id: key } });
    // }
    // function toView(key: number) {
    //   router.push({ name: RouteName.ViewPost, params: { id: key } });
    // }

    function editButton(key: number) {
      router.push({ name: RouteName.EditPost, params: { id: key } });
    }

    function viewButton(key: number) {
      router.push({ name: RouteName.ViewPost, params: { id: key } });
    }
    function deleteButton() {
      if (deletePost(index)) {
        router.replace(RouteName.Feedpage);
      }
    }
    return {
      editButton, viewButton, snippet, deleteButton,
    };
  },
});

</script>

<style>
    .single-content{
      background: white;
        margin: auto;
        width: 60%;
        padding: 10px 50px 20px;
        cursor: pointer;
        text-align: center;
        border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    }
    .single-content:hover{
      background: linear-gradient(to left, #743ad5, #d53a9d);
    }
    .editDelete{
      width: 158%;
    }
</style>
