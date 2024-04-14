puts "Hello World"

def h 
	puts "Hello h"
end

def hName(name)
	puts "Hello #{name}"
end

puts hName("Tom")

puts hName "Tom"


class Greeter 
	def initialize(name = "World")
		@name = name
	end
	def say_hi
		puts "Hi #{@name}"
	end
	def say_bye
		puts "Bye #{@name}"		
	end
end

g = Greeter.new("Test")

puts g.say_hi
puts g.say_bye

# List of methods
# puts Greeter.instance_methods

puts g.respond_to?("name")
puts g.respond_to?("say_hi")

