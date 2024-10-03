# 編號：CANDY-010
# 程式語言：Python
# 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
# 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"


def expanded_form(num):
    result = []
    for element in enumerate(str(num), start=1):
        if element[1] != "0" and element[0] != len(str(num)):
            result.append(f"{ 10 ** (len(str(num)) - element[0] )} x {element[1]}")
        if element[1] != "0" and element[0] == len(str(num)):
            result.append(element[1])
    return " + ".join(result)


print(expanded_form(8))
# 印出 8
print(expanded_form(25))
# 印出 10 x 2 + 5
print(expanded_form(148))
# 印出 100 x 1 + 10 x 4 + 8
print(expanded_form(1450))
# 印出 1000 x 1 + 100 x 4 + 10 x 5
print(expanded_form(60308))
# 印出 10000 x 6 + 100 x 3 + 8
