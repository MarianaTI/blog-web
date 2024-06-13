import IUserRepo from "@/domain/repositories/IUserRepo";
import axios from "axios";

class UserRepo extends IUserRepo {
  constructor(id_user) {
    super();
    this.id_user = id_user;
    this.urlSignIn = "http://localhost:3000/api/signin";
    this.urlSignUp = "http://localhost:3000/api/signup";
  }

  async signIn(user) {
    try {
      const response = await axios.post(this.urlSignIn, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error;
    }
  }

  async signUp(user) {
    try {
      const response = await axios.post(this.urlSignUp, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error signing up:", error.message);
      throw error;
    }
  }
}

export default UserRepo;
