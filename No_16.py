# 編號：CANDY-016
# 程式語言：Python
# 題目：把原本 snake_case 的字轉換成 camelCase 格式
# 範例："hello_world" -> "helloWorld"


def to_camel_case(str):
    return str.split("_")[0] + "".join(
        element.title() for element in str.split("_")[1:]
    )


print(to_camel_case("book"))
# book
print(to_camel_case("book_store"))
# bookStore
print(to_camel_case("get_good_score"))
# getGoodScore
