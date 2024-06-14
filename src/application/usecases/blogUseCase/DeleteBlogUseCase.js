import IBlogRepo from "@/domain/repositories/IBlogRepo";

class DeleteBlogUseCase {
    constructor(blogRepo) {
      if (!(blogRepo instanceof IBlogRepo)) {
        throw new Error("blogRepo must be an instance of IBlogRepo");
      }
      this.blogRepo = blogRepo;
    }
  
    async run(_id, userId) {
      const blog = await this.blogRepo.delete(_id, userId);
      if (!blog) {
        throw new Error(`Blog with ID ${_id} not found`);
      }
      return { message: `Blog with ID ${_id} has been deleted` };
    }
  }
  

export default DeleteBlogUseCase;
