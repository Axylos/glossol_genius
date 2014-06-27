class ChangeAuthIdInUsers < ActiveRecord::Migration
  def change
    change_column :users, :auth_id, :string
  end
end
