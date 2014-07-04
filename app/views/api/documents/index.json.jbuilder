json.array!(@documents) do |document|
  json.(document, :id, :title)
end