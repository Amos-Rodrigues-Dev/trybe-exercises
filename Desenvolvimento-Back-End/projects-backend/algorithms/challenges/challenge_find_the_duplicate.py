def find_duplicate(nums):
    nums.sort()
    for index, num in enumerate(nums):
        try:
            if int(num) == nums[index + 1] and num >= 0:
                return num
        except (IndexError, ValueError):
            return False

    return False
