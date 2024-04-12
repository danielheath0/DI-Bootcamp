import axios from "axios";

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default fetchPosts