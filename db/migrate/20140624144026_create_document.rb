class CreateDocument < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.integer :user_id
      t.string :title
      t.text :body
    end
    add_index :documents, :user_id
    add_index :documents, :title, unique: true
  end
end
