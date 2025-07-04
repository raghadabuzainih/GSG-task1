function Book(title, author, isRead){
    this.title = title,
    this.author = author,
    this.isRead = isRead,
    this.toggleReadStatus = function(){
        this.isRead = !this.isRead
    },
    this.describe = function(){
        return `📖 ${this.title} By ${this.author} [${this.isRead ? "Read" : "Unread"}]`
    }
}