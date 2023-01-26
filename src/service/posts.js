import useApi from "src/composables/UseApi";

export default function postService () {
    const { List, Post, Update, Remove, Getbyid } = useApi('posts')

     return {
        List,
        Post,
        Update,
        Remove,
        Getbyid
    }
}