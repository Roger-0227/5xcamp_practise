# 編號：CANDY-005
# 程式語言：Python
# 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起


def square_digits(num):
    return "".join([str(int(element) ** 2) for element in str(num)])


print(square_digits(3212))
# // 印出 9414
print(square_digits(2112))
# // 印出 4114
print(square_digits(387))
# // 印出 96449
