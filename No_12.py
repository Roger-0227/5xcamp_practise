# 編號：CANDY-012
# 程式語言：Python
# 題目：把數字加總，最終濃縮成個位數
# 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
#      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1
from functools import reduce


def number_reducer(num):
    reduce_num = reduce(lambda acc, cv: int(acc) + int(cv), str(num))
    while reduce_num >= 10:
        reduce_num = reduce(lambda acc, cv: int(acc) + int(cv), str(reduce_num))
    return reduce_num


print(number_reducer(9527))
# 印出 5
print(number_reducer(1450))
# 印出 1
print(number_reducer(5566108))
# 印出 4
print(number_reducer(1234567890))
# 印出 9
print(number_reducer(999999999999999999999999999999899))
# 印出 8
