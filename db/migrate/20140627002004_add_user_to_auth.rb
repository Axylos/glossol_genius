class AddUserToAuth < ActiveRecord::Migration
  def change
    remove_column :auths, :expires_at, :integer
    add_column :auths, :user_id, :integer
    add_index :auths, :user_id
  end
  
  
end
