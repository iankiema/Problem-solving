class Swimmable
  def swim
    puts 'Can swim'
  end
end

class Fish < Swimmable

end

fish_instance = Fish.new

fish_instance.swim
