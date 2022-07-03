def study_schedule(permanence_period, target_time):
    count = 0
    try:
        for study_in, study_out in permanence_period:
            if study_in <= target_time <= study_out:
                count += 1
        return count
    except (ValueError, TypeError):
        return None
