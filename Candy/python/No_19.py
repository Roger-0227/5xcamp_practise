# 編號：CANDY-019
# 程式語言：Python
# 題目：檢查是否為某個數字的平方數


def is_square(num):
    import math

    if num < 0:
        return False
    return math.isqrt(num) ** 2 == num


print(is_square(0))  # True
print(is_square(4))  # True
print(is_square(5))  # False
print(is_square(100))  # True
print(is_square(-4))  # False
print(is_square(-1))  # False
