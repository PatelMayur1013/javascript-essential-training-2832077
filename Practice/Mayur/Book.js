class Book{
    constructor(
        name,
        author,
        edition,
        publicationname,
        publishdate,
        bookfree,
        price
    )
    {
        this.name=name;
        this.author=author;
        this.edition=edition;
        this.publication={
            name:publicationname,
            date:publishdate
        };
        this.bookfree=bookfree;
        this.price=price;
    }
    togglebookfree(bookfree1)
    {
        this.bookfree=bookfree1;
    }
    newpublication(publicationname1,publishdate1)
    {
        this.publication.name=publicationname1;
        this.publication.date=publishdate1;
    }
}

export default Book;