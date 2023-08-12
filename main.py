import pandas as pd
#Exercise 1
url = 'https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv'
chipo = pd.read_csv(url, sep='\t')

print(chipo.head(10))

total_rows = chipo.shape[0]
print("Total number of entries:", total_rows)

total_columns = chipo.shape[1]
print("Total number of columns:", total_columns)

column_names = chipo.columns
print("Column names:", column_names)

data_index = chipo.index
print("DataFrame index:", data_index)

most_ordered_item = chipo['item_name'].value_counts().idxmax()
print("Most ordered item:", most_ordered_item)

total_items_ordered = chipo['quantity'].sum()
print("Total number of items ordered:", total_items_ordered)

most_ordered_choice = chipo['choice_description'].value_counts().idxmax()
print("Most ordered choice:", most_ordered_choice)

chipo['item_price'] = chipo['item_price'].apply(lambda x: float(x[1:]))

total_revenue = chipo['item_price'].sum()
print("Total revenue:", total_revenue)

total_orders = chipo['order_id'].nunique()
print("Total number of orders:", total_orders)

average_order_value = total_revenue / total_orders
print("Average order value:", average_order_value)

unique_items_sold = chipo['item_name'].nunique()
print("Total number of unique items sold:", unique_items_sold)

#Exercise 2
products_above_10 = chipo[chipo['item_price'] > 10]
count_above_10 = products_above_10.shape[0]

print("Count of products costing more than $10:", count_above_10)

#Exercise 3
import pandas as pd

url = 'https://raw.githubusercontent.com/justmarkham/DAT8/master/data/u.user'
users = pd.read_csv(url, sep='|')

mean_age_per_occupation = users.groupby('occupation')['age'].mean()

print("Mean age per occupation:")
print(mean_age_per_occupation)

#Exercise 4

import pandas as pd

data1_raw = {
    'ID': [1, 2, 3],
    'Name': ['Alice', 'Bob', 'Charlie']
}
data1 = pd.DataFrame(data1_raw)

data2_raw = {
    'ID': [4, 5, 6],
    'Name': ['David', 'Eva', 'Frank']
}
data2 = pd.DataFrame(data2_raw)

data3_raw = {
    'ID': [7, 8, 9],
    'Age': [25, 30, 22]
}
data3 = pd.DataFrame(data3_raw)

all_data = pd.concat([data1, data2], ignore_index=True)

all_data_col = pd.concat([data1, data2], axis=1)

print("Merged DataFrame (rows):")
print(all_data)

print("\nMerged DataFrame (columns):")
print(all_data_col)

#Exercise 5

import pandas as pd

url = 'https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv'
iris = pd.read_csv(url)

iris.columns = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'species']

missing_values = iris.isnull().sum()

print("Missing values in 'iris' dataset:")
print(missing_values)

#Exercise 6
import pandas as pd

data = {
    'evolution': ['Ivysaur', 'Charmeleon', 'Wartortle', 'Metapod'],
    'hp': [45, 39, 44, 45],
    'name': ['Bulbasaur', 'Charmander', 'Squirtle', 'Caterpie'],
    'pokedex': ['yes', 'no', 'yes', 'no'],
    'type': ['grass', 'fire', 'water', 'bug']
}

pokemon = pd.DataFrame(data)

column_order = ['name', 'type', 'hp', 'evolution', 'pokedex']
pokemon = pokemon[column_order]

print("DataFrame 'pokemon' with rearranged columns:")
print(pokemon)

#Exercise 7
import pandas as pd

url = 'https://raw.githubusercontent.com/justmarkham/DAT8/master/data/baby_names.csv'
baby_names = pd.read_csv(url)

print("First 10 entries of 'baby_names':")
print(baby_names.head(10))

columns_to_drop = ['Unnamed: 0', 'Id']
baby_names = baby_names.drop(columns=columns_to_drop)

print("\nDataFrame 'baby_names' after dropping columns:")
print(baby_names)

#Exercise 8

import pandas as pd

url = 'https://raw.githubusercontent.com/justmarkham/DAT8/master/data/investor_flow_of_funds.csv'
investor_data = pd.read_csv(url)

data_frequency = pd.infer_freq(investor_data['Date'])
print("Frequency of the dataset:", data_frequency)

investor_data.set_index('Date', inplace=True)

print("\nDataFrame 'investor_data' with 'Date' as the index:")
print(investor_data.head())
