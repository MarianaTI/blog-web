import axios from "axios";
import IBlogRepo from "@/domain/repositories/IBlogRepo";

class BlogRepo extends IBlogRepo {
  constructor(id_user) {
    super();
    this.id_user = id_user;
    this.url = "http://localhost:3000/api/blogs";
    this.urlId = "http://localhost:3000/api/blogs/";
    this.urlPost = "http://localhost:3000/api/create/blog";
    this.urlDelete = "http://localhost:3000/api/blog/delete/";
  }

  async getAll() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      console.error("Error fetching los blogs:", error.message);
      throw error;
    }
  }

  async getOne(_id) {
    try {
      const response = await axios.get(`${this.urlId}${_id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching los blogs:", error.message);
      throw error;
    }
  }

  async create(blog) {
    try {
      const formData = new FormData();
      formData.append("id_user", blog.id_user);
      formData.append("title", blog.title);
      formData.append("description", blog.description);
      formData.append("content", blog.content);
      formData.append("image", blog.image);
      const response = await axios.post(this.urlPost, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          id_user: this.id_user,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear el blog:", error);
      throw error;
    }
  }

async delete(_id, userId) {
  const response = await axios.delete(`${this.urlDelete}${_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      userId: userId,
    },
  });
  return response.data;
}

}

export default BlogRepo;
