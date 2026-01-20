class LibraryItem:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def display_info(self):
        pass


class Book(LibraryItem):
    def __init__(self, title, author, num):
        super().__init__(title, author)
        self.num = num

    def display_info(self):
        print(self.title, self.author, self.num)


class Magazine(LibraryItem):
    def __init__(self, title, author, issue):
        super().__init__(title, author)
        self.issue_number = issue

    def display_info(self):
        print(self.title, self.author, self.issue_number)


book = Book("Python", "Guide", "12345")
mag = Magazine("Tech", "Editor", 10)

book.display_info()
mag.display_info()
