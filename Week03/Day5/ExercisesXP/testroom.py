list1 = ['aardvark','beetle','computer','portuguese']
list2 = [str(''.join(sorted(a))) for a in list1]

print(list2)