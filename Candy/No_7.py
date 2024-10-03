# 編號：CANDY-007
# 程式語言：Python
# 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！


def find_some_different(numbers):
    evenArray = [element for element in numbers if element % 2 == 0]
    oddArray = [element for element in numbers if element % 2 != 0]
    if len(evenArray) < len(oddArray):
        return evenArray[0]
    return oddArray[0]


print(find_some_different([2, 4, 0, 100, 4, 11, 2602, 36]))
# 印出 11
print(find_some_different([160, 3, 1719, 19, 11, 13, -21]))
# 印出 160
