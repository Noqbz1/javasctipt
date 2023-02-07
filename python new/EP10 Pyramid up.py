row = int(input('Number of Pyramid'))

for i in range(1,row+1,):
    for space in range(1,(row+1)-i):
        print(' ',end='')
    for j in range(i+1,2*(i+1)-1):
        print('3',end='')
    for r in range(1,i):
        print('4',end='')
    print('')