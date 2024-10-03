#  編號：CANDY-020
#  程式語言：Python
#  題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫


def xxoo(str):
    str = str.lower()
    return str.count("o") == str.count("x")


print(xxoo("ooxx"))  # true
print(xxoo("xxoo"))  # true
print(xxoo("xxooo"))  # false
print(xxoo("xoox"))  # true
print(xxoo("ooAA"))  # false
print(xxoo("xoXoA"))  # true
