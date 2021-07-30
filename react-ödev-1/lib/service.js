import axios from 'axios'


async function getData(number = 1) { // number : user-id
    const { data:user } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const { data:post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    user.posts = post
    return user
};

export default getData;