class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items or []
        self.page_size = int(pageSize)
        self.total_pages = (len(self.items) + self.page_size - 1) // self.page_size
        self.current_page = 1

    def getVisibleItems(self):
        start_idx = (self.current_page - 1) * self.page_size
        end_idx = min(start_idx + self.page_size, len(self.items))
        return self.items[start_idx:end_idx]

    def prevPage(self):
        if self.current_page > 1:
            self.current_page -= 1
        return self

    def nextPage(self):
        if self.current_page < self.total_pages:
            self.current_page += 1
        return self

    def firstPage(self):
        self.current_page = 1
        return self

    def lastPage(self):
        self.current_page = self.total_pages
        return self

    def goToPage(self, pageNum):
        pageNum = int(pageNum)
        if pageNum < 1:
            self.current_page = 1
        elif pageNum > self.total_pages:
            self.current_page = self.total_pages
        else:
            self.current_page = pageNum
        return self



alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  

p.nextPage()

print(p.getVisibleItems())  

p.lastPage()

print(p.getVisibleItems())  

p.goToPage(10)

print(p.getVisibleItems())  
print(p.current_page)  
