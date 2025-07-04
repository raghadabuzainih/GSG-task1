class Book{
    constructor(title, author, isRead){
        this.title = title,
        this.author = author,
        this.isRead = isRead
    }

    toggleReadStatus(){
        this.isRead = !this.isRead
    }
    
    describe(){
        return `📖 ${this.title} By ${this.author} [${this.isRead ? "Read" : "Unread"}]`
    }
}