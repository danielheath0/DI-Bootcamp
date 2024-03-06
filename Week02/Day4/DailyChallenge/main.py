matrix_string = "7iiTsxh%?i #sM $a #t%^r!"
matrix_list = []
def make_matrix(string:str, col:int):
    """Turns string into matrix with col number of columns"""
    #global matrix_list
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
# print(matrix)


def decrypt(m):
   
    reordered_list = []

    for j in range(len(m[0])):
        for i in range(len(m)):
            reordered_list.append(m[i][j])
    # print(reordered_list)
    clean_list = []
    for letter in reordered_list:
        if letter.isalpha():
            clean_list.append(letter)
        elif letter.isnumeric():
            continue
        else:
            if clean_list[-1] != " ":
                clean_list.append(" ")
 
    # print(clean_list)       
    final_string = "".join(clean_list)
    return final_string

#matrix = make_matrix("7iiTsxh%?i #sM $a #t%^r!",3)
print(decrypt(matrix))
#print(decrypt(make_matrix(matrix_string,3)))
# decrypt(make_matrix("7iiTsxh%?i #sM $a #t%^r!",3))

# def solve_problem(encrypted_string, number_of_columns):
#   print(decrypt(make_matrix(encrypted_string, number_of_columns)))
    
#solve_problem("7iiTsxh%?i #sM $a #t%^r!",3)

print("I'm not very happy with this because I can't just put string into a function. I don't know how to fix it.")