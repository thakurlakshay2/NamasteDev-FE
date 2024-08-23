# Library Data Management

This repository provides a structured approach to managing and querying data related to books and authors, considering circular dependencies between them. Below is an overview of the data structure and the APIs needed to access the data.

## Data Structure

### Books

- **id**: Unique identifier for the book
- **title**: Title of the book
- **publishedYear**: Year the book was published
- **author**: Reference to the author of the book

### Author

- **id**: Unique identifier for the author
- **name**: Name of the author
- **books**: List of books written by the author

## Data Requirements

To fully utilize the data, we need to access the following:

1. **List of Books**
2. **List of Authors**
3. **List of Books with Author Details**
4. **List of Authors with Book Details**

## API Endpoints

To handle the circular dependencies between books and authors, the following APIs are required:

1. **GET /books**

   - Retrieves a list of all books.

2. **GET /authors**

   - Retrieves a list of all authors.

3. **GET /books-with-author-details**

   - Retrieves a list of books along with details of their authors.

4. **GET /authors-with-book-details**
   - Retrieves a list of authors along with details of the books they have written.

## Examples

### List of Books

```http
GET /books
```
