def display_board(board):
    """
    Display the Tic Tac Toe board.
    """
    print("-------------")
    for row in board:
        print("| " + " | ".join(row) + " |")
        print("-------------")

def player_input(player):
    """
    Get the position from the player.
    """
    while True:
        try:
            position = int(input(f"Player {player}, enter your position (1-9): "))
            if 1 <= position <= 9:
                return position
            else:
                print("Invalid input. Position must be between 1 and 9.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def check_win(board, player):
    """
    Check whether there is a winner or not.
    """
    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True

    # Check columns
    for col in range(3):
        if all(row[col] == player for row in board):
            return True

    # Check diagonals
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True

    return False

def play():
    """
    The main function to run the Tic Tac Toe game.
    """
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    turn = 0

    for _ in range(9):  # Maximum 9 turns
        display_board(board)
        player = players[turn % 2]
        position = player_input(player)

        row, col = (position - 1) // 3, (position - 1) % 3
        if board[row][col] == " ":
            board[row][col] = player
            if check_win(board, player):
                display_board(board)
                print(f"Congratulations! Player {player} wins!")
                return
            turn += 1
        else:
            print("Position is already taken. Try again.")

    display_board(board)
    print("It's a tie! Game Over.")

if __name__ == "__main__":
    play()

