
print("Basic:")
for i in range(151):
    print(i)

print("\nMultiples of Five:")
for i in range(5, 1001, 5):
    print(i)


print("\nCounting, the Dojo Way:")
for i in range(1, 101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)

print("\nWhoa. That Sucker's Huge:")
sum = 0
for i in range(1, 500001, 2):
    sum += i
print(sum)


print("\nCountdown by Fours:")
for i in range(2018, 0, -4):
    print(i)

print("\nFlexible Counter:")
lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum, highNum + 1):
    if i % mult == 0:
        print(i)
