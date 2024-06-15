class Comment {
    constructor (_id, id_user, comment, blogId) {
        this._id = _id;
        this.id_user = id_user;
        this.comment = comment;
        this.blogId = blogId;
    }
}

export default Comment;