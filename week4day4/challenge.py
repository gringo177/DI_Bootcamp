import requests
import random
import psycopg2

def get_random_countries():
    url = "https://restcountries.com/v2/all"
    response = requests.get(url)
    if response.status_code == 200:
        countries_data = response.json()
        random_countries = random.sample(countries_data, 10)
        return random_countries
    else:
        print("Failed to fetch countries.")
        return []


def insert_countries_into_db(countries):
    conn = psycopg2.connect(
        database="your_database_name",
        user="your_username",
        password="your_password",
        host="localhost",
        port="5432"
    )
    cur = conn.cursor()

    for country in countries:
        name = country["name"]
        capital = country.get("capital", "")
        flag = country.get("flags", [])[0]
        subregion = country.get("subregion", "")
        population = country.get("population", 0)

        cur.execute(
            "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)",
            (name, capital, flag, subregion, population)
        )

    conn.commit()
    conn.close()

if __name__ == "__main__":
    random_countries = get_random_countries()
    if random_countries:
        insert_countries_into_db(random_countries)
        print("Successfully inserted random countries into the database.")
    else:
        print("No countries fetched.")
