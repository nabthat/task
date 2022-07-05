Rails.application.config.middleware.insert_before 0, Rack::Cors do
  # allow do
  # origins '*'
  #   resource '/api/*', headers: :any, methods: :get,
  #   if: proc { |env| ENV['API_REQUEST_ORIGINS'].presence.split(',').map { |origin| env['HTTP_ORIGIN'].match(/\Ahttps?:\/\/#{origin}\z/).present? }.none? }
  # end
  allow do
    origins 'localhost:4200'
    resource '/api/*', headers: :any, methods: %i(get post put patch delete options head), credentials: true
  end
end