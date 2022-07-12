class AddLocationIdToVehicles < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :location_id, :uuid, index: true
  end
end
