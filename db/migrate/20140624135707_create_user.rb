class CreateUser < ActiveRecord::Migration
  def change
    create_table :users, force: true do |t|
      t.string :email
      t.string :password_digest

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
