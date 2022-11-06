import http from "../api/baseApi";
const url = "http://34.128.119.167:5000/api/graphql";

// const getListArticle = async() => {
//   await axios("/", {
//     baseURL: url,
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: {
//       query: `query {posts {
//               id
//               title
//               content {
//                 document
//               }
//               author
//               image {
//                 url
//               }
//               video {
//                 url
//               }
//             }}`,
//     },
//   });
// };

const getListArticle = () => {
  return http.get('/article')
}

const createArticle = (data) => {
  return http.post('/article',data)
}

const deleteArticle = (id) => {
  return http.delete(`/article/${id}`)
}

export const articleServices = {
  getListArticle,
  createArticle,
  deleteArticle
};
