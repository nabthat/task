class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations, id: :uuid do |t|

      t.string :name
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :street

      t.timestamps
    end
  end
end
