# 編號：CANDY-002
# 程式語言：Python
# 題目：請寫一小段程式，印出連續陣列裡缺少的字元

chars_1 = ["a", "b", "c", "d", "f", "g"]
chars_2 = ["O", "Q", "R", "S"]


def missing_char(chars):
    parse_chars = map(lambda element: ord(element), chars)
    for i in parse_chars:
        if chr(i) != chars[(i - ord(chars[0]))]:
            return chr(i - 1)


print(missing_char(chars_1))  # // 印出 e
print(missing_char(chars_2))  # // 印出 P
