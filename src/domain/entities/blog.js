class Blog {
    constructor (_id, id_user, title, description, content, image, comment) {
        this._id = _id;
        this.id_user = id_user;
        this.title = title;
        this.description = description;
        this.content = content;
        this.image = image;
        this.comment = comment;
    }
}

export default Blog;