class Api::V1::VehicleSerializer
  include FastJsonapi::ObjectSerializer
  include FastJsonapi::Pagination

  set_key_transform :dash

  attributes :vin, :make, :model, :trim, :year, :price, :msrp, :monthly_payment, :stock

  attributes :name do |model, params|
    [model.make, model.model, model.trim].map(&:presence).compact.join(' ')
  end

  attributes :status do |model, params|
    model.translated_status
  end

  attributes :kind do |model, params|
    model.translated_kind
  end

  has_one :location

end
