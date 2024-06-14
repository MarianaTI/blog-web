import axios from "axios";
import IBlogRepo from "@/domain/repositories/IBlogRepo";

class BlogRepo extends IBlogRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/blogs";
    this.urlId = "http://localhost:3000/api/blogs/";
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
}

export default BlogRepo;