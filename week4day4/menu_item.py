import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = psycopg2.connect(database="your_database_name", user="your_username", password="your_password", host="localhost", port="5432")
        cur = conn.cursor()
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
        conn.commit()
        conn.close()

    def delete(self):
        conn = psycopg2.connect(database="your_database_name", user="your_username", password="your_password", host="localhost", port="5432")
        cur = conn.cursor()
        cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        conn.commit()
        conn.close()

    def update(self, new_name, new_price):
        conn = psycopg2.connect(database="your_database_name", user="your_username", password="your_password", host="localhost", port="5432")
        cur = conn.cursor()
        cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name))
        conn.commit()
        conn.close()
import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        conn = psycopg2.connect(database="your_database_name", user="your_username", password="your_password", host="localhost", port="5432")
        cur = conn.cursor()
        cur.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        item = cur.fetchone()
        conn.close()
        if item:
            return MenuItem(item[1], item[2])
        else:
            return None

    @classmethod
    def all_items(cls):
        conn = psycopg2.connect(database="your_database_name", user="your_username", password="your_password", host="localhost", port="5432")
        cur = conn.cursor()
        cur.execute("SELECT * FROM Menu_Items")
        items = cur.fetchall()
        conn.close()
        return [MenuItem(item[1], item[2]) for item in items]
