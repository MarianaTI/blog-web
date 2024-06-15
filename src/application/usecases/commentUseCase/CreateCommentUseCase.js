import ICommentRepo from "@/domain/repositories/IComment";

class CreateCommentUseCase {
  constructor(commentRepo) {
    if (!(commentRepo instanceof ICommentRepo))
      throw new Error("commentRepo must be instance of ICommentRepo");
    this.commentRepo = commentRepo;
  }

  async run(comment) {
    try {
        const createdComment = await this.commentRepo.create(comment);
        return createdComment;
    } catch (error) {
        console.log('Error creating blog:', error);
        throw error;
    }
  }
}

export default CreateCommentUseCase;