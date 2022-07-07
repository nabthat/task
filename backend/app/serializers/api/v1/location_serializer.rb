class Api::V1::LocationSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :city, :street, :state, :zipcode, :name

end
