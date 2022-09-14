# GameBoard class
# This class :
#   - creates gameBoard array[3,3]
#   - counts played turns
#   - add new field to the board(array)
#   - check if the field is taken
#   - calculates sums of all rows, columns and diagonals
#   - checks if there is a winner
#   - prints the board

class GameBoard

  attr_reader :sumX, :sumY, :sumD, :fieldsTaken, :gameBoard, :printBoard

  def initialize
    @gameBoard = Array.new(3) {Array.new(3,0)}         # holds game fields
    @printBoard = Array.new(3) {Array.new(3, ' ')}     # variation of game board that is used for printing and holds X and O
    @sumX = Array.new(3,0)                             # sums of all rows
    @sumY = Array.new(3,0)                             # sums of all columns
    @sumD = Array.new(2,0)                             # sums of all diagonals
    @fieldsTaken = 0                                   # how mamy fields are taken so far
  end

  # enters field in gameBoard array
  def enterField( x, y, value, sign )
    if isFieldEmpty(x,y)
      @gameBoard[x][y] = value
      @printBoard[x][y] = sign
      calculateSums(x,y,value)
      @fieldsTaken += 1
      return true
    else
      return false
    end
  end

  def isBoardFull()
    if @fieldsTaken < 9
      return false
    else
      return true
    end
  end

  private

  FIRSTDIAGONAL = [[0,0],[1,1],[2,2]]
  SECONDDIAGONAL = [[0,2],[1,1],[2,0]]

  # checks if the selected field is empty or not
  def isFieldEmpty( x, y )
    if @gameBoard[x][y] == 0
      return true
    else
      return false
    end
  end

  def calculateSums( x, y, v )
    @sumX[x] += v
    @sumY[y] += v

    tmp = [x,y]

    FIRSTDIAGONAL.each do |x|
      if x == tmp
        @sumD[0] += v
        break
      end
    end

    SECONDDIAGONAL.each do |x|
      if x == tmp
         @sumD[1] +=v
         break
       end
     end

  end

end
