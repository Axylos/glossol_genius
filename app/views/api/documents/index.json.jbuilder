json.array!(@documents) do |document|
  json.(document, :id, :title, :references, :annotatings, :user_id, :body)
end