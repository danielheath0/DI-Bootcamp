import itertools

score_table = {
    (1, 1): 4,
    (1, 2): 3,
    (1, 3): 8,
    (2, 1): 9,
    (2, 2): 5,
    (2, 3): 1,
    (3, 1): 2,
    (3, 2): 7,
    (3, 3): 6,
}
turn_counter = 0
player_o = []
player_x = []
winner_condition = False

position_list = [0, " ", " ", " ", " ", " ", " ", " ", " ", " "]


def calculate_score(scores: list):
    """We take a list of (3 or more) scores. We find the sum of each combination then return a list of sums"""
    sum_list = []
    if len(scores) >= 3:
        tuple_list = list(itertools.combinations(scores, 3))
        for t in tuple_list:
            sum_list.append(sum(t))
    return sum_list


def is_winner(scores: list):
    """Takes a list of scores. If a combination adds to 15, winner declared"""
    global winner_condition
    sums = calculate_score(scores)
    if 15 in sums:
        draw_board()
        print(f"Player {to_play} is the winner!")
        winner_condition = True


def draw_board():
    """Draws the board. The centre character of each square is brought from position_list"""
    print(
        f"_________________________\n|       |       |       |\n|   {position_list[4]}   |   {position_list[3]}   |   {position_list[8]}   |\n|_______|_______|_______|\n|       |       |       |\n|   {position_list[9]}   |   {position_list[5]}   |   {position_list[1]}   |\n|_______|_______|_______|\n|       |       |       |\n|   {position_list[2]}   |   {position_list[7]}   |   {position_list[6]}   |\n|_______|_______|_______|\n"
    )


def take_turn(player: str):
    """Asks player to enter row and column"""
    global turn_counter
    turn_row = int(input(f"Player {player}! Please enter row: "))
    turn_col = int(input(f"Player {player}! Please enter column: "))

    turn = (turn_row, turn_col)

    while position_list[score_table[turn]] != " ":
        print("You can't go here!")
        turn_row = int(input(f"Player {player}! Please enter row: "))
        turn_col = int(input(f"Player {player}! Please enter column: "))
        turn = (turn_row, turn_col)
    else:

        position_list[score_table[turn]] = player

    if player == "O":
        player_o.append(score_table[turn])
        turn_counter += 1
    elif player == "X":
        player_x.append(score_table[turn])
        turn_counter += 1


while winner_condition == False:
    draw_board()
    if turn_counter % 2 == 0:
        to_play = "O"
        player = player_o
    else:
        to_play = "X"
        player = player_x
    take_turn(to_play)
    is_winner(player)
    if turn_counter == 9:
        draw_board()
        print("It's a draw!")
        break
    

