matrix_string = "7iiTsxh%?i #sM $a #t%^r!"
def make_matrix(string:str, col:int):
    """Turns string into matrix with col number of columns"""
    matrix_list = []
    matrix_unit = []
    for i,j in enumerate(string):
        index = i % col
        if index == 0 and i != 0:
            matrix_list.append(matrix_unit)
            matrix_unit = []
            matrix_unit.append(j)
        elif i == len(string)-1:
            matrix_unit.append(j)
            matrix_list.append(matrix_unit)
        else:    
            matrix_unit.append(j)
    return matrix_list

matrix = make_matrix(matrix_string,3)
def decrypt(m):
    reordered_list = []
    for j in range(len(m[0])):
        for i in range(len(m)):
            reordered_list.append(m[i][j])
    clean_list = []
    for letter in reordered_list:
        if letter.isalpha():
            clean_list.append(letter)
        elif letter.isnumeric():
            continue
        else:
            if clean_list[-1] != " ":
                clean_list.append(" ")
    final_string = "".join(clean_list)
    return final_string

def solve_problem(encrypted_string, number_of_columns):
   print(decrypt(make_matrix(encrypted_string, number_of_columns)))
    
solve_problem("7iiTsxh%?i #sM $a #t%^r!",3)