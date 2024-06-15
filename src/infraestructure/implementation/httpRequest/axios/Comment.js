import axios from "axios";
import ICommentRepo from "@/domain/repositories/IComment";

class CommentRepo extends ICommentRepo {
  constructor(id_user) {
    super();
    this.id_user = id_user;
    this.url = "http://localhost:3000/api/blog/comment";
  }

  async create(comment) {
    try {
      const response = await axios.post(this.url, comment, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear el blog:", error);
      throw error;
    }
  }
}

export default CommentRepo;
