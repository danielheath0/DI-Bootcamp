import psycopg2, config


conn = psycopg2.connect(
    host=config.HOSTNAME,
    user=config.USERNAME,
    password=config.PASSWORD,
    dbname=config.DATABASE,
    )
cursor = conn.cursor()

def execute_query(query):
    cursor.execute(query)
    conn.commit()
    
    





class MenuItem:
    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price

    def save(self):
        query = f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.name}', {self.price});"
        execute_query(query) 

    def delete(self):
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}'"
        execute_query(query)

    def update(self, new_name=None, new_price=None):
        self.new_name = new_name
        self.new_price = new_price
        
        if new_name == None and new_price == None:
            query = ""
        elif new_name == None:
            query = f"UPDATE menu_items SET item_price = '{self.new_price}' WHERE item_name = '{self.name}'"
        elif new_price == None:   
            query = f"UPDATE menu_items SET item_name = '{self.new_name}' WHERE item_name = '{self.name}'"     
        else:
            query = f"UPDATE menu_items SET item_name = '{self.new_name}', item_price = '{self.new_price}' WHERE item_name = '{self.name}'"
        execute_query(query)
    
       
        
    
        


# food = MenuItem("Sausage", 5)
# food2 = MenuItem("Bacon", 12)
# food3 = MenuItem("Eggs", 3)
# food4 = MenuItem("Bread", 2)
# food.save()
# food2.save()
# food3.save()
# food4.save()
# food.delete()
# food2.update(new_price=15)
# food3.update(new_name="Scrambled eggs")
# food4.update("Toast",3)

