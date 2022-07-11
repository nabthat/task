class AddMsrpToVehicles < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :msrp, :integer
  end
end
