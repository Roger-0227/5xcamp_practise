#  編號：CANDY-023
#  程式語言：JavaScript
#  題目：算出 N 個數字的最大公因數


def calc_gcd(*numbers):
    from math import gcd

    num_gcd = numbers[0]
    for number in numbers[1:]:
        num_gcd = gcd(num_gcd, number)
    return num_gcd


print(calc_gcd(10))  # 10
print(calc_gcd(103, 27))  # 1
print(calc_gcd(21, 15, 18))  # 3
print(calc_gcd(104, 96, 36, 88))  # 4
