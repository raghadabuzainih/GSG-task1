const Book = {
    title: "Raghads' book",
    author: "Raghad",
    isRead: true,
    toggleReadStatus: function(){
        this.isRead = !this.isRead
    },
    describe: function(){
        return `📖 ${this.title} By ${this.author} [${this.isRead ? "Read" : "Unread"}]`
    }
}