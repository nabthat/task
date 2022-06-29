class Api::V1::VehiclesController < ApplicationController

  def index
    vehicles = Vehicle.all
    render json: Api::V1::VehicleSerializer.new(vehicles).serialized_json
  end

end
