import requests
import time

def get_webpage_load_time(url):
    try:
        start_time = time.time()
        response = requests.get(url)
        response.raise_for_status()  
        elapsed_time = time.time() - start_time
        return elapsed_time
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None


websites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]
for url in websites:
    load_time = get_webpage_load_time(url)
    if load_time is not None:
        print(f"{url} loaded in {load_time:.2f} seconds.")
