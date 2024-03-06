matrix_string = "7iiTsxh%?i #sM $a #t%^r!"
matrix_list = []
def make_matrix(string:str, col:int):
    """Turns string into matrix with col number of columns"""
    global matrix_list
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
    return(matrix_list)

make_matrix(matrix_string,3)
