import IBlogRepo from "@/domain/repositories/IBlogRepo";

class GetAllBlogUseCase {
  constructor(blogRepo) {
    if (!(blogRepo instanceof IBlogRepo))
      throw new Error("BlogRepo must be instance of IBlogRepo");
    this.blogRepo = blogRepo;
  }

  async run() {
    const getBlog = this.blogRepo.getAll();
    return getBlog;
  }
}

export default GetAllBlogUseCase;
