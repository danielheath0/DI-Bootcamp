from anagram_checker import AnagramChecker as ac

# tester = ac()

# print(tester.get_anagrams('spider'))

checker = ac()

flag = True
while flag:

    check_word = input(
        "Please enter the word you'd like to check. Enter EXIT to leave. "
    ).strip()

    if check_word == "EXIT":
        flag = False
        break
    elif " " in check_word:
        print("Please enter only one word!")
    elif check_word.isalpha() == False:
        print("Please enter only letters!")
        
    else:
        if checker.is_valid_word(check_word.lower()):
            print(f"The word \"{check_word}\" is a valid English word!")
            print(f"Its anagrams are {*checker.get_anagrams(check_word.lower()),}")
        else:
            print(f"Sorry - {check_word} isn't a valid word!" )