class AddKindToVehicles < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :kind, :integer, default: 0, null: false
  end
end
