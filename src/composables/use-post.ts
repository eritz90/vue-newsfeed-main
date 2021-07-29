import postData from '@/data/post-data';
// import { RouteName } from '@/enums/route-names';
import { ref } from 'vue';
// import router from '@/router';
import Post from '../interface/Post';

/* eslint-disable */
function usePost() {
  const posts = ref(postData);

  function Add(title: string, body: string) {
    alert('Post Added');

    posts.value.unshift({
      title: title,
      body: body,
      id: Math.floor(Math.random() * 1000),
    });
  }

  // function toView(key: number){
  //   router.push({ name: RouteName.ViewPost, params: { id: key } });
  // }

  // function toEdit(key: number) {
  //   router.push({ name: RouteName.EditPost, params: { id: key } });
  // }

  function deletePost(id: number) {
    // note
    alert('Post deleted');
    posts.value.splice(id, 1);
    return true;
  }

  function savePost(post: Post, id: number) {
    alert('Saved Changes');
    posts.value.splice(id, 1, post);
    return true;
  }

  return {
    posts, Add, deletePost, savePost,
  };
}

export default usePost;
