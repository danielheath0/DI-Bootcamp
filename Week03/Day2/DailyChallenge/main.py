class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.counter = 0

    def getVisibleItems(self):
        pagelist = []
        for i in range(self.counter, self.counter + self.pageSize):
            pagelist.append(self.items[i])
        return pagelist

    def nextPage(self):
        if self.counter + self.pageSize * 2 <= len(self.items):
            self.counter += self.pageSize
        else:
            self.counter = len(self.items) - self.pageSize

    def prevPage(self):
        if self.counter >= self.pageSize:
            self.counter -= self.pageSize
        else:
            self.counter = 0

    def firstPage(self):
        self.counter = 0

    def lastPage(self):
        self.counter = len(self.items) - self.pageSize
    
    def goToPage(self,pageNum):
        if pageNum > 0 and pageNum*self.pageSize < len(self.items):
            self.counter = (pageNum-1)*self.pageSize
        elif pageNum < 0:
            self.counter = 0
        else:
            self.counter = len(self.items) - self.pageSize


alphabetList = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
p = Pagination(alphabetList, 7)



