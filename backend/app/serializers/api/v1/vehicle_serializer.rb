class Api::V1::VehicleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :vin
end
