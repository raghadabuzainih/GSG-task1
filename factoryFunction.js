function createBook(title, author, isRead){
    return {
        title,
        author,
        isRead,
        toggleReadStatus(){
            this.isRead = !this.isRead
        },
        describe(){
            return `📖 ${this.title} By ${this.author} [${this.isRead ? "Read" : "Unread"}]`
        }
    }
}