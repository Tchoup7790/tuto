require 'sinatra'
require 'csv'

get '/' do
    erb :form
end

post '/' do
    file = params[:file]

    @variable = CSV.read(file[:tempfile], headers:true)
    erb :show
end
