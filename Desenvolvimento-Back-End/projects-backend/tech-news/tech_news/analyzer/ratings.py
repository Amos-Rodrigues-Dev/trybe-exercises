from tech_news.database import get_collection
from collections import Counter


# Requisito 10
def top_5_news():
    result = get_collection().aggregate(
        [
            {
                "$project": {
                    "title": 1,
                    "url": 1,
                    "pop": {"$add": ["$shares_count", "$comments_count"]},
                }
            },
            {"$sort": {"pop": -1, "title": 1}},
            {"$limit": 5},
        ]
    )
    return [(item["title"], item["url"]) for item in result]


# Requisito 11
def top_5_categories():
    result = get_collection().aggregate(
        [
            {"$project": {"categories": 1}},
        ]
    )
    new = []
    [new.extend(item["categories"]) for item in result]
    return sorted(list(Counter(new)))[:5]
