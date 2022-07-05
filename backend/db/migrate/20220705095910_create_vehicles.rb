class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles, id: :uuid do |t|
      t.string :vin
      t.string :stock
      
      t.integer :year
      t.string :make
      t.string :model
      t.string :trim

      t.integer :price

      t.timestamps
    end
  end
end
