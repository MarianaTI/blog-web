import IBlogRepo from "@/domain/repositories/IBlogRepo";

class UpdateBlogUseCase {
  constructor(blogRepo) {
    if (!(blogRepo instanceof IBlogRepo))
      throw new Error("blogRepo must be instance of IBlogRepo");
    this.blogRepo = blogRepo;
  }

  async run(blog) {
    try {
        const updateBlog = this.blogRepo.update(blog);
        return updateBlog;
    } catch (error) {
        console.log('Error al actualizar el blog:', error);
        throw error;
    }
  }
}

export default UpdateBlogUseCase;