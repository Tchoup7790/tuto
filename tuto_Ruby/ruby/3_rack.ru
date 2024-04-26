# run do |env|
#     [200, {}, ["Hello World"]]
# end

run do |env|
    headers = env.select {|k, _| k.start_with?"HTTP_"}
                .collect{|key, val| "#{key.sub(/^HTTP_/, '')}:#{val}"}
                .sort
                .join("\n")

    [200, {"content_type" => "text/plain"}, [headers]]
    # [200, {"content_type" => "text/plain"}, [env.sort.join("\n")]]
end