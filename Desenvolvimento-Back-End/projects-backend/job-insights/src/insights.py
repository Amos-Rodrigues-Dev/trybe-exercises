from src.jobs import read


def get_unique_job_types(path):
    unique_jobs = set()
    job_info = read(path)
    for job in job_info:
        unique_jobs.add(job["job_type"])
    return unique_jobs


def filter_by_job_type(jobs, job_type):
    job_type_info = []
    for job in jobs:
        if job["job_type"] == job_type:
            job_type_info.append(job)
    return job_type_info


def get_unique_industries(path):
    unique_industries = set()
    job_info = read(path)
    for job in job_info:
        if len(job["industry"]) != 0:
            unique_industries.add(job["industry"])
    return unique_industries


def filter_by_industry(jobs, industry):
    industries = []
    for job in jobs:
        if job["industry"] == industry:
            industries.append(job)
    return industries


def get_max_salary(path):
    salary = []
    job_info = read(path)
    for job in job_info:
        try:
            if len(job["max_salary"]) != 0:
                salary.append(int(job["max_salary"]))
        except ValueError as exc:
            print(exc)
    max_salary = max(salary)
    return max_salary


def get_min_salary(path):
    salary = []
    job_info = read(path)
    for job in job_info:
        try:
            if len(job["min_salary"]) != 0:
                salary.append(int(job["min_salary"]))
        except ValueError as exc:
            print(exc)
    min_salary = min(salary)
    return min_salary


def matches_salary_range(job, salary):
    if "min_salary" not in job or "max_salary" not in job:
        raise ValueError
    elif type(job["min_salary"]) != int or type(job["max_salary"]) != int:
        raise ValueError
    elif job["min_salary"] > job["max_salary"]:
        raise ValueError
    elif type(salary) != int:
        raise ValueError
    else:
        return job["min_salary"] <= salary <= job["max_salary"]


def filter_by_salary_range(jobs, salary):
    result = []
    try:
        for job in jobs:
            if job["min_salary"] <= salary <= job["max_salary"]:
                result.append(job)
    except (ValueError, TypeError):
        pass
    return result
