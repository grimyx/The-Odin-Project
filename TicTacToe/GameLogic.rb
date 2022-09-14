# Game Logic class
# this class creates game board, and players , sets initial things
# takes input from players and sends it to game board
# checks if there is a winner, and who he is
#

require_relative 'GameBoard'
require_relative 'Player'

class Game

  def initialize( firstPlayer, secondPlayer )
    @firstPlayer = Player.new(firstPlayer, 1)
    @secondPlayer = Player.new( secondPlayer, 2 )
    @board = GameBoard.new()
    @currentPlayer = @firstPlayer
    @winner = false
  end

  # this method will start game loop
  def start()
    #greetMessage()

    while @winner == false
      tmp = @currentPlayer.play()
      if (@board.enterField(tmp[0],tmp[1], @currentPlayer.value, @currentPlayer.playerSign) )
        # stampa tabelu
        printBoard()
        # poziva metodu koja treba da proveri sume i da vidi da li ima pobednika
        checkForWinner()

        if @winner == true
          puts "Game Over !"
          puts "The winner is #{@currentPlayer.name}."
          break
        else
          if @board.isBoardFull() == false
            swap()
          else
            puts "Game Over"
            puts "It's a tie !"
            break
          end
        end
      # ukoliko ima pobednika winner = true i prekida se petlja
      # ukoliko nema proverava se koliko polja je ostalo u tabeli, odnosno da li je tabela skroz popunjena
      # ako jeste kraj igre je. ako nije
      # poziva se metoda koja ce da zameni trenutnog igraca i nastavlja se loop
      end
    end
  end

  private

  def printBoard()
    # prints game board on the screen
    # takes board array , reads it, and replaces numbers with signs
    @board.printBoard.each do |x|
      x.each do |y|
        print "#{y} "
      end
      puts ""
    end
  end

  def checkForWinner
    # takes sumX, sumY and sumD and checks to see if there is a winner
    # if there is a winner this method changes @winner to true. currentPlayer is the winner
    if checkSum( @board.sumX )
      @winner = true
    elsif checkSum( @board.sumY )
      @winner = true
    elsif checkSum( @board.sumD )
      @winner = true
    end
  end

  def checkSum( arr )
    tmp = false
    arr.each do |x|
      if x == @currentPlayer.value * 3
        tmp = true
        break
      end
    end

    tmp
  end

  def swap
    # this method simpli changes currentPlayer
    if @currentPlayer == @firstPlayer
      @currentPlayer = @secondPlayer
    else
      @currentPlayer = @firstPlayer
    end
  end

end
