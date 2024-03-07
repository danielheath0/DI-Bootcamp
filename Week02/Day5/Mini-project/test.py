# import itertools
# # test_list = [1,3,6,8]

# # tuple_list = (list((itertools.combinations(test_list,3))))

# # print(tuple_list)

# # for t in tuple_list:
# #     print(sum(t))
    
# def calculate_score(scores:list):
#     """We take a list of (3 or more) scores. We find the sum of each combination then return a list of sums"""
#     sum_list = []
#     if len(scores) >= 3:
#         tuple_list = list(itertools.combinations(scores,3))
#         for t in tuple_list:
#             sum_list.append(sum(t))
#     return sum_list        

# # print(calculate_score([1,3,6,8]))

# def is_winner(scores:list):
#     """Takes a list of scores. If a combination adds to 15, winner declared"""
#     sums = calculate_score(scores)
#     if 15 in sums:
#         print("You are the winner!")
        
# is_winner([1,3,6,8,12])  

position_list=[0," "," "," "," "," "," "," "," "," "]

# def draw_board():
#     _________________________
#     |       |       |       |
#     |   4   |   3   |   8   |
#     |_______|_______|_______|
#     |       |       |       |
#     |   9   |   5   |   1   |
#     |_______|_______|_______|
#     |       |       |       |
#     |   2   |   7   |   6   |
#     |_______|_______|_______|
    
#     print(f"_"*25 + "\n" +
#     "|       ")*3 + "|" +
#     "|   "{position_list[4]} +
#     "|   "{position_list[3]} +
#     "|   "{position_list[8]} + "|" + "\n"
    
#     )
def draw_board():
    print(f"_________________________\n|       |       |       |\n|   {position_list[4]}   |   {position_list[3]}   |   {position_list[8]}   |\n|_______|_______|_______|\n|       |       |       |\n|   {position_list[9]}   |   {position_list[5]}   |   {position_list[1]}   |\n|_______|_______|_______|\n|       |       |       |\n|   {position_list[2]}   |   {position_list[7]}   |   {position_list[6]}   |\n|_______|_______|_______|\n")    