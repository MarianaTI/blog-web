import IBlogRepo from "@/domain/repositories/IBlogRepo";

class GetOneBlogUseCase {
    constructor(blogRepo) {
        if(!(blogRepo instanceof IBlogRepo))
            throw new Error("bookRepo must be instance of IBookRepo");
        this.blogRepo = blogRepo;
    }

    async run(_id) {
        const blog = await this.blogRepo.getOne(_id);
        return blog;
    }
}

export default GetOneBlogUseCase;