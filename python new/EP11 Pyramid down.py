row = int(input('Number of Pyramid'))
for i in range(1,row+1):
    for space in range(1,i+1):
        print(' ',end='')
    for j in range(i+1,2*(row+1)- i):
        print('*',end='')
    print('')
