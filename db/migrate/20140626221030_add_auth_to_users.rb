class AddAuthToUsers < ActiveRecord::Migration
  def change
    add_column :users, :auth_id, :integer
    add_index :users, :auth_id
  end
  
end
