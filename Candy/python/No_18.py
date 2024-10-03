# 編號：CANDY-018
# 程式語言：Python
# 題目：實作一個可以印出隨機整數的函數


def random_number(*args):
    from random import randrange

    return randrange(*args)


print(random_number(50))
# 隨機印出 0 ~ 49 之間的任何一個數字
print(random_number(5, 30))
# 隨機印出 5 ~ 29 之間的任何一個數字
