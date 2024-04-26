require 'csv'

data = CSV.read("../../dataset/MOCK_DATA.csv", headers:true)
data.each {|elt|
    puts "#{elt["first_name"]} #{elt["last_name"]}"
}
