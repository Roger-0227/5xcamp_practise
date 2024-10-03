# 編號：CANDY-015
# 程式語言：Python
# 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
# 範例：
#      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']
#      "abcdef" -> ['ab', 'cd', 'ef']


def split_string(str):
    from itertools import zip_longest

    zip_reset = zip_longest(str[0::2], str[1::2], fillvalue="_")
    return list(element[0] + element[1] for element in zip_reset)


print(split_string("abcdef"))
# ["ab", "cd", "ef"]
print(split_string("abcdefg"))
# ["ab", "cd", "ef", "g_"]
print(split_string(""))
# []
