# 編號：CANDY-003
# 程式語言：Python
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面

list = [False, 1, 0, -1, 2, 0, 1, 3, "a"]


def move_zeros_to_end(arr):
    only_zero_array = [element for element in arr if str(element) == "0"]
    other_num_array = [element for element in arr if str(element) != "0"]
    return other_num_array + only_zero_array


result = move_zeros_to_end(list)
print(result)
# 印出 [False, 1, -1, 2, 1, 3, "a", 0, 0]
