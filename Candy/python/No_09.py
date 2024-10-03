# 編號：CANDY-009
# 程式語言：Python
# 題目：移除網址中的錨點（Anchor）


def remove_anchor(url):
    return url.split("#")[0]


print(remove_anchor("5xcampus.com"))  # // 印出 5xcampus.com
print(remove_anchor("5xcampus.com/#about"))  # // 印出 5xcampus.com/
print(
    remove_anchor("5xcampus.com/courses/?page=1#about")
)  # // 印出 5xcampus.com/courses/?page=1
