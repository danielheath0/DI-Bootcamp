from natsort import natsorted


class Text():
    
    @classmethod
    def from_file(cls, filepath):
        with open(filepath,'r') as f:
            return cls(string = f.read())
     
    def __init__(self, string):
        self.string = string

    
    def word_dict(self):
        """Turns string into dictionary where key-value pairs represent individual words and their frequency. Final result is ordered from most frequent to least."""
        word_dict = {}
        word_list = self.string.split()
        for word in word_list:
            if word not in word_dict:
                word_dict[word] = 1
            else:
                word_dict[word] += 1
        return dict(
            natsorted(word_dict.items(), reverse=True, key=lambda item: item[1])
        )

    def word_frequency(self, word):
        """Generates frequency of a given word"""
        if word in self.word_dict():
            frequency = self.word_dict()[word]
            if frequency == 1:
                return f"{word} appears once!"

            else:
                return f"{word} appears {frequency} times!"
        else:
            return None
        
    def most_common(self):
        """Finds most common words"""
        result = []
        previous_value = None
        
        for key,value in self.word_dict().items():
            if previous_value is None:
                previous_value = value
         
            if value != previous_value:
                break
            result.append(key)
        
        if len(result) == 1:
            return f"The most common word is {result[0]}, appearing {previous_value} times."
        elif len(result) > 1:
            return f"The most common words are {str(result)[1:-1]},appearing {previous_value} times."
        else:
            return "Hmm, something is not right..."
        
    def unique_words(self):
        """Finds all the words which only appear once"""
        result = []
        for key, value in self.word_dict().items():
            if value == 1:
                result.append(key)
        if len(result) == 1:
            return f"The only unique word is {result[0]}."
        elif len(result) > 1:
            return f"The unique words are {str(result)[1:-1]}."
        else:
            return "Hmm, something is not right..."                
                

camus = Text.from_file('the_stranger.txt')

print(camus.word_frequency('Arab')) # The Cure's first single
print(camus.most_common())
print(camus.unique_words()) 
