import axios from "axios";

const getData = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const user = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );

    const posts = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
    );

    resolve(user);
  });
};

(async () => {
  await getData(1).then((user) => console.log(user.data));
  await getData(1).then((posts) => console.log(posts.data));
})();

export default getData;
