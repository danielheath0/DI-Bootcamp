import os, time

dir_path = os.path.dirname(os.path.realpath(__file__))


class AnagramChecker:
    def __init__(self):
        with open(dir_path + r"\sowpods.txt", "r") as f:
            self.word_list = f.read().lower().splitlines()
            self.sorted_list = [str("".join(sorted(a))) for a in self.word_list]
            self.word_list_master = tuple(zip(self.sorted_list, self.word_list))

    def is_valid_word(self, word):
        if word in self.word_list:
            return True
        else:
            return False

    def get_anagrams(self, word):
        anagrams_list = []
        sorted_word = "".join(sorted(word))
        for i in self.word_list_master:
            if sorted_word == i[0]:
                anagrams_list.append(i[1])
        return anagrams_list


