# library-project

Project Outline:

This is a project I undertook as part of The Odin Project curriculum. The primary objective of this project was to use an object constructor to create books which would populate an array which would then be displayed for the user. Additionally the books required a feature to delete them from the array and change their read status.

Challenges:

- Collecting data from the new book form when it was submitted.
- Resetting the form and overriding default form behaviour.
- Providing the 'delete' button of each book a way to point to it's location in the array and delete the right book.

Conclusion:

I wasn't so happy with how this was coming together in the beginning as my solution seemed to be off track, but in the end it works as it's intended and overall I'm happy with the project. The most difficult part was getting the delete button of each book to delete the right books from the array.
I overcame this by assigning the index of each book in the array to it's delete button when it was created. This way, the delete button didn't have to go searching for the book, instead it would correspond to it's index - the value was baked in when the table entry was created.

Completed 23/9/24.

Revisting 30/9/24, My objective is to refactor this project to utilize classes instead of plain constructors. For this purpose I've created a 'classes' branch from the main.
