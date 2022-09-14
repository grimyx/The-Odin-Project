# Player class
# name            - players name
# value           - value to be writen to gameborad
# turn            - does this player plays first or second
# playerSign      - sign that represents this player on the board

class Player

  attr_reader :name, :turn, :value, :playerSign

  def initialize( name, turn )
    @name = name
    @turn = turn
    if turn == 1
      @value = 1
      @playerSign = 'X'
    elsif turn == 2
      @value = 10
      @playerSign = 'O'
    end
  end

  def play()
    puts "#{@name}'s turn"
    print "Please enter x : "
    x = gets.chomp.to_i
    print "Please enter y : "
    y = gets.chomp.to_i

    return [x,y]
  end

end
