def decrypt_matrix(matrix):
    
    rows = matrix.split('\n')

  
    max_length = max(len(row) for row in rows)

    
    columns = [[] for _ in range(max_length)]

    
    for row in rows:
        for col_index, char in enumerate(row):
            if char.isalnum():
                columns[col_index].append(char)

    
    secret_message = ""
    for column in columns:
        secret_message += "".join(column) + " "

    
    decrypted_message = ""
    last_alpha_index = 0
    for i in range(len(secret_message)):
        if not secret_message[i].isalnum():
            decrypted_message += secret_message[last_alpha_index:i] + " "
            last_alpha_index = i + 1

    return decrypted_message.strip()

if __name__ == "__main__":
    matrix = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

    decrypted_message = decrypt_matrix(matrix)
    print("Decrypted Message:")
    print(decrypted_message)
