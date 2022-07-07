class Api::V1::VehicleSerializer
  include FastJsonapi::ObjectSerializer
  include FastJsonapi::Pagination

  attributes :vin, :make, :model, :trim, :year, :price, :stock, :status

  has_one :location

end
