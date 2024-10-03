# 編號：CANDY-013
# 程式語言：Python
# 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
# https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283


def is_valid_vat_number(vat):
    multiplier = [1, 2, 1, 2, 1, 2, 4, 1]
    zip_array = zip(multiplier, map(lambda e: int(e), str(vat)))
    product_array = (a * b for a, b in zip_array)
    count_result = sum(e if e < 10 else (e // 10) + (e % 10) for e in product_array)

    check_result = (
        str(vat)[6] == 7 and count_result % 5 == 0 and (count_result - 9) % 5 == 0
    ) or (count_result % 5 == 0)

    return check_result


print(is_valid_vat_number("10458575"))
# true
print(is_valid_vat_number("88117125"))
# true
print(is_valid_vat_number("53212539"))
# true
print(is_valid_vat_number("88117126"))
# false
