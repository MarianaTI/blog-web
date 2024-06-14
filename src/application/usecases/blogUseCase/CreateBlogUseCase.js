import IBlogRepo from "@/domain/repositories/IBlogRepo";

class CreateBlogUseCase {
  constructor(blogRepo) {
    if (!(blogRepo instanceof IBlogRepo))
      throw new Error("blogRepo must be instance of IBlogRepo");
    this.blogRepo = blogRepo;
  }

  async run(blog) {
    try {
        const createdBlog = await this.blogRepo.create(blog);
        return createdBlog;
    } catch (error) {
        console.log('Error creating blog:', error);
        throw error;
    }
  }
}

export default CreateBlogUseCase;