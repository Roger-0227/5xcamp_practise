# 編號：CANDY-001
# 程式語言：Python
# 題目：找出陣列裡最小的兩個值的總和
# 例如：
#   [15, 28, 4, 2, 43] 印出 6
# [23, 71, 33, 82, 1] 印出 24

list_1 = [19, 5, 42, 2, 77]
list_2 = [23, 15, 59, 4, 17]


def sum_smallest_values(arr):
    return sum(sorted(arr)[:2])


print(sum_smallest_values(list_1))  # 印出 7
print(sum_smallest_values(list_2))  # 印出 19
