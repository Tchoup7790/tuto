require 'sinatra'
  
get '/' do
    "Hello World!"
end

get '/bob' do 
    "Hello Bob!"
end

get '/:name' do |name|
    "Hello #{name}!"
end

get '/say/*/to/*' do |action, name|
    "#{action} #{name}!"
end


set(:probability) { |value| condition { rand <= value } }

get '/lottery/win_a_car', :probability => 0.1 do
  "You won!"
end

get '/lottery/win_a_car' do
  "Sorry, you lost."
end